"use client";
import Link from "next/link";
import ProductCart from "./components/ProductCart/ProductCart";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCart />
    </main>
  );
}
