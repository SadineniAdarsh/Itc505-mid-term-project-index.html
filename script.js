const stages = {
    1: {
        text: "You find yourself in a mystical forest. A path diverges in front of you.",
        choices: ["Take the left path", "Take the right path"],
        consequence: [2, 3],
        image: "Ancient_Run.jpeg"
    },
    2: {
        text: "You encounter a wise old sage who offers you guidance.",
        choices: ["Ask for advice", "Ignore the sage"],
        consequence: [4, 5],
        image: "Old_sage.jpeg"
        
    },
    3: {
        text: "You stumble upon a hidden treasure chest.",
        choices: ["Open the chest", "Leave the chest alone"],
        consequence: [6, 7],
        image: "Tressure_chest.jpeg"
    },
    4: {
        text: "The sage tells you about a nearby village. You decide to visit it.",
        choices: ["Go to the village", "Stay in the forest"],
        consequence: [8, 2],
        image: "Near_village.jpeg"
       
    },
    5: {
        text: "You ignore the sage's advice and continue your journey.",
        choices: ["Continue", "Turn back"],
        consequence: [9, 2],
        image: "continue_joureny.jpeg"
        
    },
    6: {
        text: "You open the treasure chest and find a map to a human settlement.",
        choices: ["Follow the map", "Ignore the map"],
        consequence: [10, 11],
        image: "find_map.jpeg"
     
    },
    7: {
        text: "You leave the chest untouched and continue exploring.",
        choices: ["Explore further", "Go back"],
        consequence: [12, 2],
        image: "left_chest.jpeg"
       
    },
    8: {
        text: "You arrive at the village and meet friendly villagers.",
        choices: ["Join the village", "Leave the village"],
        consequence: [13, 14],
        image: "group_humans.jpeg"
    
    },
    9: {
        text: "You decide to turn back and encounter a group of humans.",
        choices: ["Approach the humans", "Avoid the humans"],
        consequence: [15, 16],
        image: "group_humans.jpeg"
    },
    10: {
        text: "Following the map, you reach a bustling human settlement.",
        choices: ["Interact with humans", "Leave the settlement"],
        consequence: [17, 18],
        image: "human_settlement.jpeg"
       
    },
    11: {
        text: "You ignore the map and continue your journey.",
        choices: ["Continue", "Return to the chest"],
        consequence: [19, 6],
        image: "forest_joureny.jpeg"
        
    },
    12: {
        text: "You explore further and discover a hidden waterfall.",
        choices: ["Approach the waterfall", "Go back"],
        consequence: [20, 2],
        image: "waterfall.jpeg"
      
    },
    13: {
        text: "You join the village and become an essential part of the community.",
        choices: [],
        consequence: [],
        image: "village_leave.jpeg"
       
    },
    14: {
        text: "You leave the village and continue your adventures.",
        choices: [],
        consequence: [],
        image: "villege_leave.jpeg"
        
    },
    15: {
        text: "You approach the humans and find they are friendly explorers.",
        choices: ["Join the explorers", "Go back"],
        consequence: [21, 2],
        image: "find_humans.jpeg"
        
    },
    16: {
        text: "You avoid the humans and continue your journey alone.",
        choices: [],
        consequence: [],
        image: "find_humans.jpeg"
         
    },
    17: {
        text: "You interact with humans and learn about their culture.",
        choices: ["Adopt human customs", "Leave the settlement"],
        consequence: [22, 18],
        image: "learn_cluture.jpeg"
        
    },
    18: {
        text: "You decide to leave the human settlement and explore further.",
        choices: [],
        consequence: [],
        image: "leave_humans.jpeg"
       
    },
    19: {
        text: "You continue your journey and encounter a mysterious creature.",
        choices: ["Approach the creature", "Avoid the creature"],
        consequence: [23, 24],
        image: "mysterious_creature.jpeg"
       
    },
    20: {
        text: "You approach the waterfall and discover a hidden cave behind it.",
        choices: ["Enter the cave", "Ignore the cave"],
        consequence: [25, 2],
        image: "hidden_cave.jpeg"
       
    },
    21: {
        text: "You join the friendly explorers and embark on exciting adventures.",
        choices: [],
        consequence: [],
        image: "joined_explores.jpeg"
       
    },
    22: {
        text: "You adopt human customs and become part of the settlement.",
        choices: [],
        consequence: [28,28],
        image: "joined_explores.jpeg"
       
    },
    23: {
        text: "You approach the mysterious creature and discover it's a magical guardian.",
        choices: ["Befriend the guardian", "Leave the guardian"],
        consequence: [26, 27],
        image: "Magical_gaurdian.jpeg"
        
    },
    24: {
        text: "You avoid the mysterious creature and continue your journey cautiously.",
        choices: [],
        consequence: [],
        image: "avoid_creature.jpeg"
        
    },
    25: {
        text: "You enter the cave and find ancient artifacts that grant you special powers.",
        choices: ["Harness the powers", "Leave the artifacts"],
        consequence: [28, 2],
        image: "entered_cave.jpeg"
        
    },
    26: {
        text: "You befriend the magical guardian and gain its protection.",
        choices: [],
        consequence: [],
        image: "joined_gaurdian.jpeg"
       
    },
    27: {
        text: "You leave the magical guardian and continue your journey with newfound knowledge.",
        choices: [],
        consequence: [],
        image: "leave_gaurdian.jpeg"
        
    },
    28: {
        text: "You harness the powers of the ancient artifacts and become a legendary Ancient Run.",
        choices: [],
        consequence: [],
        image: "End.jpeg"
    
    },
    // Add more stages as needed
};

let currentStage = 1;

function startGame() {
    currentStage = 1;
    updatePage();
}

function updatePage() {
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');
    const image = document.getElementById('story-image');

    storyText.textContent = stages[currentStage].text;

    choicesDiv.innerHTML = "";
    stages[currentStage].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.addEventListener('click', () => makeChoice(index));
        choicesDiv.appendChild(button);
    });

    image.src = stages[currentStage].image;

    const restartBtn = document.getElementById('restart-btn');
    restartBtn.style.display = currentStage === 1 ? 'none' : 'block';
}

function makeChoice(choiceIndex) {
    currentStage = stages[currentStage].consequence[choiceIndex];
    updatePage();

    // Check for game ending
    if (!stages[currentStage].choices || stages[currentStage].choices.length === 0) {
        endGame();
    }
}

function endGame() {
    const storyText = document.getElementById('story-text');
    const choicesDiv = document.getElementById('choices');
    const image = document.getElementById('story-image');
    const restartBtn = document.getElementById('restart-btn');

    storyText.textContent = "The adventure has ended. Thanks for playing!";
    choicesDiv.innerHTML = "";
    image.src = "End.jpeg";
    restartBtn.style.display = 'block';
}

// Initial game start
startGame();
