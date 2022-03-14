import * as React from "react";
import { ExtensionSlot, LayoutProps } from "piral-core";
import { Menu } from "piral-menu";
import Logo from "./Logo";
import Footer from "./Footer";

const App: React.FC<LayoutProps> = ({ children }) => (
  <>
    <div className="main-wrapper">
      <header className="Header">
        <Logo />
        <Menu type="general" />
        <ExtensionSlot name="header-items" />
      </header>
      {children}
    </div>
    <Footer />
  </>
);

export default App;
