"use client";

import { ConfirmModal } from "@/components/modal/confirmModal";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

interface BannerProps {
  documentId: Id<"documents">;
}

const Banner = ({ documentId }: BannerProps) => {
  const params = useParams();
  const remove = useMutation(api.documents.remove);
  const restore = useMutation(api.documents.restore);
  const router = useRouter();

  const onRemove = () => {
    const promise = remove({ documentId });

    toast.promise(promise, {
      loading: "Removing document...",
      success: "Document removed!",
      error: "Failed to remove document",
    });
    router.push(`/documents`);
  };

  const onRestore = () => {
    const promise = restore({ documentId });

    toast.promise(promise, {
      loading: "Restoring document...",
      success: "Document restored!",
      error: "Failed to restore document",
    });
  };

  return (
    <div className="w-full bg-rose-500 text-center text-sm p-2 text-white flex items-center gap-x-2 justify-center">
      <p>This page is in the Trash.</p>
      <Button
        size="sm"
        onClick={onRestore}
        variant="outline"
        className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal mx-5"
      >
        Restore page
      </Button>
      <ConfirmModal onConfirm={onRemove}>
        <Button
          size="sm"
          variant="outline"
          className="border-white bg-transparent hover:bg-primary/5 text-white hover:text-white p-1 px-2 h-auto font-normal"
        >
          Delete forever
        </Button>
      </ConfirmModal>
    </div>
  );
};

export default Banner;
