import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col items-center">
      <Link
        href="/"
        className="mt-6 mb-4 flex h-24 w-52 items-center justify-center border-2 text-center text-xl leading-none tracking-wide"
      >
        <span>
          DOUBLE
          <br />
          HAPPINESS
        </span>
      </Link>

      <nav className="flex w-full justify-center border-y text-2xl">
        <Link href="/about" className="px-8 py-3">
          About
        </Link>

        {/* group + group-hover: CSS hover, no useState / "use client" needed */}
        <div className="group relative">
          <Link href="/works" className="block px-8 py-3">
            Works
          </Link>
          <ul className="absolute left-0 top-full z-10 hidden min-w-[14rem] border bg-white group-hover:block group-focus-within:block">
            <li>
              <Link href="/works/photoshoots" className="block px-4 py-2 hover:underline">
                Photoshoots
              </Link>
            </li>
            <li>
              <Link href="/works/sound-design" className="block px-4 py-2 hover:underline">
                Sound Design
              </Link>
            </li>
            <li>
              <Link href="/works/band" className="block px-4 py-2 hover:underline">
                Band
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/contact" className="px-8 py-3">
          Contact
        </Link>
      </nav>
    </header>
  );
}
