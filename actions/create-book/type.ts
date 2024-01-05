import { z } from "zod";
import { CreateBookSchema } from "./schema";
import { Book } from "@prisma/client";

import type { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof CreateBookSchema>;
export type ReturnType = ActionState<InputType, Book>;
