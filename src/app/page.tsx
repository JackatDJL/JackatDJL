"use client";
import Image from "next/image";
import { useEffect } from "react";
import { toast } from "sonner";
import { ThemeToggleButton } from "@/components/Theme";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    toast.info("Hello, im still working on this site. Have a nice Day");
  }, []);
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen text-foreground bg-background">
        <Link href="/projects" prefetch>
          <Image
            src="logo-nbg.svg"
            alt="JackatDJL Logo"
            width={500}
            height={500}
          />
        </Link>
      </div>
      <div className="absolute bottom-0 left-0 p-4">
        <ThemeToggleButton />
      </div>
      {/* <section className="w-screen flex items-center justify-center text-3xl pt-2 pb-7">
        <h1 className="p-1 border-accent border-spacing-2 border-2 rounded-xl">
          <Link href="/projects" prefetch>
            Projects
          </Link>
        </h1>
      </section> */}
    </>
  );
}
