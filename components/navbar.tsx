"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Book, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import ActionTooltip from "./action-tooltip";
import { useModal } from "@/hook/use-modal-store";
import { ContentOwner, Publisher } from "@prisma/client";

interface NavbarProps {
  publishers: Publisher[] | null;
  contentOwners: ContentOwner[] | null;
}

const Navbar = ({ publishers, contentOwners }: NavbarProps) => {
  const { onOpen } = useModal();
  return (
    <header
      className={cn(
        " bg-neutral-100 dark:bg-neutral-900 h-[10%] sm:h-[8%]  sticky top-0 w-full z-30 opacity-95 border-b"
      )}
    >
      <nav className="py-4 px-8  md:px-20 flex justify-between items-center">
        <Link href={"/"} className="flex justify-between items-center gap-1">
          <Book className="w-5 h-5 text-blue-500" />
          <span className="underline font-bold text-lg">BIT-Book</span>
        </Link>
        <div className="flex items-center gap-10">
          <ActionTooltip title="Create New Book">
            <Button
              className="flex items-center gap-x-1"
              onClick={() =>
                onOpen("createBook", { contentOwners, publishers })
              }
            >
              <Plus className="w-4 h-4" />
              Create
            </Button>
          </ActionTooltip>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
