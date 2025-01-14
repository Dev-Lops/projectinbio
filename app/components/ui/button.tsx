import { cn } from "@/app/lib/utils";

export default function Button({
  children,
  variant = "primary",
  ...props
}: {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props}
      className={cn("text-white p-3 rounded-xl whitespace-nowrap hover:opacity-85 disabled:opacity-70 disabled:cursor-not-allowed",
        variant === "primary" && "bg-accent-purple",
        variant === "secondary" && "bg-background-tertiary",
        variant === "ghost" && "bg-border-primary",
        props.className
      )} >
      {children}
    </button>
  );
}
