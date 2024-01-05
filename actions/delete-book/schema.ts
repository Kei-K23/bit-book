import { z } from "zod";

export const DeleteBookSchema = z.object({
  idx: z.number({
    required_error: "Book id is required!",
  }),
  book_uniq_idx: z.string({
    required_error: "Book unique idx is required!",
  }),
});
