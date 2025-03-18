import React, { useState, useEffect } from "react";
import { PopUser } from "../PopUser/PopUser";

export const Header = () => {

  const [isPopUserVisible, setIsPopUserVisible] = useState(false);

  const togglePopUser = () => {
    setIsPopUserVisible(!isPopUserVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
        if (isPopUserVisible && !event.target.closest('.header__pop-user-set')) {
            setIsPopUserVisible(false);
        }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
        document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopUserVisible]);

    return (
  <header className="header">
    <div className="container">
      <div className="header__block">
        <div className="header__logo _show _light">
          <a href="" target="_self">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>
        <div className="header__logo _dark">
          <a href="" target="_self">
            <img src="images/logo_dark.png" alt="logo" />
          </a>
        </div>
        <nav className="header__nav">
          <button className="header__btn-main-new _hover01" id="btnMainNew">
            <a href="#popNewCard">Создать новую задачу</a>
          </button>
          <a href="#user-set-target" className="header__user _hover02" onClick={togglePopUser}>
            Ivan Ivanov
          </a>
          {isPopUserVisible && <PopUser />}
        </nav>
      </div>
    </div>
  </header>
    );
};
