"use server";

import { InputType, ReturnType } from "./type";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { CreateBookSchema } from "./schema";

async function handler(validatedData: InputType): Promise<ReturnType> {
  const { bookname, co_id, price, publisher_id, cover_photo } = validatedData;

  let book;

  try {
    book = await db.book.create({
      data: {
        bookname,
        price,
        co_id,
        publisher_id,
        cover_photo,
      },
    });
  } catch (error) {
    return {
      error: "Something went wrong when creating book",
    };
  }

  revalidatePath(`/`);
  return { data: book };
}

export const createBook = createSafeAction(CreateBookSchema, handler);
