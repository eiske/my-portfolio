import NavLink from "./NavLink";

export default function MainNav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
          <NavLink href='/'>
            Home
          </NavLink>
          <NavLink href='/about'>
            About
          </NavLink>
        </nav>
      </div>
    </header>
  )
}