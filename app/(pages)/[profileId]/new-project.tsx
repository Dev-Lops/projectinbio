'use client'
import Modal from "@/app/components/ui/modal";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function NewProject({ profileId }: { profileId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button onClick={handleOpenModal} className="w-[340px] h-[132px] bg-background-secondary rounded-[20px] border border-transparent hover:border-border-secondary flex items-center justify-center gap-2">
        <Plus className="size-10" />
        <span>Novo projeto</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="border p-10">
          <h1>Novo projeto</h1>
        </div>
      </Modal>
    </>
  )
}