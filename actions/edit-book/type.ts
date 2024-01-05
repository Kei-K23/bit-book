import { z } from "zod";
import { EditBookSchema } from "./schema";
import { Book } from "@prisma/client";

import type { ActionState } from "@/lib/create-safe-action";

export type InputType = z.infer<typeof EditBookSchema>;
export type ReturnType = ActionState<InputType, Book>;
