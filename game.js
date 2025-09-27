function typeWriter(text, delay = 50) {
  return new Promise(resolve => {
    const story = document.getElementById("story");
    let i = 0;
    story.innerHTML = "";
    const timer = setInterval(() => {
      story.innerHTML += text.charAt(i);
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
}

class TreasureAdventure {
  static async start() {
    await typeWriter("在古老的图书馆里，你找到了一卷布满灰尘的羊皮卷...");
  }

  static async decodeScript() {
    await typeWriter("你解读了神秘的古文字：宝藏在一座失落的神庙中...");
  }

  static async crossJungle() {
    await typeWriter("你踏入毒蛇环绕的丛林，丛林里回荡着怪异的叫声...");
  }

  static async crossRiver() {
    await typeWriter("一条湍急的河流挡住了去路，你用木筏惊险渡过...");
  }

  static async enterMaze() {
    await typeWriter("你进入了一座迷宫，四周都是相同的石墙...");
  }

  static async fightGuardian() {
    await typeWriter("⚔️ 你遇到神庙守卫，经过一番激战，你成功击败了它!");
  }

  static async solvePuzzle() {
    await typeWriter("石门上的机关缓缓转动，你成功解开谜题...");
  }

  static async findTreasure() {
    await typeWriter("你推开石门，眼前出现了闪闪发光的宝藏! 🎉");
  }
}

let step = 0;
const steps = [
  TreasureAdventure.start,
  TreasureAdventure.decodeScript,
  TreasureAdventure.crossJungle,
  TreasureAdventure.crossRiver,
  TreasureAdventure.enterMaze,
  TreasureAdventure.fightGuardian,
  TreasureAdventure.solvePuzzle,
  TreasureAdventure.findTreasure
];

async function nextStep() {
  if (step < steps.length) {
    await steps[step]();
    step++;
  } else {
    await typeWriter("冒险结束，谢谢游玩!");
  }
}

document.addEventListener("keydown", async (event) => {
  if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(event.key.toLowerCase())) {
    nextStep();
  }
});

// 游戏开始
nextStep();