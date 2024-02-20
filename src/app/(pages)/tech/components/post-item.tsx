import cx from "classnames";
import Link from "next/link";
import Image from "next/image";

export default function PostItem() {
  const minimal = false;
  return (
    <div className="grid gap-10 md:grid-cols-2 lg:gap-10 ">
      <div
        className={cx(
          "group cursor-pointer",
          minimal && "grid gap-10 md:grid-cols-2",
        )}
      >
        <div
          className={cx(
            " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800",
          )}
        >
          <Link className={cx("relative block")} href={`/post/`}>
            <Image
              src={
                "https://images.unsplash.com/photo-1496692052106-d37cb66ab80c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyZWV8ZW58MHx8MHx8fDA%3D"
              }
              alt={"Thumbnail"}
              className="object-cover transition-all"
              width={400}
              height={400}
              sizes="(max-width: 768px) 30vw, 33vw"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
