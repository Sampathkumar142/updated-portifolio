"use client";

import React, { useState, useEffect } from 'react';
import { BiAlignMiddle } from "react-icons/bi";
import { FiDownload } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Link from 'next/link';


const NavBar = (status) => {
    const [menuStatus, setMenuStatus] = useState({ open: false, current: null });
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
            if (menuStatus.open && isDesktop) {
                setMenuStatus({ open: false, current: menuStatus.current });
            }
        };

        setIsDesktop(window.innerWidth >= 768);

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [menuStatus, isDesktop]);

    const currentPage = (page) => {
        let classes = 'hover:underline hover:decoration-solid ';
        if (page === menuStatus.current) {
            classes += 'underline decoration-solid underline-offset-4 decoration-orange-600';
        }
        return classes;
    };

    const toggleMenu = () => {
        setMenuStatus({ open: !menuStatus.open, current: menuStatus.current });
    };

    const closeMenu = () => {
        setMenuStatus({ open: false, current: menuStatus.current });
        setIsDesktop(false);
    };

    const handleClick = (page) => {
        setMenuStatus({ open: false, current: page });
    };

    const isOpened = () => {
        let classes =
            'ph:relative flex ph:flex ph:justify-end text-xl ph:flex-row flex-col justify-center items-center bg-[#1e242e] absolute ph:h-[10vh] h-[90vh] w-full transition-opacity duration-300 ease-in-out';

        if ((!menuStatus.open || isDesktop)) {
            classes += ' opacity-100 pointer-events-auto';
        } else {
            classes += ' opacity-0 pointer-events-none';
        }

        return classes;
    };

    return (
        <section className="sticky top-0 w-full z-40 h-[10vh] bg-[#1e242e]">
            <nav className="ph:flex ph:flex-row ph:justify-between">
                <div>
                    <img className="h-[8vh] ph:w-[15rem] w-[8rem]" src="logo-crop.jpeg" alt="Sampath" />
                </div>
                <div className={isOpened()}>
                    <ul className="flex mr-3 ph:justify-around ph:flex-row ph:w-[40%] flex-col items-center justify-center ph:text-sm text-base">
                        <li className='mx-1 my-4' onClick={() => { handleClick("home"); closeMenu(); }}>
                            <Link href="/home" className={currentPage("home")}>Home</Link>
                        </li>
                        <li className='mx-1 my-4' onClick={() => { handleClick("about"); closeMenu(); }}>
                            <Link href="/about" className={currentPage("about")}>About</Link>
                        </li>
                        <li className='mx-1 my-4' onClick={() => { handleClick("contact"); closeMenu(); }}>
                            <Link href="/contact" className={currentPage("contact")}>Contact</Link>
                        </li>
                    </ul>
                    <Link  href="asserts/resume.pdf">
                        <button className="mr-2 px-3 py-1 rounded-xl border-2 border-solid border-orange-600 text-base">
                            <FiDownload className="inline mr-2" size={23} />
                            Download CV
                        </button>
                    </Link>
                </div>
            </nav>
            <button className="absolute cursor-pointer top-1 right-2 m-2 ph:hidden" id="menu" onClick={toggleMenu}>
                {menuStatus.open ? (<BiAlignMiddle size={40}></BiAlignMiddle>) : (<ImCross size={30}></ImCross>)}
            </button>
        </section>
    );
};

export default NavBar;
