const readline = require("readline-sync");
let user ;
do {
  let choice = readline.question("What you want to eat: lunch, breakfast, dinner: ").toLowerCase();

  switch (choice) {
    case "lunch":
      let lunchSelection;

      do {
        lunchSelection = readline.question("What you want in lunch: poha, samosha, iddlisambhar // no for exit: " ).toLowerCase();

        switch (lunchSelection) {
          case "poha":
            console.log("Ye lo poha");
            break;

          case "samosha":
            console.log("Ye lo samosha");
            break;

          case "iddlisambhar":
            console.log("Ye lo iddlisambhar");
            break;

          case "no":
            console.log("Lunch se exit...");
            break;

          default:
            console.log("Sahi value do");
            break;
        }
      } while (lunchSelection !== "no");

      break;

    case "breakfast":
      let breakfastSelection;

      do {
        breakfastSelection = readline.question("What you want in breakfast: dalchawal, cholebature, mixveg // no for exit: ").toLowerCase();

        switch (breakfastSelection) {
          case "dalchawal":
            console.log("Ye lo dalchawal");
            break;

          case "cholebature":
            console.log("Ye lo cholebature");
            break;

          case "mixveg":
            console.log("Ye lo mixveg");
            break;

          case "no":
            console.log("Breakfast se exit...");
            break;

          default:
            console.log("Sahi value do");
            break;
        }
      } while (breakfastSelection !== "no");

      break;

    case "dinner":
      let dinnerSelection;

      do {
        dinnerSelection = readline.question("What you want in dinner: kicdi, raiyta, panner // no for exit: " ).toLowerCase();

        switch (dinnerSelection) {
          case "kicdi":
            console.log("Ye lo kicdi");
            break;

          case "raiyta":
            console.log("Ye lo raiyta");
            break;

          case "panner":
            console.log("Ye lo panner");
            break;

          case "no":
            console.log("Dinner se exit...");
            break;

          default:
            console.log("Sahi value do");
            break;
        }
      } while (dinnerSelection !== "no");

      break;

    default:
      console.log("Sahi value do");
      break;
  }

  user = readline.question("You want something more yes/no: ").toLowerCase();

} while (user === "yes");