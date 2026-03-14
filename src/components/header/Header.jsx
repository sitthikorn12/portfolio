import React, { useState, useEffect } from 'react';
import "./header.css";

const Header = () => {
    /*=============== Toggle Menu ===============*/
    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    /*=============== จัดการระบบ Scroll ทั้งหมดใน useEffect เดียว ===============*/
    useEffect(() => {
        const handleScroll = () => {
            // 1. ระบบใส่เงาให้ Header (Scroll Header)
            const header = document.querySelector(".header");
            // เช็คว่าถ้าเลื่อนจอลงมาเกิน 80px ให้ใส่คลาส scroll-header
            if (window.scrollY >= 80) {
                header.classList.add("scroll-header");
            } else {
                header.classList.remove("scroll-header");
            }

            // 2. ระบบเปลี่ยน Active Menu ตามการเลื่อนจอ (ScrollSpy)
            const sections = document.querySelectorAll("section[id]");
            const scrollY = window.scrollY;

            sections.forEach((current) => {
                const sectionHeight = current.offsetHeight;
                // ลบความสูงไปนิดหน่อย (เช่น 50px) เพื่อให้เมนูเปลี่ยนสีก่อนที่เราจะเลื่อนสุด
                const sectionTop = current.offsetTop - 50;
                const sectionId = current.getAttribute("id");

                // ถ้าตำแหน่งเลื่อนจออยู่ในช่วงของ section นี้
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    setActiveNav("#" + sectionId); // เปลี่ยน state เป็นเมนูที่กำลังดูอยู่
                }
            });
        };

        // สั่งให้ดักจับการเลื่อนจอ
        window.addEventListener("scroll", handleScroll);

        // คืนค่า (Cleanup) เมื่อออกจากหน้าเว็บ
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // วงเล็บว่าง [] หมายถึงให้รันแค่รอบเดียวตอนโหลด Component


  return (
    <header className='header'>
        <nav className='nav container'>
            <a href='index.html' className='nav__logo'>
                Sitthikorn
            </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        {/* ถ้ากดลิงก์ ก็จะสั่งให้เมนูหดกลับ (showMenu(false)) ด้วย จะได้สะดวกบนมือถือ */}
                        <a href="#home" onClick={() => { setActiveNav("#home"); showMenu(false); }} className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                
                    <li className="nav__item">
                        <a href="#about" onClick={() => { setActiveNav("#about"); showMenu(false); }} className={activeNav === "#about" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                
                    <li className="nav__item">
                        <a href="#skills" onClick={() => { setActiveNav("#skills"); showMenu(false); }} className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#services" onClick={() => { setActiveNav("#services"); showMenu(false); }} className={activeNav === "#services" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" onClick={() => { setActiveNav("#portfolio"); showMenu(false); }} className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-scenery nav__icon"></i> Portfolio
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#contact" onClick={() => { setActiveNav("#contact"); showMenu(false); }} className={activeNav === "#contact" ? "nav__link active-link" : "nav__link"}>
                            <i className="uil uil-message nav__icon"></i> Contact
                        </a>
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