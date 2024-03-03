import { Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Bento2 = () => {
  return (
    <div className="rounded-3xl w-full overflow-hidden h-[40vh] grid grid-rows-2 gap-5">
      <div className="bg-cyan-400 rounded-3xl h-2/2 p-4 text-center">
        <div className="text-3xl font-bold">newsletter</div>
        <div className="text-black text-sm">
          Sign up for the latest news, exclusive offers, and the chance to trial
          new and unreleased products.
        </div>
        <div className="flex gap-2 mt-2">
          <Input name="asad" className="bg-white" />
          <Button className="bg-purple-900">Subscribe</Button>
        </div>
      </div>
      <div className="bg-purple-900 rounded-3xl h-2/2 p-4 text-center">
        <div className="text-3xl font-semibold uppercase tracking-tighter">
          Our Socials.
        </div>
        <div className="underline">follow us for updates</div>
        <div className="mt-4 flex gap-5 justify-center">
          <Button className="bg-white text-black rounded-full p-2">
            <Linkedin />
          </Button>
          <Button className="bg-white text-black rounded-full p-2">
            <Instagram />
          </Button>
          <Button className="bg-white text-black rounded-full p-2">
            <Youtube />
          </Button>
        </div>
      </div>
    </div>
  );
};
