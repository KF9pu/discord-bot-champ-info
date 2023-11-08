import { allChamps } from "./getdata/champs.js";

function allChampList() {
  let result = {};

  allChamps.forEach((champion, idx) => {
    result = {
      ...result,
      [champion.id.toUpperCase() + "_BAN_COMMAND"]: {
        name: `${champion.name.replace(/\s/g, "")}밴`,
        description: "command",
        type: 1,
      },
    };
  });
  return result;
}

console.log(allChampList());
