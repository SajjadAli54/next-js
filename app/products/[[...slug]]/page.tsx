import React from "react";

interface Props {
  params: { slug: string[] };
}

const ProductsPage = ({ params: { slug } }: Props) => {
  return <div>Product Page {slug}</div>;
};

export default ProductsPage;
