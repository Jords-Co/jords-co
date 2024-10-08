import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

/**
 * Desktop Menu Hover State.
 * 
 * @author <cabal@digerati.design>
 */
export const desktopMenuHoverState = () => {
    const navLinks = document.querySelectorAll('.navbar2_link');
    const navCorners = document.querySelector('.navbar2_link-hover');
    if (!navLinks || !navCorners) {
        return;
    }
    gsap.registerPlugin(Flip);
    navLinks.forEach(function (link) {
        /* Give active link a combo class after removing it from other links */
        link.addEventListener('click', function () {
            navLinks.forEach(function (link) {
                link.classList.remove('is--active');
            });
            this.classList.add('is--active');
        });
        // ———— Move corners into link we're hovering
        link.addEventListener('mouseenter', function () {
            const inactiveLink = navCorners.classList.contains('is-inactive');
            if (inactiveLink) {
                navCorners.classList.remove('is-inactive');
            }
            const state = Flip.getState(navCorners);
            this.appendChild(navCorners);
            Flip.from(state, {
                duration: 0.4,
                ease: 'power1.inOut'
            });
        });
        // ———— Move corners back to active link on hover out
        link.addEventListener('mouseleave', function () {
            const state = Flip.getState(navCorners);
            const activeLink = document.querySelector('.navbar2_link.is--active');
            if (!activeLink) {
                navCorners.classList.add('is-inactive');
                return;
            }
            activeLink.appendChild(navCorners);
            Flip.from(state, {
                duration: 0.4,
                ease: 'power1.inOut'
            });
        });
    });
};