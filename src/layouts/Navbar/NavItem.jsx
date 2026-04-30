import React from 'react'
import { Link } from 'react-router-dom';

const NavItem = ({ item }) => {

  if (!item || !item.type) return null;

  if (item.type === "link") {
    return (
      <Link
        to={item.path}
        className="peer cursor-pointer font-barlow text-white uppercase text-lg font-medium tracking-wide nav-link relative transition-all duration-300 w-fit"
      >
        {item.label}
      </Link>
    )
  }

  if (item.type === "dropdown") {
    return (
      <div className='relative group'>
        <span className='cursor-pointer font-barlow text-white uppercase text-lg font-medium tracking-wide nav-link'>
          {item.label}
        </span>

        <ul className='absolute top-full left-0 mt-5 bg-[#19181b] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-50 p-5 space-y-3 rounded-sm'>
          {item.children?.map((child, i) => (
            <li
              key={child.id}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              <Link
                to={child.path}
                className='cursor-pointer text-white text-md font-light tracking-wide nav-link relative transition-all duration-300 w-fit block'
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null;
}

export default NavItem