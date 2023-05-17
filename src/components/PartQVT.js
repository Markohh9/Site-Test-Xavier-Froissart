import React, { useEffect } from "react";

function PartQVT() {
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
        <div className="part-right background-section-img shadow-section" id="qvt">
                <h5 className="title-section-right reveal-1 margin-defaut">La QVT par l’expérience : une méthode pragmatique pour réussir une démarche de négociation, de Qualité de vie au travail et de prévention des comportements inappropriés en entreprise</h5>
                    <p className="text-section-right reveal-1 margin-defaut"><strong className="strong-txt">QVT : de quoi parle-t-on ? </strong></p>

                    <p className="text-section-right reveal-2 margin-defaut">La qualité de vie et des conditions travail concerne d’abord le travail,
                    les conditions de son exercice et la possibilité qui en découle de réaliser un travail de qualité pour chacun
                    dans un environnement serein, avec des relations professionnelles constructives, un dialogue social de qualité
                    et dans le cadre d’une organisation qui respecte l’humain.</p>

                    <p className="text-section-right reveal-2 margin-defaut">Elle correspond également aux attentes fortes de chaque salarié d’être pleinement
                    reconnu dans l’exercice de son activité et de mieux équilibrer sa vie professionnelle et sa vie personnelle.</p>

                    <p className="text-section-right reveal-3 margin-defaut"><strong className="strong-txt">Comment puis-je vous aider à mettre en œuvre une démarche pragmatique ?</strong></p>

                    <p className="text-section-right reveal-3 margin-defaut"><strong className="strong-txt">1° - Agir en facilitateur opérationnel :</strong> mon expérience de terrain est à partager avec les acteurs de terrain. </p>
                    <p className="text-section-right reveal-3 margin-defaut"><strong className="strong-txt">2° - Focaliser sur le « travailler ensemble »</strong> : dans mon expérience, les démarches de QVT réussies ont été menées en
                    mode projet que ce soit en amont d’un projet de transformation ou en situation de crise. Pour bien mener ces démarches,
                    il convient d’impliquer, dès le début de la démarche, tous les acteurs 
                    C’est pourquoi je veille à respecter quatre étapes essentielles dans la méthode que je vous propose.</p>

                    <p className="text-section-right reveal-4 margin-defaut"><strong className="strong-txt">3° - Prendre en compte les spécificités de chaque contexte</strong></p>

                    <p className="text-section-right reveal-4 margin-defaut">Mon expérience m’a permis de m’adapter à des milieux différents et de cotoyer plusieurs métiers. 
                    J’en ai retiré la conviction que le contexte est essentiel. Il doit être intégré dans le cadre de la méthode pour répondre aux attentes
                    et aux besoins du terrain et ne pas arriver à un produit stéréotypé. Il est donc essentiel, en tant que facilitateur, de prendre le temps
                    d’identifier les spécificités du contexte et d’adapter la démarche engagée en les prenant en compte.</p>

                <div className="line-separation reveal-4">
                </div>

        </div>
    );
};

export default PartQVT;
