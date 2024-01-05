"use server";

import { InputType, ReturnType } from "./type";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { EditBookSchema } from "./schema";

async function handler(validatedData: InputType): Promise<ReturnType> {
  const {
    bookname,
    co_id,
    price,
    publisher_id,
    cover_photo,
    book_uniq_idx,
    idx,
  } = validatedData;

  let book;

  try {
    book = await db.book.update({
      where: {
        idx,
        book_uniq_idx,
      },
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
      error: "Something went wrong when editing book",
    };
  }

  revalidatePath(`/`);
  return { data: book };
}

export const editBook = createSafeAction(EditBookSchema, handler);
