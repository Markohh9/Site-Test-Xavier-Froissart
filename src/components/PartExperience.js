import React, { useEffect } from "react";

function PartExperience() {
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
        <div className="part-left reveal">
            <h4 className="title-section-left">Mon Parcours, mes expériences</h4>
            <p className="text-section-left">Passionné par les relations humaines, j'ai choisi de passer la première partie de ma carrière dans le milieu industriel au contact des réalités quotidiennes : </p>

            <ul className="reveal-1">
                <li className="li-txt">Accompagnement des femmes et des hommes dans leurs activités,</li>
                <li className="li-txt">Développement des compétences professionnelles et de la mobilité,</li>
                <li className="li-txt-last">Intervention en formation...</li>
            </ul>

            <p className="text-section-left reveal-2">J'ai beaucoup appris auprès de salariés fiers de leurs métiers.</p>
            <p className="text-section-left reveal-2">J'ai également pris plaisir à créer les conditions du dialogue social sur le terrain pour permettre de répondre aux enjeux économiques et sociaux liés à l'évolution des marchés et des entreprises.</p>
            <p className="text-section-left reveal-2">Au cours des vingt dernières années, j'ai découvert l'univers de la télévision d'abord en région, puis sur l'ensemble des sites de France Télévisions.</p>
            <p className="text-section-left reveal-2">J'ai contribué à :</p>

            <ul>
                <li className="li-txt reveal-3">Développer une politique des ressources humaines dynamique et engagée,</li>
                <li className="li-txt reveal-3">Créer les conditions d'un nouveau dialogue social par la concertation,</li>
                <li className="li-txt reveal-3">Accompagner le management des équipes au quotidien dans le respect et la confiance, </li>
                <li className="li-txt-last reveal-3">Instaurer les fondamentaux du déploiement de la qualité de vie au travail et de la qualité du travail au quotidien en négociant et signant avec les organisations syndicales un accord sur la QVT et un accord sur le télétravail.</li>
            </ul>

            <p className="text-section-left reveal-3">Depuis 1999, j'interviens chaque année en qualité d’enseignant vacataire dans le Master 2 "psychologie du travail et des organisations" de l'université de Lorraine à Nancy pour aborder « la gestion du changement en entreprise et la prévention des risques professionnels et des RPS ».</p>

            
            </div>
            <div className="line-separation reveal-4"></div>
            </div>
    );
};

export default PartExperience;
