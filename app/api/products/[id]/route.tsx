import { NextRequest, NextResponse } from "next/server";

interface Props {
  params: {
    id: number;
  };
}

export function GET(req: NextRequest, { params }: Props) {
  const obj = {
    id: params.id,
    name: "Milk",
    price: 3,
  };

  return NextResponse.json(obj, { status: 200 });
}
