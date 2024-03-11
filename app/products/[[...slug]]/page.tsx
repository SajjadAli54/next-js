import React from "react";

interface Props {
  params: { slug: string[] };
  searchParams: { sortOrder: string };
}

const ProductsPage = ({
  params: { slug },
  searchParams: { sortOrder },
}: Props) => {
  return (
    <h1>
      Product Page {slug} {sortOrder}
    </h1>
  );
};

export default ProductsPage;
