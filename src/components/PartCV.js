import React, { useEffect } from "react";
import CV from '../assets/docs/CV.pdf'
import CVDocs from '../assets/img/docs-cv.png'

function PartCV() {
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


    return (
        <div className="part-left" id='mes-competences'>
            <h7 className="title-section-right reveal-1">Mon CV, Mes Compétences</h7>
            <p className="text-section-center reveal-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            <a href={CV} className='center-cv reveal-3'>
                <img className='cv-img-size' src={CVDocs} alt="illustration-docs-cv" />
                <p>Consultez mon CV</p>
            </a>

            <div className="line-separation reveal-4">
            </div>

        </div>
    );
};

export default PartCV;
