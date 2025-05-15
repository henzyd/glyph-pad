import { useRef } from "react";
import { useDrop } from "react-dnd";
import NoteCard from "~/components/note-card";
import Container from "./container";

const TYPE = "card";

function InnerNotes({
  moveCard,
  notes,
}: {
  notes: Note[];
  moveCard: (fromIndex: number, toIndex: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: TYPE,
    drop: () => {},
    hover: (item: { index: number; id: string }) => {
      const dragIndex = item.index;
      const hoverIndex = notes.findIndex((card) => card.id === item.id);
      if (dragIndex === hoverIndex) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drop(ref);

  return (
    <div className="largeTabletAndBelow:grid-cols-2 grid grid-cols-3 gap-6" ref={ref}>
      {notes.map((note, index) => (
        <NoteCard key={note.id} data={note} index={index} type={TYPE} />
      ))}
    </div>
  );
}

type Props = {
  initialNotes: Note[];
};

export default function Notes({ initialNotes }: Props) {
  return <Container initialNotes={initialNotes}>{(props) => <InnerNotes {...props} />}</Container>;
}
