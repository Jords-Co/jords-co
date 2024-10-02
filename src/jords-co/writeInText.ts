import { gsap } from 'gsap';
import SplitType from 'split-type';

/**
 * Write in Text.
 * 
 * @author <cabal@digerati.design>
 */
export const writeInText = () => {
    const elements = document.querySelectorAll('.written-element');
    if (!elements) {
        return;
    }
    function isMobile(): boolean {
        return window.innerWidth <= 767;
    }
    elements.forEach((element) => {
        const split = new SplitType(element, {
            types: 'words'
        });
        const layoutTL = gsap.timeline();
        layoutTL.from(split.words, {
            opacity: 0.25,
            stagger: 0.1,
            scrollTrigger: {
                trigger: element,
                start: isMobile() ? 'top 35%' : 'top center',
                end: isMobile() ? 'bottom 90%' : 'bottom center',
                scrub: 2
            }
        });
    });
};