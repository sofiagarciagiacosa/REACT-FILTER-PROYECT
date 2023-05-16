import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");

    hamburger.addEventListener('click', () => {
      //Links
      navLinks.classList.toggle("open");
      links.forEach(link => {
        link.classList.toggle("fade");
      });
      //Animation
      hamburger.classList.toggle("toggle");
    });
  }, []);

  return (
    <header>
      <nav className="espacio">
        <div className="espacio"></div>
      </nav>

      <nav className="navbar">

        <div className="hamburger">
          <div className="bars1"></div>
          <div className="bars2"></div>
          <div className="bars3"></div>
        </div>

        <ul className="nav-links">
          <li className="li1"><a href="#">PRODUCTOS</a>
            <ul className="dropdown">
              <li className="subproducto"><a href="http://localhost:8000/living">LIVING</a></li>
              <li className="subproducto"><a href="http://localhost:8000/cocina">COCINA</a></li>
              <li className="subproducto"><a href="http://localhost:8000/dormitorio">DORMITORIO</a></li>
              <li className="subproducto"><a href="http://localhost:8000/bano">BAÑO</a></li>
            </ul>

          </li>

          <li className="li2"><a href="http://localhost:3000/filtrar">FILTRA</a></li>
          <li className="li3"><a href="#">LOCALES</a></li>

          <li className="li4"><a href="http://localhost:8000/signIn">MI CUENTA</a></li>


        </ul>

        <div className="li5">

          <div className="cart-btn">

            <span className="nav-icon">
              <a href="http://localhost:8000">CARRITO</a>

            </span>

          </div>
          <li className="cart-items"></li>
        </div>

        <li className="cart-items-responsive">0</li>
        <div className="logo">
          <h1><a href="http://localhost:8000">aura</a></h1>
        </div>

      </nav>
    </header>
  );
}

export default Header;
