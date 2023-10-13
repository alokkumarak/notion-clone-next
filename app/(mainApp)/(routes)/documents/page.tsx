"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";

const page = () => {
  const { user } = useUser();

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
        <Button>
          <PlusCircleIcon className="h-6 w-6 mr-2" />
          Create Doc
        </Button>
      </div>
    </>
  );
};

export default page;
