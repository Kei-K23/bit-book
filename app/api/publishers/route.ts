import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const publishers = await db.publisher.findMany();

    if (!publishers) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: "Could not fetch publisher data",
        }),
        {
          status: 500,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: publishers,
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: "Could not fetch publisher data",
      }),
      {
        status: 500,
      }
    );
  }
}
