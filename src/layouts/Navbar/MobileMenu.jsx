import { useState } from "react"
import { Link } from "react-router-dom"
import { MENU } from "../../config/navigation/menu.config"
import { ChevronDown } from "lucide-react"


const MobileMenu = () => {

  const [active, setActive] = useState(null);

  const toggelMenu = (id) => {
    setActive(active === id ? null : id);
  }

  return (
    <div className="container mx-auto px-4 py-5 space-y-4 bg-black">
      {MENU.map((item) => (
        <div key={item.id}>
          <div
            className="centered-row text-white text-lg curosr-pointer gap-1"
            onClick={() => item.type === "dropdown" && toggelMenu(item.id)}
          >
            {item.type === "link" ? (
              <Link to={item.path}>
                {item.label}
              </Link>
            ) : (
              <span>
                {item.label}
              </span>
            )}

            {item.type === "dropdown" && (
              <span
                className={`
                  transition-transform duration-300
                  ${active === item.id ? "rotate-180" : ""}  
                `}
              >
                <ChevronDown size={18} />
              </span>
            )}
          </div>

          {item.type === "dropdown" && (
            <div
              className={`
                overflow-hidden transition-all duration-300 
                ${active === item.id ? "max-h-40 mt-2" : "max-h-0"}  
              `}
            >
              <ul className="pl-4 space-y-2">
                {item.children?.map((child) => (
                  <li key={child.id}>
                    <Link
                      to={child.path}
                      className="block text-gray-300 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default MobileMenu