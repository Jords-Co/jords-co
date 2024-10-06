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
    if (!image1 || !image2 || !image3 || !target1 || !target2 || !target3) {
        return;
    }
    target1.append(image1);
    target1.classList.add('hide-placeholder');
    target2.append(image2);
    target2.classList.add('hide-placeholder');
    target3.append(image3);
    target3.classList.add('hide-placeholder');
};