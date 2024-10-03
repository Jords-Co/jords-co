/**
 * Update Project Info.
 * 
 * @author <cabal@digerati.design>
 */
export const updateProjectInfo = () => {
    const slider = document.querySelector(['[dd-slider]']);
    if (!slider) {
        return;
    }
    const sliderButtons = slider.querySelectorAll('.w-slider-arrow-left, .w-slider-arrow-right, .w-slider-dot');
    if (!sliderButtons) {
        return;
    }
    const projectClient = document.querySelector('[dd-project="client"]');
    const projectInfo1 = document.querySelector(['[dd-project="info-1"]']);
    const projectInfo2 = document.querySelector(['[dd-project="info-2"]']);
    sliderButtons.forEach((sliderButton) => {
        sliderButton.addEventListener('click', function () {
            /* Timeout to allow Webflow to change slide */
            setTimeout(() => {
                const currentSlide = slider.querySelector('.w-slide:not([aria-hidden="true"])');
                if (!currentSlide) {
                    return;
                }
                const slide = currentSlide.querySelector('[dd-slide]');
                if (!slide) {
                    return;
                }
                const client = slide.getAttribute('dd-slide-client');
                const info1 = slide.getAttribute('dd-slide-info-1');
                const info2 = slide.getAttribute('dd-slide-info-2');
                projectClient.textContent = client;
                projectInfo1.textContent = info1;
                projectInfo2.textContent = info2;
            }, 100);
        });
    });
    setTimeout(() => {
        const currentSlide = slider.querySelector('.w-slide:not([aria-hidden="true"])');
        if (!currentSlide) {
            return;
        }
        const slide = currentSlide.querySelector('[dd-slide]');
        if (!slide) {
            return;
        }
        const client = slide.getAttribute('dd-slide-client');
        const info1 = slide.getAttribute('dd-slide-info-1');
        const info2 = slide.getAttribute('dd-slide-info-2');
        projectClient.textContent = client;
        projectInfo1.textContent = info1;
        projectInfo2.textContent = info2;
        slider.style.opacity = 1;
    }, 100);
};
