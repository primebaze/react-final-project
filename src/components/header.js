import React, { useState } from "react";
import { useColorMode, Button, Flex, ChakraProvider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "./theme"; // Replace with the correct path

import "./header.css";
import logo from "../assets/logo.png";
import contactImg from "../assets/contact.png";
import menu from "../assets/menu.png";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode({
    defaultColorMode: "dark",
  });

  return (
    <ChakraProvider theme={theme} resetCSS>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <nav className="menu">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
          <RouterLink to="/" className="desktopMenuListItem">
            Home
          </RouterLink>
          <RouterLink to="/workofart" className="desktopMenuListItem">
            About
          </RouterLink>
          <RouterLink to="/portfolio" className="desktopMenuListItem">
            Portfolio
          </RouterLink>
          <RouterLink to="/clients" className="desktopMenuListItem">
            Contact Me
          </RouterLink>
          <RouterLink to="/privacy" className="desktopMenuListItem">
            Privacy Policy
          </RouterLink>
        </div>

        {/* Dark/Light Mode Toggle Button */}
        <Button className="desktopMenuBtn" ml="4" onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark Mode" : "Light Mode"}
        </Button>

        <img
          src={menu}
          alt="Menu"
          className="mobMenu"
          onClick={() => setShowMenu(!showMenu)}
        />
        <Flex
          direction="column"
          align="flex-start"
          display={{ base: showMenu ? "flex" : "none", md: "none" }}
        >
          <RouterLink
            to="/"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            About
          </RouterLink>
          <RouterLink
            to="/portfolio"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Portfolio
          </RouterLink>
          <RouterLink
            to="/clients"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Clients
          </RouterLink>
          <RouterLink
            to="/contact"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            ContactUs
          </RouterLink>
          <RouterLink
            to="/privacy"
            className="listItem"
            onClick={() => setShowMenu(false)}
          >
            Privacy Policy
          </RouterLink>

          {/* Dark/Light Mode Toggle Button for Mobile */}
          <Button
            mt="4"
            onClick={() => {
              setShowMenu(false);
              toggleColorMode();
            }}
          >
            {colorMode === "light" ? "Dark Mode" : "Light Mode"}
          </Button>
        </Flex>
      </nav>
    </ChakraProvider>
  );
};

export default Header;
