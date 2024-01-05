import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const contentOwners = await db.contentOwner.findMany();

    if (!contentOwners) {
      return new NextResponse(
        JSON.stringify({
          success: false,
          error: "Could not fetch content owner data",
        }),
        {
          status: 500,
        }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        data: contentOwners,
      })
    );
  } catch (e: any) {
    return new NextResponse(
      JSON.stringify({
        success: false,
        error: "Could not fetch content owner data",
      }),
      {
        status: 500,
      }
    );
  }
}
