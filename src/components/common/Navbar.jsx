import React from 'react';
import { NAV_LINKS } from '../../constants';

const Navbar = () => {
    return (
        <nav className="fixed w-full z-50 top-0 py-4 backdrop-blur-md bg-opacity-30 bg-black">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a href="#" className="text-xl font-bold">Java Verse</a>
                <ul className="flex space-x-6">
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <a href={link.href} className="hover:text-accent transition-colors">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
