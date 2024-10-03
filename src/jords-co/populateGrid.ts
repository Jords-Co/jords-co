/**
 * Populate Grid.
 * 
 * @author <cabal@digerati.design>
 */
export const populateGrid = () => {
    const fxContainers = document.querySelectorAll('[dd-grid="fx-container"]');
    if (!fxContainers) {
        return;
    }
    fxContainers.forEach((fxContainer) => {
        for (let i = 0; i < 3000; i++) {
            const fx = document.createElement('i');
            fxContainer.appendChild(fx);
        }
    });
};