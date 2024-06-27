'use client'
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";


export default function NavLink(props: Omit<ComponentProps<typeof Link>, 'className'>) {
  const pathname = usePathname()
  return (
    <Link
      className={cn(
        "transition-colors hover:text-foreground/80",
        pathname === props.href ? "text-foreground" : "text-foreground/60"
      )}
      {...props}
    />
  )
}