import Link from "next/link";

export default function Photoshoots() {
  return (
    <main className="px-8 py-10">
      <h1 className="mb-10 text-4xl">Photoshoots</h1>

      <article className="mx-auto mb-16 max-w-4xl">
        <Link href="/works/photoshoots/sample" className="block">
          <div className="h-80 w-full border bg-neutral-100" aria-hidden="true" />
        </Link>
        <p className="mx-auto mt-4 max-w-2xl text-center">
          Lorem ipsum placeholder this is for first photoshoot.
        </p>
      </article>

      <article className="mx-auto max-w-4xl">
        <div className="h-80 w-full border bg-neutral-100" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-2xl text-center">
          This is for second photoshoot.
        </p>
      </article>
    </main>
  );
}
