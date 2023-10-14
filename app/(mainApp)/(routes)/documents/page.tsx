"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/clerk-react";
import { useMutation } from "convex/react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const DocumentPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({
      title: "Untitled",
    });

    toast.promise(promise, {
      loading: "Creating document...",
      success: "Document created",
      error: "Failed to create a new document",
    });
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image
          src="/empty.png"
          height="300"
          width="300"
          alt="Empty"
          className="dark:hidden"
        />
        <Image
          src="/empty-dark.png"
          height="300"
          width="300"
          alt="Empty"
          className="hidden dark:block"
        />
        <h1 className="text-lg font-medium">
          Welcome to {user?.username}&apos;s Notion Docs
        </h1>
        <Button onClick={onCreate}>
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create Doc
        </Button>
      </div>
    </>
  );
};

export default DocumentPage;
