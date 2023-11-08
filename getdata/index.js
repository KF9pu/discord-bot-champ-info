import { allChamps } from "./champs.js";

function sortAndCreateText(champions) {
  return champions
    .map(champion => champion.name)
    .sort((a, b) => a.localeCompare(b, "ko", { sensitivity: "base" }))
    .map((champion, idx) => `💚 ${idx + 1}. ${champion}`)
    .join("\n");
}

export function getAllChamps() {
  return sortAndCreateText(allChamps);
}

export function getFighterChamps() {
  const FighterChampions = allChamps.filter(champion =>
    champion.tags.includes("Fighter")
  );
  return sortAndCreateText(FighterChampions);
}

export function getTankChamps() {
  const TankChampions = allChamps.filter(champion =>
    champion.tags.includes("Tank")
  );
  return sortAndCreateText(TankChampions);
}

export function getTankOrFighterChamps() {
  const TankOrFighterChampions = allChamps.filter(
    champion =>
      champion.tags.includes("Tank") || champion.tags.includes("Fighter")
  );
  return sortAndCreateText(TankOrFighterChampions);
}

export function getMageChamps() {
  const MageChampions = allChamps.filter(champion =>
    champion.tags.includes("Mage")
  );
  return sortAndCreateText(MageChampions);
}

export function getSupportChamps() {
  const SupportChampions = allChamps.filter(champion =>
    champion.tags.includes("Support")
  );
  return sortAndCreateText(SupportChampions);
}

export function getMarksmanChamps() {
  const MarksmanChampions = allChamps.filter(champion =>
    champion.tags.includes("Marksman")
  );
  return sortAndCreateText(MarksmanChampions);
}

export function getAssassinChamps() {
  const AssassinChampions = allChamps.filter(champion =>
    champion.tags.includes("Assassin")
  );
  return sortAndCreateText(AssassinChampions);
}
