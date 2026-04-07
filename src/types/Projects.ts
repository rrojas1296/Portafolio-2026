import { ButtonVariant } from "@/components/Button/Button";
import { Skill } from "./Skills";

export interface IProject {
  id: string;
  name: string;
  urlImage: string;
  description: string;
  stack: Skill[];
  buttons: {
    id: string;
    label: string;
    icon: any;
    url: string;
    buttonType: ButtonVariant;
  }[];
}
