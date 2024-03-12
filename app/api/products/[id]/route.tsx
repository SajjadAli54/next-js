import prisma from "@/prisma/migrations/client";
import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: {
    id: string;
  };
}

export async function GET(req: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!product)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  return NextResponse.json(product, { status: 200 });
}

export async function PUT(req: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const body = await req.json();
  const existingProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!existingProduct)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  const validation = schema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  const product = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: body.name,
      price: body.price,
    },
  });
  return NextResponse.json(
    { message: "Product updated successfully", product },
    { status: 200 }
  );
}

export async function DELETE(req: NextRequest, { params }: Props) {
  const id = parseInt(params.id);
  const existingProduct = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
  if (!existingProduct)
    return NextResponse.json({ message: "Product not found" }, { status: 404 });
  await prisma.product.delete({
    where: {
      id: id,
    },
  });
  return NextResponse.json(
    { message: "Product deleted successfully" },
    { status: 200 }
  );
}
