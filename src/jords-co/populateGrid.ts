/**
 * Populate Grid.
 * 
 * @author <cabal@digerati.design>
 */
export const populateGrid = () => {
    const fxContainer = document.querySelector('[dd-grid="fx-container"]')
    if (fxContainer) {
        for (let i = 0; i < 3000; i++) {
            const fx = document.createElement('i');
            fxContainer.appendChild(fx);
        }
    }
};