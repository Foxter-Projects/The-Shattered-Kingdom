const story = {
  start: {
    text: "You are Arin at the crossroads of Eldoria. The kingdom lies in ruin. Which path will you take?",
    bg: "images/crossroads.jpg",
    choices: [
      { text: "Venture into the Dark Forest", next: "dark_forest_help" },
      { text: "Seek the Mountain Hermit", next: "mountain_hermit_solve" },
      { text: "Investigate the Abandoned Village", next: "village_investigate" },
      { text: "Join the Rebel Camp", next: "rebel_attack" }
    ]
  },
  dark_forest_help: {
    text: "You help the magical creature and gain a crystal granting magical powers. Ahead, the forest splits.",
    bg: "images/dark_forest.jpg",
    choices: [
      { text: "Enter the enchanted grove", next: "forest_grove_portal" },
      { text: "Ignore the grove and continue deeper", next: "forest_witch" },
      { text: "Sneak past", next: "forest_lake" },
      { text: "Run away", next: "forest_ranger_camp" }
    ]
  },
  forest_grove_portal: {
    text: "A glowing portal shimmers in the grove.",
    bg: "images/enchanted_grove.jpg",
    choices: [
      { text: "Step through portal", next: "sky_city" },
      { text: "Ignore portal", next: "forest_witch" }
    ]
  },
  sky_city: {
    text: "You arrive in Sky City. Guardians ask for help.",
    bg: "images/sky_city.jpg",
    choices: [
      { text: "Help the Guardians", next: "gain_flying_mount" },
      { text: "Refuse", next: "sky_city_collapse" }
    ]
  },
  gain_flying_mount: {
    text: "You gain a flying mount! Return to forest.",
    bg: "images/flying_mount.jpg",
    choices: [
      { text: "Return", next: "forest_witch" }
    ]
  },
  forest_witch: {
    text: "A forest witch blocks your path.",
    bg: "images/forest_witch.jpg",
    choices: [
      { text: "Negotiate", next: "gain_invisibility_potion" },
      { text: "Fight", next: "find_hidden_treasure" },
      { text: "Run away", next: "forest_lost_path" },
      { text: "Use magic crystal", next: "crystal_magic_effect" }
    ]
  },
  // Add other story nodes here with bg property
  gain_invisibility_potion: { text: "The witch gives you a potion of invisibility.", bg: "images/potion.jpg", choices: [{ text: "Continue", next: "forest_path_continue" }] },
  find_hidden_treasure: { text: "You find hidden treasure.", bg: "images/treasure.jpg", choices: [{ text: "Continue", next: "forest_path_continue" }] },
  forest_path_continue: { text: "Your journey continues...", bg: "images/forest_path.jpg", choices: [{ text: "End of demo branch", next: null }] }
};

// Function to show story
function showStory(node) {
  const storyDiv = document.getElementById("story");
  const choicesDiv = document.getElementById("choices");
  const container = document.getElementById("game-container");

  // Update background
  if (node.bg) {
    container.style.backgroundImage = `url('${node.bg}')`;
  }

  storyDiv.innerText = node.text;
  choicesDiv.innerHTML = "";

  if (node.choices) {
    node.choices.forEach(choice => {
      const btn = document.createElement("button");
      btn.classList.add("choice-btn");
      btn.innerText = choice.text;
      btn.onclick = () => {
        if (choice.next) showStory(story[choice.next]);
        else alert("End of this demo branch. Expand story further!");
      };
      choicesDiv.appendChild(btn);
    });
  }
}

// Start game
showStory(story.start);
