import Link from "next/link";

export default function Works() {
  return (
    <main>
      <h1>Works</h1>
      <ul>
        <li>
          <Link href="/works/photoshoots">Photoshoots</Link>
        </li>
        <li>
          <Link href="/works/band">Band</Link>
        </li>
        <li>
          <Link href="/works/sound-design">Sound Design</Link>
        </li>
      </ul>
    </main>
  );
}
