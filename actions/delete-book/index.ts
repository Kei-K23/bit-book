"use server";

import { InputType, ReturnType } from "./type";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { createSafeAction } from "@/lib/create-safe-action";
import { DeleteBookSchema } from "./schema";

async function handler(validatedData: InputType): Promise<ReturnType> {
  const { idx, book_uniq_idx } = validatedData;

  let book;

  try {
    book = await db.book.delete({
      where: {
        idx,
        book_uniq_idx,
      },
    });
  } catch (error) {
    return {
      error: "Something went wrong when deleting book",
    };
  }

  revalidatePath(`/`);
  return { data: book };
}

export const deleteBook = createSafeAction(DeleteBookSchema, handler);
