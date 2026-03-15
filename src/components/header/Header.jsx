import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";

const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);

    /*=============== จัดการแค่ระบบเงาตอนเลื่อนจอ (Scroll Header) ===============*/
    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector(".header");
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <header className='header'>
        <nav className='nav container'>
            {/* ✨ 1. เปลี่ยนโลโก้ให้ใช้ NavLink วิ่งกลับไปหน้า Home ("/") */}
            <NavLink to='/' className='nav__logo'>
                Sitthikorn
            </NavLink>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list">
                    
                    {/* ✨ 2. ใช้ NavLink ทั้งหมด และใช้ isActive เพื่อเปลี่ยนสีเมนูอัตโนมัติ */}
                    <li className="nav__item">
                        <NavLink to="/" onClick={() => showMenu(false)} className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </NavLink>
                    </li>
                
                    <li className="nav__item">
                        <NavLink to="/about" onClick={() => showMenu(false)} className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </NavLink>
                    </li>
                
                    <li className="nav__item">
                        <NavLink to="/skills" onClick={() => showMenu(false)} className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to="/services" onClick={() => showMenu(false)} className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to="/portfolio" onClick={() => showMenu(false)} className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink to="/contact" onClick={() => showMenu(false)} className={({ isActive }) => isActive ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </NavLink>
                    </li>
                </ul>

               <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header;