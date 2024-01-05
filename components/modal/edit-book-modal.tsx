"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Edit, Loader2 } from "lucide-react";
import { useModal } from "@/hook/use-modal-store";
import FormInput from "../form/form-input";
import FormButton from "../form/form-button";
import FormSelect from "../form/form-select";
import { useAction } from "@/hook/use-action";
import { toast } from "sonner";
import FileUpload from "../file-upload";
import { useEffect, useState } from "react";
import { editBook } from "@/actions/edit-book";

const EditBookModal = () => {
  const { isOpen, onClose, type, data } = useModal();
  const { contentOwners, publishers, book, contentOwner, publisher } = data;

  const isModalOpen = isOpen && type === "editBook";
  const imageUrl = book?.cover_photo ?? "";

  const [image, setImage] = useState<string | undefined>();

  useEffect(() => {
    // Set the image state after imageUrl is retrieved
    setImage(imageUrl);
  }, [imageUrl]); //

  const { fieldsErrors, execute, isLoading } = useAction(editBook, {
    onSuccess: (data) => {
      toast.success(`Book "${data.bookname}" edited`);
      onClose();
      setImage("");
    },
    onError: (error) => {
      toast.error(error);
    },
  });

  function onSubmit(formData: FormData) {
    const bookname = formData.get("bookname") as string;
    const co_id = parseInt(formData.get("co_id") as string, 10);
    const publisher_id = parseInt(formData.get("publisher_id") as string, 10);
    const price = parseInt(formData.get("price") as string, 10);
    const idx = parseInt(formData.get("idx") as string, 10);
    const book_uniq_idx = formData.get("book_uniq_idx") as string;

    execute({
      bookname,
      co_id,
      publisher_id,
      price,
      cover_photo: image,
      idx,
      book_uniq_idx,
    });
  }

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setImage(book?.cover_photo!);
  }, []);

  //prevent hydration
  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl flex items-center gap-2 justify-center">
            Editing the Book
            <Edit className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
          </DialogTitle>
        </DialogHeader>
        <form action={onSubmit} className="space-y-4">
          <div>
            <FormInput
              id="bookname"
              label="Book Name:"
              placeholder="e.g Hello Next.js"
              errors={fieldsErrors}
              defaultValue={book?.bookname}
            />
          </div>
          <div>
            <FormSelect
              id="co_id"
              label="Content Owner:"
              placeholder="e.g U Mg Mg"
              items={contentOwners}
              errors={fieldsErrors}
              defaultValue={`${contentOwner?.idx}`}
            />
          </div>
          <div>
            <FormSelect
              id="publisher_id"
              label="Publisher:"
              placeholder="e.g Myint"
              items={publishers}
              errors={fieldsErrors}
              defaultValue={`${publisher?.idx}`}
            />
          </div>
          <div>
            <FormInput
              id="price"
              label="Price:"
              type="number"
              placeholder="e.g 111"
              errors={fieldsErrors}
              defaultValue={`${book?.price}`}
            />
          </div>
          <div>
            <FileUpload
              endpoint="imageUpload"
              value={image}
              onChange={(e) => {
                setImage(e);
              }}
            />
          </div>
          <input type="hidden" name="idx" value={book?.idx} />
          <input
            type="hidden"
            name="book_uniq_idx"
            value={book?.book_uniq_idx}
          />
          <FormButton disabled={isLoading} className="flex items-center gap-1">
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Saving...
              </>
            ) : (
              <>Save</>
            )}
          </FormButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditBookModal;
