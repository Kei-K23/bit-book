"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2, LucideTrash2, Trash } from "lucide-react";
import { useModal } from "@/hook/use-modal-store";
import FormButton from "../form/form-button";
import { useAction } from "@/hook/use-action";
import { toast } from "sonner";
import { deleteBook } from "@/actions/delete-book";

const DeleteBookModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { book } = data;
  const isModalOpen = isOpen && type === "deleteBook";

  const { execute, isLoading } = useAction(deleteBook, {
    onSuccess: (data) => {
      toast.success(`Book "${data.bookname}" deleted`);
      onClose();
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  function onSubmit(formData: FormData) {
    const idx = parseInt(formData.get("idx") as string, 10);
    const book_uniq_idx = formData.get("book_uniq_idx") as string;

    execute({ book_uniq_idx, idx });
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl flex items-center gap-2 justify-center">
            Delete the Book
            <Trash className="w-5 h-5 md:w-6 md:h-6 text-rose-500" />
          </DialogTitle>
          <DialogDescription>
            This will permanently delete the book.
          </DialogDescription>
        </DialogHeader>
        <form action={onSubmit} className="space-y-4">
          <input type="hidden" name="idx" value={book?.idx} />
          <input
            type="hidden"
            name="book_uniq_idx"
            value={book?.book_uniq_idx}
          />
          <FormButton
            variant="destructive"
            disabled={isLoading}
            className="flex items-center gap-1 w-full"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Deleting...
              </>
            ) : (
              <>
                <LucideTrash2 className="w-4 h-4" /> Deleting
              </>
            )}
          </FormButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBookModal;
