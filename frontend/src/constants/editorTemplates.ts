export const EDITOR_TEMPLATES = {
  cpp: `#include <iostream>
using namespace std;

int main() {

    return 0;
}`,

  c: `#include <stdio.h>

int main() {

    return 0;
}`,

  java: `public class Main {

    public static void main(String[] args) {

    }

}`,

  python: `def solve():
    pass

if __name__ == "__main__":
    solve()`,
};