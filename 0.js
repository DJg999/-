// 初始奖品数量
let prizeCounts = {
    "一等奖": 10,
    "二等奖": 50,
    "三等奖": 500
};

// 抽奖函数
function drawLottery() {
    const drawButton = document.getElementById('drawButton');
    drawButton.disabled = true; // 禁用按钮，防止多次点击

    // 如果奖品已抽完，显示结束信息
    if (prizeCounts["一等奖"] === 0 && prizeCounts["二等奖"] === 0 && prizeCounts["三等奖"] === 0) {
        document.getElementById("endMessage").style.display = "block";
        document.getElementById("endMessage").innerText = "很抱歉！今天的奖品全部抽完啦！";
        drawButton.disabled = false; // 重新启用按钮
        return;
    }

    // 随机抽奖
    let prize = "";
    const random = Math.random();
    if (prizeCounts["一等奖"] > 0 && random < 0.05) {
        prize = "一等奖：金奇麟烤鱼双人套餐一份";
        prizeCounts["一等奖"]--;
    } else if (prizeCounts["二等奖"] > 0 && random < 0.20) {
        prize = "二等奖：米洛克电玩城游戏币30个";
        prizeCounts["二等奖"]--;
    } else if (prizeCounts["三等奖"] > 0) {
        prize = "三等奖：纸抽一包";
        prizeCounts["三等奖"]--;
    }

    // 显示中奖结果
    if (prize) {
        document.getElementById('result').innerHTML = `<div>${prize}</div><p>祝你情人节快乐！💖</p>`;
    }

    drawButton.disabled = false; // 重新启用按钮
}
