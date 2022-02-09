import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

function Header() {
  return (
    <header className="header">
      <div>
        <Link className="logo logo--mobile" to="/">
          <img
            src="https://cdn.descola.org/app/assets/images/LOGO.svg"
            alt="Descola"
          />
        </Link>
      </div>
      <button className="btn btn-cart btn--mobile">
        <img
          src="https://cdn.descola.org/app/assets/images/user-b.svg"
          alt="Login"
        />
      </button>
      <button className="btn btn-cart btn--mobile">
        <img
          src="https://cdn.descola.org/app/assets/images/shopping-bag.svg"
          alt="Sacola de Compras"
        />
        <span className="counter">0</span>
      </button>
      <button
        id="dropdownMenuButton"
        type="button"
        className="btn btn-primary btn-icon dropdown-toggle btn--mobile"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          src="https://cdn.descola.org/app/assets/images/menu.svg"
          alt="Menu"
        />
      </button>
      <div
        className="dropdown-menu dropdown-menu--header-mob"
        aria-labelledby="dropdownMenuButton"
      >
        <div
          className="header__user-bar"
          style={{ color: "rgb(255, 255, 255)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-12 text-right">
                <span className="btn-link">Login</span>
                <span style={{ color: "rgb(34, 34, 34)" }}> / </span>
                <span className="btn-link">Registre-se</span>
              </div>
            </div>
          </div>
        </div>
        <div className="header__navbar">
          <div className="container">
            <div className="row">
              <div className="col-12 header__navbar__container">
                <Link className="logo" to="/">
                  <img
                    src="https://cdn.descola.org/app/assets/images/LOGO.svg"
                    alt="Descola"
                  />
                </Link>
                <nav>
                  <ul>
                    <li>
                      <a href="https://descola.org/cursos">Cursos</a>
                    </li>
                    <li>
                      <a href="https://descola.org/sobre">O Que é a Descola?</a>
                    </li>
                    <li>
                      <a href="https://descola.org/empresas">Para empresas</a>
                    </li>
                    <li>
                      <a
                        href="https://blog.descola.org/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
                <button className="btn btn-cart">
                  <img
                    src="https://cdn.descola.org/app/assets/images/shopping-bag.svg"
                    alt="Sacola de Compras"
                  />
                  <span className="counter">0</span>
                </button>
                <span className="search__bar">
                  <input type="text" placeholder="Procure um curso" />
                  <button className="btn btn-icon">
                    <img
                      src="https://cdn.descola.org/app/assets/images/lupa.svg"
                      alt="Pesquisar"
                    />
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
