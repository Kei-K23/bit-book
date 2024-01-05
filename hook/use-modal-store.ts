import { BookWithContentOwnerAndPublisher } from "@/components/data-table/columns";
import { ContentOwner, Publisher } from "@prisma/client";
import { create } from "zustand";

export type ModalType = "createBook" | "editBook" | "deleteBook";

interface ModalData {
  book?: BookWithContentOwnerAndPublisher;
  publishers?: Publisher[] | null;
  contentOwners?: ContentOwner[] | null;
  publisher?: Publisher | null;
  contentOwner?: ContentOwner | null;
}
interface ModalStore {
  type: ModalType | null;
  isOpen: boolean;
  data: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  isOpen: false,
  data: {},
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ isOpen: false, type: null, data: {} }),
}));
