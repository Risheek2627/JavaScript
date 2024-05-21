let boxes = document.querySelectorAll(".box");
let resetBtn = document.getElementById("reset-btn");
let msg = document.querySelector("#msg");
let new_g = document.getElementById("new_g");
let msg_con = document.querySelector(".msg-container");

let turnO = true;

const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const enable = () => {
  for (let bo of boxes) {
    bo.disabled = false;
    bo.innerText = "";
  }
};

const disable = () => {
  for (let bo of boxes) {
    bo.disabled = true;
  }
};
const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msg_con.classList.remove("hide");
  disable();
};
const checkWinner = () => {
  let winnerFound = false;

  // Check for winner
  for (pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
      console.log("winner", pos1);
      showWinner(pos1);
      winnerFound = true;
      break;
    }
  }

  // Check for tie
  if (!winnerFound) {
    let allBoxesFilled = true;
    for (let box of boxes) {
      if (box.innerText === "") {
        allBoxesFilled = false;
        break;
      }
    }
    if (allBoxesFilled) {
      msg.innerText = "Match tied";
      msg_con.classList.remove("hide");
    }
  }
};

const reset_g = () => {
  turnO = true;
  enable();
  msg_con.classList.add("hide");
};

new_g.addEventListener("click", reset_g);
resetBtn.addEventListener("click", reset_g);
