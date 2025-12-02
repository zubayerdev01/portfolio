import { cn } from "@/lib/utils";

export function GridBackgroundDemo() {
  return (
    <div className=" flex h-dvh w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:70px_70px]",
          // Light mode (very subtle)
          "[background-image:linear-gradient(to_right,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.05)_1px,transparent_1px)]",
          // Dark mode (subtle)
          "dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
    </div>
  );
}
