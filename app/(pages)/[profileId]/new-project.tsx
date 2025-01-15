'use client'
import Button from "@/app/components/ui/button";
import Modal from "@/app/components/ui/modal";
import TextArea from "@/app/components/ui/text-area";
import TextInput from "@/app/components/ui/text-input";
import { ArrowUpFromLine, Plus } from "lucide-react";
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
        <div className="bg-background-primary rounded-[20px] p-8 flex flex-col gap-10 justify-between ">
          <p className="text-white text-xl font-bold">Novo projeto</p>
          <div className="flex  gap-10">
            <div className="flex flex-col gap-3 items-center text-xs">
              <div className="w-[100px] h-[100px] bg-background-tertiary rounded-xl overflow-hidden">
                <button className="w-full h-full">
                  100x100
                </button>
              </div>
              <button className="text-white flex items-center gap-2">
                <ArrowUpFromLine className="size-4" />
                <span>Adicionar imagem</span>
              </button>
              <input type="file" className="hidden" id="imageInput" accept="image/*" aria-label="Adicionar imagem" />
            </div>
            <div className="flex flex-col gap-4 w-[293px]">
              <div className="flex flex-col gap-1">
                <label htmlFor="project-name" className="text-white font-bold">Título do projeto</label>
                <TextInput id="project-name" placeholder="Digite o nome do projeto" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="project-description" className="text-white font-bold">Descrição do projeto</label>
                <TextArea id="project-description" placeholder="Digite uma breve descrição do projeto" className="h-36" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="project-url" className="text-white font-bold">Digite a URL do projeto</label>
                <TextInput type="url" id="project-url" placeholder="Digite a URL do projeto" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <button className="text-white text-sm font-bold">Voltar</button>
            <Button className="">Salvar</Button>
          </div>
        </div>
      </Modal>
    </>
  )
}