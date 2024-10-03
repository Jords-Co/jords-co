import anime from 'animejs';

/**
 * Animate Grid.
 * 
 * @author <cabal@digerati.design>
 */
export const animateGrid = () => {
    const fxContainers = document.querySelectorAll('[dd-grid="fx-container"]');
    if (!fxContainers) {
        return;
    }
    fxContainers.forEach((fxContainer) => {
        const elements = fxContainer.querySelectorAll('i');
        if (!elements) {
            return;
        }
        anime({
            targets: elements,
            scale: [
                {
                    value: 0.25,
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
    });
};