import { ThemeToggleButton } from "@/components/Theme";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen h-screen text-foreground bg-background">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <a
              href="https://hamburghackaton.vercel.app"
              className="text-primary hover:text-secondary-foreground duration-100"
            >
              Hamburg Hack A Ton
            </a>
          </li>
          <li>
            <a
              href="https://athe-sv.vercel.app/"
              className="text-primary hover:text-secondary-foreground duration-100"
            >
              Athe-SV
            </a>
          </li>
        </ul>
        <div className="mt-4">
          <Link
            href="/"
            className="text-primary hover:text-secondary-foreground duration-100"
            prefetch
          >
            Back to Home
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <ThemeToggleButton />
      </div>
    </>
  );
}
