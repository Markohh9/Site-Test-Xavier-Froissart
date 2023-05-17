import React, { useEffect } from "react";

function PartPourquoiMoi() {
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
        <div className="part-left" id="pourquoi-moi">
            <h6 className="title-section-left reveal-1">Pourquoi faire appel à moi ?</h6>
            
            <p className="text-section-left reveal-1"><strong className="strong-txt"> 1° - Mon expérience me conduit à préconiser le développement
            de la concertation en matière de dialogue social :</strong></p>
            <p className="text-section-left reveal-2">Il est essentiel de travailler ensemble entre représentants de la direction, représentants du personnel,
            managers, représentants RH et membres du personnel sur les sujets préalablement au lancement de toute négociation. 
            L’objectif : acquérir un socle de connaissances communes et un langage commun favorise l’émergence d’un débat de fond de qualité. 
            Pour cela je privilégie l’organisation d’ateliers préalables à la négociation.
            </p>

            <p className="text-section-left reveal-2"><strong className="strong-txt"> 
            2° - Mon expérience démontre l’intérêt d’impliquer tous les acteurs dans une démarche de management par la QVT
            </strong></p>
            <p className="text-section-left reveal-2">J’incite à utiliser les outils et méthodes permettant de mieux travailler ensemble :
            donner du sens, lever les craintes et incompréhensions, répondre aux aspirations individuelles et collectives, donner
            au collectif sa fonction de soutien, d’accompagnement et de solidarité professionnelle. </p>

            <p className="text-section-left reveal-2">L’expérience démontre l’intérêt de privilégier les démarches participatives pour assurer
            la qualité du travail au quotidien
            </p>

            <p className="text-section-left reveal-3"><strong className="strong-txt"> 
            3° - Mon expérience dans la gestion des ressources humaines m’a convaincu de la nécessité de veiller à la pratique
            du respect au quotidien et de ne tolérer aucune dérive 
            </strong></p>
            <p className="text-section-left reveal-3">Dans un contexte où les évolutions des comportements quotidiens au travail se traduisent
            par une diminution du respect et l’accroissement des tensions interpersonnelles, une focalisation sur le respect est nécessaire.
            Mon expérience m’a amené à sensibiliser et former les managers et l’ensemble des acteurs de façon très pragmatique à la détection
            et au traitement des comportements inappropriés, du harcèlement moral ou sexuel et des agissements sexistes. </p>
            

            <div className="line-separation-cv reveal-4">
            </div>

        </div>
    );
};

export default PartPourquoiMoi;
