import React from "react";

import Menu from "./Menu";

const MENU_ITEMS = [
  {
    label: "home",
    name: "banner",
  },
  {
    label: "empresa",
    name: "company",
  },
  {
    label: "sonho",
    name: "dream",
  },
  {
    label: "office",
    name: "office",
  },
  {
    label: "diversidade",
    name: "diversity",
  },
  {
    label: "vagas",
    name: "jobs",
  },
];

const Layout = ({ children }) => {
  return (
    <>
      <Menu items={MENU_ITEMS} />
      {children}
    </>
  );
};

export default Layout;
