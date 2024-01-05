"use client";
import React, { forwardRef, useState } from "react";
import { Label } from "../ui/label";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/utils";
import FormError from "./form-error";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ContentOwner, Publisher } from "@prisma/client";

interface FormSelectProps {
  id: string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  errors?: Record<string, string[] | undefined>;
  defaultValue?: string;
  items?: ContentOwner[] | Publisher[] | null;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  (
    {
      id,
      className,
      defaultValue,
      disabled,
      errors,
      label,
      placeholder,
      items,
    },
    ref
  ) => {
    const { pending } = useFormStatus();
    const [value, setValue] = useState(items?.[0].name);
    return (
      <div className="space-y-2">
        <div className="space-y-1">
          {label && (
            <Label
              htmlFor={id}
              className="text-sm text-muted-foreground font-semibold"
            >
              {label}
            </Label>
          )}
          <Select
            name={id}
            onValueChange={(e) => {
              setValue(`${items?.[0].idx}`);
            }}
            defaultValue={defaultValue}
          >
            <SelectTrigger
              disabled={pending || disabled}
              className={cn("text-sm px-2 py-1 h-8", className)}
              aria-describedby={`${id}-error`}
            >
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {items?.map((item) => (
                <SelectItem key={item.idx} value={`${item.idx}`}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <FormError id={id} errors={errors} />
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
