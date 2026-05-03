import { Plus, Minus } from "lucide-react"

export default function FAQItem({ title, content, isOpen, onClick }) {
  return (
    <div 
      className="border-b border-black/10 overflow-hidden transition-all duration-300"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
      >
        <span
          className={`text-xl lg:text-2xl font-bold font-barlow uppercase tracking-wider transition-colors duration-500 ${
            isOpen ? "text-primary" : "text-heading"
          }`}
        >
          {title}
        </span>
        
        <div 
          className={`flex-shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-500 ${
            isOpen 
              ? "bg-primary border-primary text-black rotate-180" 
              : "border-black/20 text-heading group-hover:border-primary group-hover:text-primary"
          }`}
        >
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-8" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-pera text-lg leading-relaxed max-w-xl">
            {content}
          </p>
        </div>
      </div>
    </div>
  )
}