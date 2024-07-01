import React from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          className="cursor-pointer"
        />
        <Input
          type="text"
          placeholder="Search globally..."
          className="text-dark400_light700 paragraph-regular text-light-400 dark:placeholder:text-light-500 no-focus border-none bg-transparent shadow-none outline-none"
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
