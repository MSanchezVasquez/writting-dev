import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav>
        <h1>writings.dev</h1>

        <button
          className="menu-burger"
          aria-label="Abrir menú"
          onClick={toggleMenu}
        >
          <img src="/assets/menu-burger.png" alt="" aria-hidden="true" />
        </button>

        <div className={`links ${isOpen ? "active" : ""}`}>
          <a href="#categories">categories</a>
          <a href="#articles">articles</a>
          <a href="#about">about</a>
        </div>
      </nav>

      <section className="hero">
        <img src="/assets/Logo.png" alt="jarra morada" />
        <h2>Writtings for Developers</h2>
        <p>curated collection of articles for busy developers</p>
      </section>
    </header>
  );
};
