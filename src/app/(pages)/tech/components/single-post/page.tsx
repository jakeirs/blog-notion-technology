import { SinglePost } from "@/app/(pages)/tech/components/single-post";

export const src =
  "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D";
export const title =
  "Architectural Engineering Wonders of the modern era for your Inspiration";
export default function SinglePostPage() {
  return (
    <div className="grid-cols-1 grid place-items-center">
      <SinglePost title={title} src={src} />
    </div>
  );
}
