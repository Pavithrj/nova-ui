import { useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import clsx from 'clsx';
import Xora from './../assets/images/xora.svg';
import MagicTouchIcon from './../assets/images/magicTouch.svg';
import CloseIcon from './../assets/images/close.svg';
import BgOutlines from './../assets/images/bg-outlines.svg';
import BgOutlinesFill from './../assets/images/bg-outlines-fill.png';

const NavLink = ({ title }) => (
    <LinkScroll className="uppercase transition-colors duration-500 cursor-pointer base-bold text-p4 hover:text-p1 max-lg:my-4 max-lg:h5">
        {title}
    </LinkScroll>
);

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10">
            <div className="container flex items-center h-14 max-lg:px-5">
                <a className="flex-1 cursor-pointer lg:hidden z-2">
                    <img src={Xora} alt="logo" width={115} height={55} />
                </a>

                <div className={clsx("w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0", isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>
                    <div className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title="features" />

                                    <div className="dot" />

                                    <NavLink title="pricing" />
                                </li>

                                <li className="nav-logo">
                                    <LinkScroll to="hero" offset={-100} spy smooth className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}>
                                        <img src={Xora} alt="logo" width={160} height={55} />
                                    </LinkScroll>
                                </li>

                                <li className="nav-li">
                                    <NavLink title="fag" />

                                    <div className="dot" />

                                    <NavLink title="download" />
                                </li>
                            </ul>
                        </nav>

                        <div className="absolute block lg:hidden top-1/2 left-0 translate-x-[-290px] rotate-90 -translate-y-1/2 w-[960px] h-[380px] overflow-hidden z-1">
                            <img src={BgOutlines} alt="outline" width={960} height={380} className="relative z-2" />

                            <img src={BgOutlinesFill} alt="outline" width={960} height={380} className="absolute inset-0 mix-blend-soft-light opacity-5" />
                        </div>
                    </div>
                </div>

                <button className="flex items-center justify-center border-2 rounded-full lg:hidden z-2 size-10 border-s4/25" onClick={() => setIsOpen((preState) => !preState)}>
                    <img src={isOpen ? CloseIcon : MagicTouchIcon} alt={isOpen ? "Close logo" : "MagicTouch logo"} className="object-contain size-1/2" />
                </button>
            </div>
        </header>
    )
};

export default Header;
