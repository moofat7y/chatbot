import React from "react";

const Header = () => {
  return (
    <header
      style={{ height: "10vh", display: "flex", alignItems: "center" }}
      className="shadow-sm"
    >
      <div className="container px-5">
        <div className="brand fs-4">Zoeken op de website</div>
      </div>
    </header>
  );
};

export default Header;
