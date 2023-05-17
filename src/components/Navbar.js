import React, { useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
    useEffect(() => {
    const ratio = 0.1;
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: ratio,
    };

    const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
        }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    document.querySelectorAll('[class*="reveal"]').forEach(function (r) {
        observer.observe(r);
    });

    return () => observer.disconnect();
    }, []);

    function handleClick(event) {
    const links = document.querySelectorAll(".nav-section a");
    links.forEach((link) => link.classList.remove("under-nav"));
    event.currentTarget.classList.add("under-nav");
    }

    return (
    <nav className="reveal-5">
        <ul className="nav-section">
        <li className="reveal reveal-1">
            <Link
            activeClass="under-nav"
            to="accueil"
            spy={true}
            smooth={true}
            onClick={handleClick}
            >
            Accueil
            </Link>
        </li>
        <li className="reveal reveal-2">
            <Link
            activeClass="under-nav"
            to="pourquoi-moi"
            spy={true}
            smooth={true}
            onClick={handleClick}
            >
            Pourquoi Moi?
            </Link>
        </li>
        <li className="reveal reveal-3">
            <Link
            activeClass="under-nav"
            to="mes-competences"
            spy={true}
            smooth={true}
            onClick={handleClick}
            >
            Mes compétences
            </Link>
        </li>
        <li className="reveal reveal-4">
            <Link
            activeClass="under-nav"
            to="qvt"
            spy={true}
            smooth={true}
            onClick={handleClick}
            >
            QVT
            </Link>
        </li>
        <li className="reveal reveal-4">
            <Link
            activeClass="under-nav"
            to="video"
            spy={true}
            smooth={true}
            onClick={handleClick}
            >
            Vidéo
            </Link>
        </li>
        <li className="reveal reveal-4">
            <Link
            activeClass="under-nav"
            to="contact"
            spy={true}
            smooth={true}
            onClick={handleClick}
            >
            Contact
            </Link>
        </li>
        </ul>
        <div className="nav-underligne-limit reveal-5  shadow-section"></div>
    </nav>
    );
}

export default Navbar;
