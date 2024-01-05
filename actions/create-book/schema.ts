import { z } from "zod";

export const CreateBookSchema = z.object({
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
});
