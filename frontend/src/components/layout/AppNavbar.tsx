"use client";

export function AppNavbar() {
  return (
    <header className="h-16 border-b bg-background px-6 flex items-center justify-between">
      <h1 className="text-xl font-bold">CodeForU</h1>

      <div className="text-sm text-muted-foreground">
        Welcome
      </div>
    </header>
  );
}