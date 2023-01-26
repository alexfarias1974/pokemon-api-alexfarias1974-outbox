import React from "react";

const MenuNav = () => {
    const logoPkm = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
  return (
    <nav>
      <div>
        <img
          src={logoPkm}
          alt="Pokeapi-logo"
          className="menuNav-img"
        />
      </div>
    </nav>
  );
};

export default MenuNav;
