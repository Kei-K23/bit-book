import { z } from "zod";
import { DeleteBookSchema } from "./schema";
import { Book } from "@prisma/client";

import type { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof DeleteBookSchema>;
export type ReturnType = ActionState<InputType, Book>;
