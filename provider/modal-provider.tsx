"use client";
import CreateBookModal from "@/components/modal/create-book-modal";
import DeleteBookModal from "@/components/modal/delete-book-modal";
import EditBookModal from "@/components/modal/edit-book-modal";
import { useEffect, useState } from "react";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  //prevent hydration
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <CreateBookModal />
      <DeleteBookModal />
      <EditBookModal />
    </>
  );
};

export default ModalProvider;
