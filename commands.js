import "dotenv/config";
import { InstallGlobalCommands } from "./utils.js";

const ALL_CHAMP_COMMAND = {
  name: "올챔",
  description: "command",
  type: 1,
};
const TANKFIGHTER_CHAMP_COMMAND = {
  name: "근접챔",
  description: "command",
  type: 1,
};
const FIGHTER_CHAMP_COMMAND = {
  name: "전사챔",
  description: "command",
  type: 1,
};
const TANK_CHAMP_COMMAND = {
  name: "탱커챔",
  description: "command",
  type: 1,
};
const MARKSMAN_CHAMP_COMMAND = {
  name: "원딜챔",
  description: "command",
  type: 1,
};
const MAGE_CHAMP_COMMAND = {
  name: "메이지챔",
  description: "command",
  type: 1,
};
const SUPPORT_CHAMP_COMMAND = {
  name: "서폿챔",
  description: "command",
  type: 1,
};
const ASSASSIN_CHAMP_COMMAND = {
  name: "암살챔",
  description: "command",
  type: 1,
};

const ALL_COMMANDS = [
  ALL_CHAMP_COMMAND,
  TANKFIGHTER_CHAMP_COMMAND,
  FIGHTER_CHAMP_COMMAND,
  TANK_CHAMP_COMMAND,
  MARKSMAN_CHAMP_COMMAND,
  MAGE_CHAMP_COMMAND,
  SUPPORT_CHAMP_COMMAND,
  ASSASSIN_CHAMP_COMMAND,
  BAN_COMMAND,
  BAN_LIST_COMMAND,
  BAN_RESET_COMMAND,
];

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
