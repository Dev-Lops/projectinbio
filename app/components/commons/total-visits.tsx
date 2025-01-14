import { TrendingUp } from "lucide-react";

export function TotalVisits() {
  return (
    <div className="w-min whitespace-nowrap flex items-center gap-5 bg-background-secondary border border-background-primary rounded-xl px-8 py-4 shadow-lg">
      <span className="text-white text-xl font-bold">Total de visitas</span>
      <div className="flex items-center gap-2 text-accent-green">
        <span className="text-3xl font-bold">3458</span>
        <TrendingUp />
      </div>
      <div className="flex items-center gap-2 ">
        {/* <button>Portal</button>
        <button>Sair</button> */}
      </div>

    </div>
  )
}