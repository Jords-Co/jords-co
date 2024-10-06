import { formValidation } from "$digerati/formValidation";
import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { blurInElements } from "$jords-co/blurInElements";
import { writeInText } from "$jords-co/writeInText";
import { populateGrid } from "$jords-co/populateGrid";
import { animateGrid } from "$jords-co/animateGrid";
import { updateProjectInfo } from "$jords-co/updateProjectInfo";
import { homeHeroHeadingImages } from "$jords-co/homeHeroHeadingImages";

window.Webflow || [];
window.Webflow.push(() => {
  skipToMainContent();
  formValidation();
  currentYear();
  blurInElements();
  writeInText();
  populateGrid();
  animateGrid();
  updateProjectInfo();
  homeHeroHeadingImages();
});