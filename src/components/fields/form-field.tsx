import { useState } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
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
import { Input, type InputProps } from "../ui/input";
import { Button } from "../ui/button";

type FormFieldProps<TFieldValues extends FieldValues> = Omit<InputProps, "name"> & {
  control: Control<TFieldValues>;
  label?: string;
  labelProps?: Omit<FormLabelProps, "children">;
  description?: string;
  descriptionProps?: Omit<FormDescriptionProps, "children">;
  name: Path<TFieldValues>;
};

export default function FormField<TFieldValues extends FieldValues>({
  control,
  label,
  labelProps,
  description,
  descriptionProps,
  name,
  type,
  endAdornment,
  ...props
}: FormFieldProps<TFieldValues>) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormFieldUI
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="flex flex-col gap-1">
            {label && <FormLabel {...labelProps}>{label}</FormLabel>}
            <FormControl>
              <Input
                {...field}
                {...props}
                type={type === "password" ? (showPassword ? "text" : "password") : type}
                endAdornment={
                  <>
                    {type === "password" ? (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-7 rounded-full p-1"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <EyeOff className="size-5" /> : <Eye className="size-5" />}
                        <span className="sr-only">
                          {showPassword ? "Hide password" : "Show password"}
                        </span>
                      </Button>
                    ) : (
                      endAdornment
                    )}
                  </>
                }
              />
            </FormControl>
          </div>
          {description && <FormDescription {...descriptionProps}>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
