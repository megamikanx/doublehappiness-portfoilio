export default function Band() {
  return (
    <main className="px-8 py-10">
      <h1 className="mb-10 text-4xl">Band</h1>

      <article className="mx-auto mb-16 max-w-4xl">
        <div className="h-80 w-full border bg-neutral-100" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-2xl text-center">
          Band project 1
        </p>
      </article>

      <article className="mx-auto max-w-4xl">
        <div className="h-80 w-full border bg-neutral-100" aria-hidden="true" />
        <p className="mx-auto mt-4 max-w-2xl text-center">
          Band project 2
        </p>
      </article>
    </main>
  );
}
