

import { Rocket } from "lucide-react";
import CreateLinkForm from "./create-link-form";
import Header from "@/app/components/landing-page/header";


export default function CriarPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="h-screen flex flex-col gap-10 items-center justify-center max-w-xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-white text-4xl font-bold">Escolha seu link</h1>
          <Rocket className="size-10" />
        </div>
        <CreateLinkForm />
      </div>
    </div>
  )
}