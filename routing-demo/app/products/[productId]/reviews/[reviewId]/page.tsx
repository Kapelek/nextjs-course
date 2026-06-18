import { notFound } from "next/navigation";

const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }

  return (
    <h1>
      Product {productId}, Review {reviewId}
    </h1>
  );
};
export default ProductReview;
