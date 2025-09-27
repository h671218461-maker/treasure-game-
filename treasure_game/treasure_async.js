export class TreasureMap {
  static getInitialClue() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("在古老的图书馆里找到了第一个线索...");
      }, 1000);
    });
  }

  static decodeAncientScript(clue) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!clue) reject("没有线索可以解码!");
        resolve("解码成功!宝藏在一座古老的神庙中...");
      }, 1500);
    });
  }

  static crossJungle() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("勇敢穿越了毒蛇环绕的丛林...");
      }, 1200);
    });
  }

  static solvePuzzle() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("成功解开了石门上的机关谜题，石门缓缓打开...");
      }, 1500);
    });
  }

  static searchTemple(location) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random();
        if (random < 0.3) reject("糟糕!遇到了神庙守卫!");
        resolve("找到了一个神秘的箱子...");
      }, 2000);
    });
  }

  static openTreasureBox() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("🎉 恭喜!你找到了传说中的宝藏!");
      }, 1000);
    });
  }
}

export async function findTreasure() {
  try {
    const clue = await TreasureMap.getInitialClue();
    console.log(clue);

    const location = await TreasureMap.decodeAncientScript(clue);
    console.log(location);

    const jungle = await TreasureMap.crossJungle();
    console.log(jungle);

    const puzzle = await TreasureMap.solvePuzzle();
    console.log(puzzle);

    const box = await TreasureMap.searchTemple(location);
    console.log(box);

    const treasure = await TreasureMap.openTreasureBox();
    console.log(treasure);
  } catch (error) {
    console.error("任务失败:", error);
  }
}
