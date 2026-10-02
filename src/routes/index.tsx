import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-6">
      <h1 className="text-5xl font-semibold tracking-tight text-neutral-900 md:text-7xl lg:text-8xl">
        Hello, World!
      </h1>
    </div>
  );
}
