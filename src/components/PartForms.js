import React, { useEffect } from "react";

function PartForms() {
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
        <div className="part-Forms" id="contact">
            <div>
                <h8 className="title-section-center reveal-1"> Contactez-Moi !</h8>
                <p className="text-section-center reveal-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                <form action="/send-email" method="post" class="contact" className="margin-bot-form">

                    <div className="form-row reveal-2">
                        <label for="nom">
                            <input type="text" id="nom" name="nom" placeholder="Nom" required />
                        </label>
                        <label for="prénom">
                            <input type="text" id="prenom" name="prenom" placeholder="Prénom" required />
                        </label>
                    </div>

                    <div className="form-row reveal-2">
                        <label for="email">
                            <input type="text" id="email" name="email" placeholder="Email" required />
                        </label>
                        <label for="tel">
                            <input type="tel" id="tel" name="tel" placeholder="Numéro de Téléphone" required />
                        </label>
                    </div>

                    <div className="form-row reveal-2">
                        <label for="entreprise">
                            <input type="text" id="entreprise" name="entreprise" placeholder="Entreprise (Facultatif)" />
                        </label>
                        <label for="ville">
                            <input type="tel" id="ville" name="ville" placeholder="Ville" required />
                        </label>
                    </div>

                    <div className="from-column-last reveal-2">
                        <label for="object">
                                <input type="text" id="object" name="object" placeholder="Object du contact" required />
                        </label>
                    
                        <label for="message reveal-3">
                                <input type="text" id="message" name="message" placeholder="Message" required />
                        </label>
                    
                        <label for="submit" class="submit reveal-4">
                            <input type="submit" id="submit" name="submit" placeholder="Envoyer" required />
                        </label>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default PartForms;
