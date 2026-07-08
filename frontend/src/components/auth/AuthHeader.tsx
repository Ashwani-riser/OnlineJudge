interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

export default function AuthHeader({
  title,
  subtitle,
}: AuthHeaderProps) {
  return (
    <header className="mb-8 text-center">
      <h2 className="text-3xl font-bold tracking-tight">
        {title}
      </h2>

      <p className="mt-2 text-sm text-muted-foreground">
        {subtitle}
      </p>
    </header>
  );
}