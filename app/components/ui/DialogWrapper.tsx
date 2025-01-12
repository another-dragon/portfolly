"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DialogWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function DialogWrapper({
  isOpen,
  onClose,
  children,
}: DialogWrapperProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0 bg-[#2D2D2D] border-gray-800">
        {children}
      </DialogContent>
    </Dialog>
  );
}
