import fs from "fs";
import path from "path";
import { promisify } from "util";
import { exec } from "child_process";

const execAsync = promisify(exec);

export const runCpp = async (sourceCode, input) => {

    const jobId = Date.now();

    const tempDir = "temp";

    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
    }

    const codePath = path.join(tempDir, `${jobId}.cpp`);
    const inputPath = path.join(tempDir, `${jobId}.txt`);
    const exePath = path.join(tempDir, `${jobId}.exe`);

    fs.writeFileSync(codePath, sourceCode);
    fs.writeFileSync(inputPath, input);

    // Compile Phase
    try {

        await execAsync(
            `g++ "${codePath}" -o "${exePath}"`
        );

    } catch (error) {

        return {
            success: false,
            type: "Compilation Error",
            error: error.message
        };
    }

    // Run Phase
    try {

        const { stdout } = await execAsync(
            `cmd /c "${exePath} < ${inputPath}"`,
            {
                timeout: 2000
            }
        );

        return {
            success: true,
            output: stdout.trim()
        };

    } catch (error) {

        if (
            error.killed ||
            error.signal === "SIGTERM"
        ) {
            return {
                success: false,
                type: "Time Limit Exceeded"
            };
        }

        return {
            success: false,
            type: "Runtime Error",
            error: error.message
        };
    }
};