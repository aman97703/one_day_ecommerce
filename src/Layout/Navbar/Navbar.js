import { Menu, ShoppingCartOutlined } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [state, setState] = useState(false);
  const toggleDrawer = (open) => {
    setState(open);
  };
  return (
    <div className="navbar_root">
      <div className="container navbar_main">
        <div className="navlogo d-flex align-items-center">
          <div className="hamnurger_menu " onClick={() => toggleDrawer(true)}>
            <Menu fontSize="medium" />
          </div>
          <p>
            <NavLink to={"/"}>E-commerce</NavLink>
          </p>
        </div>
        <div className="navLinks">
          <p>
            <NavLink to={"/"}>HOME</NavLink>
          </p>
          <p>
            <NavLink to={"/about"}>ABOUT</NavLink>
          </p>
          <p>
            <NavLink to={"/products"}>PRODUCTS</NavLink>
          </p>
          <p>
            <NavLink to={"/contact"}>CONTACT</NavLink>
          </p>
          <p>
            <NavLink to={"/cart"}>
              <ShoppingCartOutlined />
            </NavLink>
          </p>
        </div>
      </div>
      <Drawer
        anchor={"left"}
        open={state}
        onClose={() => toggleDrawer(false)}
        className="details_drawer_root"
      >
        <div className="nav_drawer_main">
          <div className="navlogo d-flex align-items-center">
            <p>
              <NavLink to={"/"}>OD E-commerce</NavLink>
            </p>
          </div>
          <div className="navLinks_and">
            <p>
              <NavLink to={"/"}>HOME</NavLink>
            </p>
            <p>
              <NavLink to={"/about"}>ABOUT</NavLink>
            </p>
            <p>
              <NavLink to={"/products"}>PRODUCTS</NavLink>
            </p>
            <p>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </p>
            <p>
              <NavLink to={"/cart"}>
                <ShoppingCartOutlined />
              </NavLink>
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
