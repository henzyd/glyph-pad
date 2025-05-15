import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Container({
  initialNotes,
  children,
}: {
  initialNotes: Note[];
  children: (params: {
    notes: Note[];
    moveCard: (fromIndex: number, toIndex: number) => void;
  }) => React.ReactNode;
}) {
  const [notes, setNotes] = useState([...initialNotes]);

  const moveCard = (fromIndex: number, toIndex: number) => {
    const updatedNotes = [...notes];
    const [movedNote] = updatedNotes.splice(fromIndex, 1);
    updatedNotes.splice(toIndex, 0, movedNote);
    setNotes(updatedNotes);
  };

  return <DndProvider backend={HTML5Backend}>{children({ notes, moveCard })}</DndProvider>;
}
