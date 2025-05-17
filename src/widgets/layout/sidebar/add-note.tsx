import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Form } from "~/components/ui/form";
import FormField from "~/components/fields/form-field";
import SelectField from "~/components/fields/select-field";
import { SelectItem } from "~/components/ui/select";

const formSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  label: z.string().min(1, "Label is required"),
});

export default function AddNote() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      label: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full gap-1 rounded-full">
          <Plus />
          Add Notes
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Note</DialogTitle>
          <DialogDescription className="hidden">
            Fill in the form to create a note
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="title"
                label="Title"
                placeholder="Note Title"
              />
              <FormField
                control={form.control}
                name="description"
                label="Description"
                placeholder="Note Description"
              />
              <SelectField
                control={form.control}
                name="label"
                label="Note Label"
                placeholder="Choose a label"
              >
                <SelectItem value={"Tier 1"}>Tier 1</SelectItem>
              </SelectField>
            </div>
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
