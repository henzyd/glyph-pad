import type { ReactNode } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField as FormFieldUI,
  FormItem,
  FormLabel,
  FormMessage,
  type FormDescriptionProps,
  type FormLabelProps,
} from "../ui/form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "../ui/select";

type SelectFieldProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  label?: string;
  labelProps?: Omit<FormLabelProps, "children">;
  description?: string;
  descriptionProps?: Omit<FormDescriptionProps, "children">;
  name: Path<TFieldValues>;
  placeholder?: string;
  children: ReactNode;
};

export default function SelectField<TFieldValues extends FieldValues>({
  control,
  label,
  labelProps,
  description,
  descriptionProps,
  name,
  placeholder = "Select an option...",
  children,
  ...props
}: SelectFieldProps<TFieldValues>) {
  return (
    <FormFieldUI
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col gap-1">
            {label && <FormLabel {...labelProps}>{label}</FormLabel>}
            <FormControl>
              <Select
                {...field}
                {...props}
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>{children}</SelectContent>
              </Select>
            </FormControl>
          </div>
          {description && <FormDescription {...descriptionProps}>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
