import Link from "next/link";

const Products = () => {
  const productId = 100;
  return (
    <ul>
      <li>
        <Link href="/products/1">Product 1</Link>
      </li>
      <li>
        <Link href="/products/2">Product 2</Link>
      </li>
      <li>
        <Link href="/products/3" replace>
          Product 3
        </Link>
      </li>
      <li>
        <Link href={`/products/${productId}`}>Product {productId}</Link>
      </li>
    </ul>
  );
};

export default Products;
