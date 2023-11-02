import { useState, useEffect } from "react";

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 text-lg font-dmsans font-medium ${
                scrolling ? "bg-white text-black" : "bg-transparent text-white"
            } transition duration-300 ease-in-out`}
        >
            <div className="container mx-auto py-4">
                TK Al Muhajirin
            </div>
        </nav>
    );
};

export default Navbar;
