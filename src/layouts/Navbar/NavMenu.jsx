import { MENU } from "../../config/navigation/menu.config";
import NavItem from "./NavItem";

const NavMenu = ({ className }) => {
  return (
    <>
      <ul className={`flex gap-8 ${className}`}>
        {MENU.map((item, index) => (
          <li
            key={item.id}
            data-aos="fade-down"
            data-aos-delay={index * 100}

          >
            <NavItem item={item} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default NavMenu