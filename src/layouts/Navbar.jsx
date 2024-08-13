import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const pages = [
  { id: "f1", page: "/", title: "Main" },
  { id: "f2", page: "about", title: "About" },
  { id: "f3", page: "contacts", title: "Contants" },
];

export const Navbar = () => {
  return (
    <div>
      <ul className="fixed w-[150px] h-full p-10 bg-red-300">
        {pages.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                style={(param) => {
                  return param.isActive === true
                    ? { color: "red" }
                    : { color: "inherit" };
                }}
                to={item.page}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="pl-[170px] p-10">
        {/* Менин балдарым ушул жерде коргоз */}
        <Outlet />
      </div>
    </div>
  );
};
