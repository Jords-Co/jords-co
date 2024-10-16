import { gsap } from 'gsap';
import SplitType from 'split-type';

/**
 * Write in Text.
 * 
 * @author <cabal@digerati.design>
 */
export const writeInText = () => {
    const elements = document.querySelectorAll('[dd-text-effect="write-in"]');
    if (!elements) {
        return;
    }
    function isMobile(): boolean {
        return window.innerWidth <= 767;
    }
    elements.forEach((element) => {
        console.log(element);
        const writeColor = element.getAttribute('dd-write-color');
        console.log(writeColor);
        const split = new SplitType(element, {
            types: 'words',
            position: 'relative'
        });
        const layoutTL = gsap.timeline();
        // const filteredWords = split.words?.filter((word) => !word.parentElement.classList.contains('text-color-white'));
        layoutTL.to(split.words, {
            color: writeColor,
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