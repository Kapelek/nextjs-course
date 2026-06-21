import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "My Blog",
  },
};

const Blog = () => {
  return (
    <>
      <h1>My blog</h1>
      <Link href="/products">Go To Products</Link>
    </>
  );
};
export default Blog;
