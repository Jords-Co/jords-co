import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';

/**
 * Desktop Menu Hover State.
 * 
 * @author <cabal@digerati.design>
 */
export const desktopMenuHoverState = () => {
    const navLinks = document.querySelectorAll('.navbar2_link');
    const linkHover = document.querySelector('.navbar2_link-hover');
    if (!navLinks || !linkHover) {
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
            const currentLink = this.classList.contains('w--current');
            if (currentLink) {
                return;
            }
            const inactiveLink = linkHover.classList.contains('is--inactive');
            if (inactiveLink) {
                linkHover.classList.remove('is--inactive');
            }
            const state = Flip.getState(linkHover);
            this.appendChild(linkHover);
            Flip.from(state, {
                duration: 0.4,
                ease: 'power1.inOut',
                absolute: '.navbar2_link-list'
            });
        });
        // ———— Move corners back to active link on hover out
        link.addEventListener('mouseleave', function () {
            const state = Flip.getState(linkHover);
            const activeLink = document.querySelector('.navbar2_link.is--active');
            if (!activeLink) {
                linkHover.classList.add('is--inactive');
                return;
            }
            activeLink.appendChild(linkHover);
            Flip.from(state, {
                duration: 0.4,
                ease: 'power1.inOut',
                absolute: '.navbar2_link-list'
            });
        });
    });
};