import { gsap } from 'gsap';
import SplitType from 'split-type';

/**
 * Home Hero Heading Images.
 * 
 * @author <cabal@digerati.design>
 */
export const homeHeroHeadingImages = () => {
    const image1 = document.querySelector('[dd-hero-heading-image="1"]');
    const image2 = document.querySelector('[dd-hero-heading-image="2"]');
    const image3 = document.querySelector('[dd-hero-heading-image="3"]');
    const target1 = document.querySelector('[dd-hero-heading-target="1"]');
    const target2 = document.querySelector('[dd-hero-heading-target="2"]');
    const target3 = document.querySelector('[dd-hero-heading-target="3"]');
    const elements = document.querySelectorAll('[dd-home-hero-blur]');
    if (!image1 || !image2 || !image3 || !target1 || !target2 || !target3 || !elements) {
        return;
    }
    const splitElements = [];
    Array.from(elements).sort((a, b) => {
        /* Sort elements */
        return a.getAttribute('dd-home-hero-blur') - b.getAttribute('dd-home-hero-blur');
    }).forEach((element) => {
        if (element.tagName === 'DIV') {
            element.style.opacity = 1;
            splitElements.push(element);
        } else {
            new MutationObserver(function () {
                element.style.opacity = 1;
            }).observe(element, {
                subtree: true,
                childList: true
            });
            let split = new SplitType(element, {
                type: 'words,lines',
                absolute: true
            });
            splitElements.push(split.chars);
        }
    });
    /* Append Images into Headings */
    target1.classList.add('hide-placeholder');
    target2.classList.add('hide-placeholder');
    target3.classList.add('hide-placeholder');
    target1.append(image1);
    target2.append(image2);
    target3.append(image3);
    /* Animate */
    gsap.from(splitElements, {
        ease: 'ease',
        duration: 1,
        y: 20,
        blur: 10,
        autoAlpha: 0,
        stagger: 0.025
    });
    /**
     * Blur Property Filter.
     * 
     * @link https://gsap.com/community/forums/topic/23666-simple-blur-and-fade-in-on-text/
     */
    (function () {
        const blurProperty = gsap.utils.checkPrefix("filter"),
            blurExp = /blur\((.+)?px\)/,
            getBlurMatch = target => (gsap.getProperty(target, blurProperty) || "").match(blurExp) || [];
        gsap.registerPlugin({
            name: "blur",
            get(target) {
                return +(getBlurMatch(target)[1]) || 0;
            },
            init(target, endValue) {
                let data = this,
                    filter = gsap.getProperty(target, blurProperty),
                    endBlur = "blur(" + endValue + "px)",
                    match = getBlurMatch(target)[0],
                    index;
                if (filter === "none") {
                    filter = "";
                }
                if (match) {
                    index = filter.indexOf(match);
                    endValue = filter.substr(0, index) + endBlur + filter.substr(index + match.length);
                } else {
                    endValue = filter + endBlur;
                    filter += filter ? " blur(0px)" : "blur(0px)";
                }
                data.target = target;
                data.interp = gsap.utils.interpolate(filter, endValue);
            },
            render(progress, data) {
                data.target.style[blurProperty] = data.interp(progress);
            }
        });
    })();

};