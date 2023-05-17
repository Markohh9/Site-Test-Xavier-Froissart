import React, { useEffect } from "react";

function PartProjet() {
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
    <div className="part-right reveal reveal-1 background-section-img shadow-section">
        <h3 className="title-section-right margin-defaut">Mon Projet</h3>
        <p className="text-section-right reveal reveal-2 margin-defaut">
        Homme de conviction, j'ai à cœur de partager mes compétences et d’accompagner les dirigeants et responsables opérationnels dans leurs projets de management et de transformation.
        </p>

        <p className="text-section-right reveal reveal-3 margin-defaut">
        <strong className="strong-txt">Je vous propose une méthode pragmatique pour réussir une démarche de négociation, de qualité de vie au travail et de prévention des comportements inappropriés dans l’entreprise.</strong>
        </p>

        <p className="text-section-right reveal reveal-4 margin-defaut">
        Je suis prêt à m’impliquer dans des projets valorisant le potentiel humain des collaborateurs et contribuant au développement de la concertation entre les acteurs du dialogue social.
        </p>

        <p className="text-section-right reveal reveal-5 margin-defaut">
        Mon expérience m’a permis de faire deux constats majeurs :
        </p>

        <ul className="reveal reveal-6 margin-defaut">
        <li className="li-txt">La démarche de QVT doit s’ancrer dans le contexte particulier de chaque entreprise.</li>
        <li className="li-txt-last">Elle doit être appropriée par tous les acteurs.</li>
        </ul>

        <p className="text-section-right reveal reveal-7 margin-defaut">
        C’est pourquoi je propose d’agir en <strong className="strong-txt">facilitateur opérationnel</strong>, pour développer la QVT et la qualité du travail au quotidien, <strong className="strong-txt">en focalisant sur le « travailler ensemble ».</strong>
        </p>

        <p className="text-section-right reveal reveal-8 margin-defaut">
        Mes trois champs d’intervention privilégiés :
        </p>

        <ul className="reveal reveal-9 margin-defaut">
        <li className="li-txt">Le dialogue social, la concertation, la négociation</li>
        <li className="li-txt">Le management par la QVT en impliquant tous les acteurs</li>
        <li className="li-txt-last">La prévention des comportements inappropriés</li>
        </ul>

        <div className="line-separation reveal reveal-10"></div>
    </div>
    );
}

export default PartProjet;
