"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BookPlus, Loader2 } from "lucide-react";
import { useModal } from "@/hook/use-modal-store";
import FormInput from "../form/form-input";
import FormButton from "../form/form-button";
import FormSelect from "../form/form-select";
import { useAction } from "@/hook/use-action";
import { createBook } from "@/actions/create-book";
import { toast } from "sonner";
import FileUpload from "../file-upload";
import { ChangeEvent, useState } from "react";

const CreateBookModal = () => {
  const [image, setImage] = useState<string | undefined>();
  const { isOpen, onClose, type, data } = useModal();
  const { contentOwners, publishers } = data;
  const isModalOpen = isOpen && type === "createBook";
  const { fieldsErrors, execute, isLoading } = useAction(createBook, {
    onSuccess: (data) => {
      toast.success(`Book "${data.bookname}" created`);
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

    execute({ bookname, co_id, publisher_id, price, cover_photo: image });
  }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const uploadedFile = event.target.files[0];
      const uploadedImageUrl = URL.createObjectURL(uploadedFile);
      setImage(uploadedImageUrl);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg md:text-xl flex items-center gap-2 justify-center">
            Create New Book
            <BookPlus className="w-5 h-5 md:w-6 md:h-6 text-indigo-500" />
          </DialogTitle>
        </DialogHeader>
        <form action={onSubmit} className="space-y-4">
          <div>
            <FormInput
              id="bookname"
              label="Book Name:"
              placeholder="e.g Hello Next.js"
              errors={fieldsErrors}
            />
          </div>
          <div>
            <FormSelect
              id="co_id"
              label="Content Owner:"
              placeholder="e.g U Mg Mg"
              items={contentOwners}
              errors={fieldsErrors}
            />
          </div>
          <div>
            <FormSelect
              id="publisher_id"
              label="Publisher:"
              placeholder="e.g Myint"
              items={publishers}
              errors={fieldsErrors}
            />
          </div>
          <div>
            <FormInput
              id="price"
              label="Price:"
              type="number"
              placeholder="e.g 111"
              errors={fieldsErrors}
            />
          </div>
          <div>
            <FileUpload
              endpoint="imageUpload"
              value={image}
              onChange={(e) => setImage(e)}
            />
          </div>
          <FormButton disabled={isLoading} className="flex items-center gap-1">
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Creating...
              </>
            ) : (
              <>Create</>
            )}
          </FormButton>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBookModal;
