type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PhotoshootProject({ params }: Props) {
  const { slug } = await params;

  return (
    <main>
      <h1>{slug}</h1>
      <p>One photoshoot — photo and blurb later.</p>
    </main>
  );
}