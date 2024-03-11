import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(req: NextRequest) {
  const products = [
    {
      id: 1,
      name: "Milk",
      price: 2.5,
    },
    {
      id: 2,
      name: "Sugar",
      price: 3,
    },
  ];
  return NextResponse.json(products, { status: 200 });
}

export async function POST(req: NextRequest) {
  const product = await req.json();
  const validation = schema.safeParse(product);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  return NextResponse.json(
    {
      id: 10,
      name: product.name,
      price: product.price,
    },
    { status: 201 }
  );
}
