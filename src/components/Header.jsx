import React from "react";

const Header = () => {
  return (
    <header
      style={{ height: "10vh", display: "flex", alignItems: "center" }}
      className="shadow-sm"
    >
      <div className="container px-5">
        <div className="brand fs-4">
          <span className="text-primary fw-bold">A</span>sk Anything
        </div>
      </div>
    </header>
  );
};

export default Header;
