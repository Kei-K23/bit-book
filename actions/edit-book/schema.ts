import { z } from "zod";

export const EditBookSchema = z.object({
  bookname: z.string({
    required_error: "Book name is required!",
  }),
  co_id: z.number({
    required_error: "Content owner id is required!",
  }),
  publisher_id: z.number({
    required_error: "Publisher id is required!",
  }),
  cover_photo: z.string().optional(),
  price: z.number({
    required_error: "Price is required!",
  }),
  idx: z.number({
    required_error: "Book id is required!",
  }),
  book_uniq_idx: z.string({
    required_error: "Book unique idx is required!",
  }),
});
