import { useRef } from "react";
import { useDrag } from "react-dnd";
import { Expand, Star, Trash2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

type Props = {
  data: Note;
  index: number;
  type: string;
};

export default function NoteCard({ data: { title, description, label, id }, index, type }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isDragging }, drag] = useDrag({
    type,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(ref);

  return (
    <Card
      style={{
        backgroundColor: label.hex_code,
        opacity: isDragging ? 0.5 : 1,
      }}
      ref={ref}
    >
      <CardHeader className="flex-row justify-between gap-8">
        <CardTitle>{title}</CardTitle>
        <div className="cursor-move">
          <Expand className="size-4 stroke-zinc-600" />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <button>
            <Star className="size-4 stroke-zinc-600" />
          </button>
          <button>
            <Trash2 className="size-4 stroke-zinc-600" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
