const ProductReview = async ({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) => {
  const { productId, reviewId } = await params;
  return (
    <h1>
      Product {productId}, Review {reviewId}
    </h1>
  );
};
export default ProductReview;
