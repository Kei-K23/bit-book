"use client";

import { Book, ContentOwner, Publisher } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";
import Image from "next/image";
import ActionCell from "./action-cell";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export type BookWithContentOwnerAndPublisher = Book & {
  publisher: Publisher;
  contentOwner: ContentOwner;
};

export const columns: ColumnDef<BookWithContentOwnerAndPublisher>[] = [
  {
    accessorKey: "bookname",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
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
    cell: ({ row }) => {
      return <div>{row.original.contentOwner.name}</div>;
    },
  },
  {
    accessorKey: "publisher_id",
    header: () => <div className="font-semibold">Publisher</div>,
    cell: ({ row }) => {
      return <div>{row.original.publisher.name}</div>;
    },
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
    // header: () => <div className="font-semibold">Created TimeTick</div>,
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Created TimeTick
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },

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
    cell: ({ row }) => <ActionCell row={row} />,
  },
];
