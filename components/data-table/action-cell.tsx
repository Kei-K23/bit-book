"use client";
import { Row } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";
import { BookWithContentOwnerAndPublisher } from "./columns";
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
import { useModal } from "@/hook/use-modal-store";
import { ContentOwner, Publisher } from "@prisma/client";
import {
  fetchAllContentOwner,
  fetchAllContentOwnerFromApi,
  fetchAllPublisher,
  fetchAllPublisherFromApi,
} from "@/lib/fetch-data";
import { toast } from "sonner";

const ActionCell = ({
  row,
}: {
  row: Row<BookWithContentOwnerAndPublisher>;
}) => {
  const [contentOwners, setContentOwners] = useState<ContentOwner[] | null>();
  const [publishers, setPublishers] = useState<Publisher[] | null>();
  const bookName = row.getValue("bookname") as string;
  const { onOpen } = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const c = await fetchAllContentOwnerFromApi();
        const p = await fetchAllPublisherFromApi();
        setContentOwners(c);
        setPublishers(p);
      } catch (error) {
        toast.error("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 flex p-0 ">
          <MoreHorizontal className="h-6 w-6 " />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          className="flex items-center gap-x-1 cursor-pointer"
          onClick={() =>
            onOpen("editBook", {
              book: row.original,
              contentOwner: row.original.contentOwner,
              publisher: row.original.publisher,
              publishers,
              contentOwners,
            })
          }
        >
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
        <DropdownMenuItem
          className="cursor-pointer flex items-center gap-x-1 transition-colors bg-rose-500 hover:bg-rose-700 focus:bg-rose-600 text-white"
          onClick={() => onOpen("deleteBook", { book: row.original })}
        >
          <Trash2 className="w-4 h-4" />
          Delete the book
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionCell;
