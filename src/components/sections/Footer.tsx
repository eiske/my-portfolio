import { Button } from "@/components/ui/button";
import { onScrollToTop } from "@/lib/utils";
import { COLORS } from "@/lib/constants";
import { ArrowUp } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "Resume",
    href: "https://drive.usercontent.google.com/u/0/uc?id=1E9fXdX3ZcRfNFvdDTqbuJ70Ju5bVH4Mu&export=download",
    external: false
  },
  {
    label: "LinkedIn", 
    href: "https://www.linkedin.com/in/eiske/",
    external: true
  },
  {
    label: "Email",
    href: "mailto:hashimoto.eiske@gmail.com",
    external: false
  },
  {
    label: "GitHub",
    href: "https://github.com/eiske",
    external: true
  }
] as const;

export default function Footer() {
  return (
    <footer
      className="h-[600px] md:h-screen fixed bottom-0 left-0 w-full z-1"
      style={{ backgroundColor: COLORS.TEXT_LIGHT_BG }}
      role="contentinfo"
    >
      <div className="h-full flex items-center justify-center">
        <div className="container">
          <ul
            className="list-none p-0 m-0 text-center md:flex md:justify-center md:items-center md:gap-3"
            role="list"
          >
            {SOCIAL_LINKS.map(({ label, href, external }) => (
              <li key={label} role="listitem">
                <Button className="text-lg md:text-3xl" asChild variant="link">
                  <a 
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    {label}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 w-full p-10 md:p-20">
        <div className="flex flex-col gap-10">
          <div className="w-full flex justify-center">
            <Button
              onClick={onScrollToTop}
              size="icon"
              variant="ghost"
              className="border-none cursor-pointer hover:bg-transparent hover:scale-150 transition duration-400"
              aria-label="Scroll to top"
            >
              <ArrowUp />
            </Button>
          </div>
          <div className="flex justify-between items-center flex-wrap w-full">
            <div>
              <p className="text-lg md:text-3xl">© Eiske</p>
            </div>
            <div>
              <Button variant="link" asChild className="text-lg md:text-3xl">
                <a href="mailto:hashimoto.eiske@gmail.com">
                  hashimoto.eiske@gmail.com
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 