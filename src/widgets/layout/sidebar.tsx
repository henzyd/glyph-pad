import { Plus, Tag, SquarePen, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import initialNotes from "~/data/notes.json";

function Label({ name, hex_code, pathname }: Label & { pathname: string }) {
  const href = "/" + name.toLowerCase();
  const isMatch = pathname.startsWith(href);

  return (
    <a href={"/" + name.toLowerCase()}>
      <Button
        className={cn("group w-full justify-start gap-3 !p-5", {
          "bg-violet-100": isMatch,
        })}
        variant="ghost"
      >
        <span
          className={cn("size-2.5 rounded-full")}
          style={{
            backgroundColor: hex_code,
          }}
        ></span>
        <span
          className={cn("text-zinc-700 group-hover:text-purple-700", {
            "text-purple-700": isMatch,
          })}
        >
          {name}
        </span>
      </Button>
    </a>
  );
}

type Props = {
  pathname: string;
};

export default function Sidebar({ pathname }: Props) {
  const labels = Array.from(
    new Map(
      (initialNotes as Note[]).map((note) => note.label).map((label) => [label.id, label])
    ).values()
  );

  return (
    <aside className="flex w-[300px] grow flex-col gap-8 rounded-2xl bg-white p-4">
      <div className="flex justify-center px-8">
        <Button className="w-full gap-1 rounded-full">
          <Plus />
          Add Notes
        </Button>
      </div>
      <div className="flex flex-col gap-1">
        <a href="/">
          <Button
            className={cn("group w-full justify-start gap-3 !p-5", {
              "bg-violet-100 text-violet-500": pathname === "/",
            })}
            variant="ghost"
          >
            <SquarePen />
            <span className="text-zinc-700">All</span>
          </Button>
        </a>
        <a href="/favorites">
          <Button
            className={cn("group w-full justify-start gap-3 !p-5", {
              "bg-violet-100 text-violet-500": pathname.startsWith("/favorites"),
            })}
            variant="ghost"
          >
            <Star className="size-4" />
            <span className="text-zinc-700">Favorites</span>
          </Button>
        </a>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 px-3">
          <Tag className="size-4" />
          <h6 className="text-zinc-600">
            <small>Labels</small>
          </h6>
        </div>
        <div className="flex flex-col gap-1">
          {labels.map((label, index) => (
            <Label {...label} key={index} pathname={pathname} />
          ))}
        </div>
      </div>
    </aside>
  );
}
