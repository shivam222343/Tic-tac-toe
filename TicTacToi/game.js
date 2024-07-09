let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "X";
      turnO = false;
    } else {
      //playerX
      box.innerText = "O";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        changeTextCol();

        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

const changeTextCol = (box)=>{
      for(let box of boxes)
        {
            box.style.color = "red";
        }
}

//Drag and drop wala function

  const catchers = document.querySelectorAll(".catcher");
  const btn = document.querySelector(".reset-btn");
  btn.addEventListener("dragstart",(e)=>
  {
    console.log("dragstart");
    setTimeout(()=>{
            e.target.className = 'hide';
    },0);

    btn.addEventListener("dragend",(e)=>{
      console.log("dragend");
           e.target.className = 'btn';
    });
  });

  for(let catcher of catchers)
    {
           catcher.addEventListener("dragenter",(e)=>{
                console.log("dragenter");
                catcher.style.opacity = "1";
           });

           catcher.addEventListener("dragleave",(e)=>{
            console.log("dragleave");
            catcher.style.opacity = "0";
       });


           catcher.addEventListener("dragover",(e)=>{
            console.log("dragover");
            e.preventDefault();
          });
            catcher.addEventListener("drop",(e)=>{
              console.log("dragover");
                catcher.style.opacity = "1";
             e.target.append(btn);
       });
      }

    catchers.forEach((catcher)=>{
        catcher.addEventListener("drop",(e)=>
        
          {
            if(catcher.addEventListener("drop",()=>{})=== true)
            console.log("confirm")
          }
      )
    })

    
  

