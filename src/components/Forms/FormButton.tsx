// FormButton.tsx
import { Button } from "@/components/ui/button";

interface FormButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  fullWidth?: boolean;
}

export default function FormButton({ children, onClick, type="button", fullWidth=true }: FormButtonProps) {
  return (
    <Button
      type={type}
      onClick={onClick}
      className={`${
        fullWidth ? "w-full" : ""
      } bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-xl shadow-lg`}
    >
      {children}
    </Button>
  );
}
    