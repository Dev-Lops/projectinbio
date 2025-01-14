import { Linkedin, Github, Instagram, Twitter, Plus } from 'lucide-react'
import Button from '../ui/button'

export default function UserCard() {
  const icons = [Linkedin, Github, Instagram, Twitter, Plus]


  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src="https://github.com/dev-lops.png"
          alt="Anderson lopes"
          className="rounded-full object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-3xl font-bold min-w-0 overflow-hidden">Anderson Lopes</h2>
          <p className="opacity-40">Desenvolvedor Full Stack - NEXT|NODE</p>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <span className="uppercase text-xs font-medium">Links</span>
          <div className="flex gap-3">

            {
              icons.map((Icon, i) => (
                <button key={i} className="flex items-center justify-center size-12 rounded-xl bg-black bg-opacity30 hover:bg-opacity-20 transition-all duration-300 cursor-pointer">
                  <Icon className="size-6" />
                </button>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-3 w-full h-[172px] py-5'>
          <div className='w-full flex flex-col items-center gap-3'>
            <Button className='w-full'>Template SaaS - Compre Agora</Button>
            <button className=' p-3 rounded-xl bg-black '><Plus /></button>
          </div>
        </div>
      </div>

    </div >
  )
}