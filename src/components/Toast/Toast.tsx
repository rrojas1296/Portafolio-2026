import { CheckIcon, CircleCheck } from "lucide-react";
import { JSX } from "react";

interface Props {
  text: string;
  type: "success" | "error" | "warning";
}
const Toast = ({ text, type }: Props) => {
  const iconToast: Record<string, JSX.Element> = {
    success: <CircleCheck className="w-5 h-5 text-success" />,
  };
  return (
    <div className="rounded-lg gap-3 border px-5 border-border-2 w-xs py-3 flex justify-start text-sm bg-bg-2 text-text-1">
      {iconToast[type]}
      <span> {text}</span>
    </div>
  );
};

export default Toast;
