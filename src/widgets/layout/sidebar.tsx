import { Plus, Tag, SquarePen, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

const labels = [
  {
    name: "Personal",
    dotClass: "bg-purple-700",
  },
  {
    name: "Work",
    dotClass: "bg-green-700",
  },
  {
    name: "Social",
    dotClass: "bg-orange-700",
  },
  {
    name: "Important",
    dotClass: "bg-blue-700",
  },
];

function Label({ name, dotClass }: { name: string; dotClass: string }) {
  return (
    <a href={"/" + name.toLowerCase()}>
      <Button className="group w-full justify-start gap-3 !p-5" variant="ghost">
        <span className={cn("size-2.5 rounded-full", dotClass)}></span>
        <span className="text-zinc-700 group-hover:text-purple-700">{name}</span>
      </Button>
    </a>
  );
}

export default function Sidebar() {
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
          <Button className="w-full justify-start gap-3 !p-5" variant="ghost">
            <SquarePen />
            <span className="text-zinc-700">All</span>
          </Button>
        </a>
        <a href="/favorites">
          <Button className="w-full justify-start gap-3 !p-5" variant="ghost">
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
        <div>
          {labels.map((label, index) => (
            <Label {...label} key={index} />
          ))}
        </div>
      </div>
    </aside>
  );
}
