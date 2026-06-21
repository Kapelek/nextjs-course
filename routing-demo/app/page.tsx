import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome home!</h1>
      <Link href="/blog">Go To Blog</Link>
      <Link href="/products">Go To Products</Link>
      <Link href="articles/breaking-news-123?lang=en">Read In English</Link>
      <Link href="articles/breaking-news-123?lang=fr">Read In French</Link>
    </>
  );
}
