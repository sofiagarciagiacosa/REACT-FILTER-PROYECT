import React from 'react';

function Footer() {
  return (
    <footer id="footer">
      <nav className="nav-footer">
        <div className="logo-footer">
          <h1>AURA</h1>
        </div>
        <hr />
        <div className="contenedorFooter">
          <div className="texto-footer">
            <p>Subsibite a nuestro newsletter y se el primero en enterarte de las novedades.</p>
            <p>Contenido exclusivo, trucos y tips.</p>

            <form className="form" id="subscriptionForm" action="http://localhost:8000" method="post">

              <div className="subscription">
                <input
                  required
                  type="text"
                  id="email"
                  name="email"
                  placeholder=" Email "
                />
                <button className="form-element" type="submit">SUBSCRIBE</button>
              </div>
            </form>
          </div>
          <hr />
          <div className="links-footer">
            <div className="box-links">
              <h2>NAVEGA</h2>
              <ul>
                <li>
                  <a href="#Shop">Shop</a>
                </li>
                <li>
                  <a href="Nosotros">Nosotros</a>
                </li>
                <li>
                  <a href="Impacto">Impacto</a>
                </li>
              </ul>
            </div>
            <div className="box-links">
              <h2>REDES</h2>
              <ul>
                <li>
                  <a href="https://www.instagram.com/sofigarciagiacosa/">Instagram</a>
                </li>
                <li>
                  <a href="#Youtube">Youtube</a>
                </li>
                <li>
                  <a href="#TikTok">TikTok</a>
                </li>
              </ul>
            </div>
            <div className="box-links">
              <h2> OFICIAL</h2>
              <ul>
                <li>
                  <a href="#Privacidad">Privacidad</a>
                </li>
                <li>
                  <a href="#Contacto">Contacto</a>
                </li>
                <li>
                  <a href="#Términos">Términos</a>
                </li>
              </ul>
            </div>
            <div className="box-links">
              <h2>SOPORTE</h2>
              <ul>
                <li>
                  <a href="#aura@gmail.com">aura@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </nav>
    </footer>
  );
}

export default Footer;
