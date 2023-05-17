import React, { useEffect } from "react";
import logo1 from '../assets/img/footer-illustration-personne.png'
import logo2 from '../assets/img/footer-illustration-tel.png'
import logo3 from '../assets/img/footer-illustration-mail.png'
import logo4 from '../assets/img/footer-illustration-location.png'
import logo5 from '../assets/img/footer-illustration-linkedIn.png'

function Footer(){
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

    return(
        <div className="footer">

        <div className='footer-align'>
            <a className='footer-line-row reveal-1' href="*">
                <img className='img-illu-footer' src={logo1}/>
                <p className='txt-footer-line'>Xavier Froissart</p>
            </a>
            <a className='footer-line-row reveal-2' href="*">
                <img className='img-illu-footer' src={logo2}/>
                <p className='txt-footer-line' >06 15 67 56 54</p>
            </a>
            <a className='footer-line-row reveal-3' href="*">
                <img className='img-illu-footer' src={logo3}/>
                <p className='txt-footer-line' >xavier.froissart@gmail.com</p>
            </a>
            <a className='footer-line-row reveal-4' href="*">
                <img className='img-illu-footer' src={logo4}/>
                <div>
                <p className='txt-footer-line' >163, boulevard Murat - 75016 Paris</p>
                <p className='txt-footer-line' >220 Rue Jeanne d'Arc - 54000 Nancy</p>
                </div>
            </a>
            <a className='footer-line-row-phrase reveal-4' href="*">
            <p className='txt-footer-line-phrase reveal-4' >Retrouvez-moi également sur LinkedIn !</p>
            <img className='img-illu-footer-phrase reveal-4' src={logo5}/>
            </a>

            <div className='footer-line-white reveal-4'></div>

            <p className='desc-footer reveal-4'>Site réalisé et conçu par MARTINI Marco</p>
            <p className='desc-footer reveal-4'>©XavierFroissart</p>

        </div>

        



        </div>
    );
};

export default Footer;

/*476,9697 px*/