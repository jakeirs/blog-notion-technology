import { Button } from "@/components/ui/button";
import { CalendarDays, Eye } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ButtonWithIcon } from "@/app/(pages)/(landings)/bento-grid/_parts/components/ButtonWithIcon";
import { ArrowUpRight } from "lucide-react";

export const ArticlePreview = ({}) => (
  <AspectRatio
    ratio={16 / 10}
    className=" relative flex flex-col overflow-hidden px-5 pt-4 pb-2 w-full max-md:max-w-full rounded-3xl"
  >
    <img
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/94f90e89553e37e9570275cd950fc675a1396397d2e032c6efb8b6709aca9289?apiKey=46e7b4c85a984a3fa1af4eb32b3d62ca&"
      className="object-cover absolute inset-0 size-full"
    />
    <div className="z-20">
      <div className="flex justify-between">
        <div className="">
          <Button>Last Article</Button>
        </div>
        <div className="flex px-4 py-3 text-xs font-extrabold bg-white rounded-[35px] text-neutral-700">
          <div>13/03/24</div>
          <CalendarDays className="h-4 w-4 self-center ml-1 mr-4 " />
          <span>3 mins</span>
          <Eye className="h-4 w-4 self-center ml-1" />
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 p-4 max-w-[350px]">
      <div className="text-4xl font-medium tracking-tight leading-10">
        The fastest way to create websites
      </div>
      <div className="mt-9 text-lg italic leading-8">
        Take your web dev skills to the next level with our comprehensive
        Builder.io course
      </div>
    </div>
    <div className="absolute bottom-0 right-0 p-4">
      <Button className="bg-cyan-700 rounded-full h-14 w-14">
        <ArrowUpRight />
      </Button>
    </div>
  </AspectRatio>
);
