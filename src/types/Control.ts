import { ComponentProps } from "react";

type ControlType = ComponentProps<"input">["type"] | "phone";

export interface Control<T> {
  name: T;
  label: string;
  placeholder: string;
  type: ControlType;
  className?: string;
}
