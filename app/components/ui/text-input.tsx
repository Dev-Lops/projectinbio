import { cn } from "@/app/lib/utils";

export default function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={cn(`
      w-full p-3 bg-background-secondary text-white placeholder:text-content-placeholder rounded-xl border border-transparent hover:border-accent-purple hover:text-content-body focus:border-accent-purple
      `, props.className)} />
  )
}

