"use client";

import { Book } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import Image from "next/image";

import { Copy, EditIcon, MoreHorizontal, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const columns: ColumnDef<Book>[] = [
  {
    accessorKey: "bookname",
    header: () => <div className="font-semibold">Name</div>,
  },
  {
    accessorKey: "cover_photo",
    header: () => <div className="font-semibold">Cover Image</div>,
    cell: ({ row }) => {
      const img = row.getValue("cover_photo") as string;

      if (img) {
        return (
          <div className="relative w-20 h-20 rounded-md">
            <Image fill src={img} alt={img} className="rounded-md" />
          </div>
        );
      }
    },
  },
  {
    accessorKey: "co_id",
    header: () => <div className="font-semibold">Content Owner</div>,
  },
  {
    accessorKey: "publisher_id",
    header: () => <div className="font-semibold">Publisher</div>,
  },
  {
    accessorKey: "price",
    header: () => <div className="font-semibold">Price</div>,
    cell: ({ row }) => {
      return (
        <div>
          {row.getValue("price")} <span className="text-neutral-700">MMK</span>
        </div>
      );
    },
  },
  {
    accessorKey: "created_timetick",
    header: () => <div className="font-semibold">Created TimeTick</div>,
    cell: ({ row }) => {
      return (
        <div>
          {moment(row.getValue("created_timetick")).format("Do MMM YY")}
        </div>
      );
    },
  },
  {
    header: () => (
      <div className="font-semibold text-center">
        Actions
        <br />
        (edit/delete/etc...)
      </div>
    ),
    id: "actions",
    cell: ({ row }) => {
      const bookName = row.getValue("bookname") as string;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 flex p-0 ">
              <MoreHorizontal className="h-6 w-6 " />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem className="flex items-center gap-x-1 cursor-pointer">
              <EditIcon className="w-4 h-4" /> Edit the book
            </DropdownMenuItem>
            <DropdownMenuItem
              className="flex items-center gap-x-1 cursor-pointer"
              onClick={() => navigator.clipboard.writeText(bookName)}
            >
              <Copy className="w-4 h-4" />
              Copy book name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer flex items-center gap-x-1 transition-colors bg-rose-500 hover:bg-rose-700 focus:bg-rose-600 text-white ">
              <Trash2 className="w-4 h-4" />
              Delete the book
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
