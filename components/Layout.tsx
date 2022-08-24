import React from "react";
import { Navbar  } from "components";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <Navbar />
      <main className="container mt-12">{children}</main>
    </div>
  );
};

export default Layout;
