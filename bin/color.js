function color(color, background, text) {
  var colors = [];
  switch (color) {
    case "black":
      colors.push("30");
      break;
    case "red":
      colors.push("31");
      break;
    case "green":
      colors.push("32");
      break;
    case "yellow":
      colors.push("33");
      break;
    case "blue":
      colors.push("34");
      break;
    case "popurse":
      colors.push("35");
      break;
    case "indigo":
      colors.push("36");
      break;
    case "white":
      colors.push("37");
      break;
    default:
      break;
  }
  switch (background) {
    case "black":
      colors.push("40");
      break;
    case "red":
      colors.push("41");
      break;
    case "green":
      colors.push("42");
      break;
    case "yellow":
      colors.push("43");
      break;
    case "blue":
      colors.push("44");
      break;
    case "popurse":
      colors.push("45");
      break;
    case "indigo":
      colors.push("46");
      break;
    case "white":
      colors.push("47");
      break;
    default:
      break;
  }
  return "\033" + `[${colors.join(";")}m ${text} ` + "\033[0m";
}

module.exports = color;
