import { Technologies } from "@/app/(pages)/(landings)/bento-grid/_parts/components/Technologies";
import { Navbar } from "@/app/(pages)/(landings)/bento-grid/_parts/components/Navbar";
import { Headline } from "@/app/(pages)/(landings)/bento-grid/_parts/components/Headline";
import { ButtonWithIcon } from "@/app/(pages)/(landings)/bento-grid/_parts/components/ButtonWithIcon";

export const Header = () => (
  <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
    <div className="flex flex-col grow max-md:mt-9 max-md:max-w-full">
      <Navbar />
      <Headline />
      <div className="flex justify-center">
        <ButtonWithIcon className="bg-purple-900" />
      </div>
      <Technologies />
    </div>
  </div>
);
