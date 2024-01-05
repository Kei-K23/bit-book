import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const books = await db.book.findMany();

    if (!books) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: "Could not fetch books",
        }),
        {
          status: 500,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: books,
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: "Could not fetch books data",
      }),
      {
        status: 500,
      }
    );
  }
}
