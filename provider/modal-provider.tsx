"use client";
import CreateBookModal from "@/components/modal/create-book-modal";
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
    </>
  );
};

export default ModalProvider;
