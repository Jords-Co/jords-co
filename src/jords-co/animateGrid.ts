import anime from 'animejs';

/**
 * Animate Grid.
 * 
 * @author <cabal@digerati.design>
 */
export const animateGrid = () => {
    anime({
        targets: 'i',
        scale: [
            {
                value: .1,
                easing: 'linear',
                duration: 3000
            },
            {
                value: 1,
                easing: 'linear',
                duration: 3000
            },
        ],
        delay: anime.stagger(100, {
            grid: [55, 55],
            from: 'center'
        }),
        loop: true
    });
};