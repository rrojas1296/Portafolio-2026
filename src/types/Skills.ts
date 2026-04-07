import { skills } from "@/constants/skills";

export type Skill = (typeof skills)[number]["label"];
