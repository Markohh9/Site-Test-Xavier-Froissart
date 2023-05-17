import React, { useEffect } from "react";

function PartQuiSuisJe() {
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
        <div>
    <div className="part-left reveal reveal-1">
        <h2 className="title-section-left">QUI SUIS-JE?</h2>
        <p className="text-section-left reveal reveal-2">
        Juriste de formation, j’ai choisi de me spécialiser dans la gestion des ressources humaines dans le cadre d’une formation de 3è cycle à l’université de Strasbourg.
        </p>

        <p className="text-section-left reveal reveal-3">
        J’ai d’abord exercé des fonctions opérationnelles de Responsable des Ressources Humaines sur différents sites industriels de grandes entreprises en découvrant des métiers et professions variés ainsi que diverses cultures régionales.
        </p>

        <p className="text-section-left reveal reveal-4">
        J’ai ensuite choisi de rejoindre le secteur de l’audiovisuel public pour contribuer à y développer une culture managériale dynamique en qualité de DRH et de Directeur Régional avant de créer une direction de la Qualité de vie au travail au sein de France Télévisions.
        </p>

        <p className="text-section-left reveal reveal-5">
        Je souhaite aujourd’hui être utile et partager mon expérience de terrain, pragmatique, de façon à inciter les professionnels à oser et à expérimenter en matière de QVT.
        </p>

        
    </div>
    <div className="line-separation reveal reveal-6"></div>
    </div>
    );
}

export default PartQuiSuisJe;
