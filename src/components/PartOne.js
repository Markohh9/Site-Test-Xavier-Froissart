import React, { useEffect } from "react";
import Picture from "../assets/img/Xavier-Froissart.webp";

function PartOne() {
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
    <div className="part-one-section" id="accueil">
      <div className="cercle reveal reveal-1">
        <img src={Picture} alt="Xavier-Froissart" />
      </div>
      <div className="part-one-text-section reveal reveal-2">
        <h1 className="title-part-one">Xavier Froissart</h1>
        <p className="text-part-one"> <strong className="strong-txt">  La QVT par l’expérience :</strong> </p>
        <p className="text-part-one">Une méthode pragmatique pour réussir une démarche de négociation, de Qualité de vie au travail et de prévention des comportements inappropriés en entreprise.</p>
      </div>
    </div>
  );
}

export default PartOne;
