import { skipToMainContent } from "$digerati/skipToMainContent";
import { currentYear } from "$digerati/currentYear";
import { blurInElements } from "$jords-co/blurInElements";
import { writeInText } from "$jords-co/writeInText";
import { populateGrid } from "$jords-co/populateGrid";
import { desktopMenuHoverState } from "$jords-co/desktopMenuHoverState";
import { updateProjectInfo } from "$jords-co/updateProjectInfo";
import { homeHeroAnimation } from "$jords-co/homeHeroAnimation";

window.Webflow || [];
window.Webflow.push(() => {
  currentYear();
  skipToMainContent();
  desktopMenuHoverState();
  populateGrid();
  homeHeroAnimation();
  blurInElements();
  writeInText();
  updateProjectInfo();
});