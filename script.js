let box = document.querySelectorAll(".b");
let reset = document.querySelector(".fbutton");
let announce = document.querySelector(".announce");
let winmessage = document.querySelector(".msg");

let turnX = true;

let winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let click = 0

const boxenable = () => {
    for(let btn of box ){
        btn.disabled = false;
        btn.innerText = "";
        turnX = true;
    }
    winmessage.classList.add("hide");
}
const boxdisabled = () => {
    for(let btn of box ){
        btn.disabled = true;
    }
}

box.forEach((box) => {
    box.addEventListener("click", () => {
        click+= 1;
        console.log("box was clicked");
        if(turnX) {// player X turn
            box.innerText = "X";
            turnX = false;
            announce.innerText = "O TURN";
        }else{
            box.innerText= "O";
            turnX = true;
            announce.innerText = "X TURN";
        }
        box.disabled = true;

        checkWinner();

        if(click === 9) {
            winmessage.innerText= "DRAW";
            winmessage.classList.remove("hide");
        }
    })
})

const checkWinner = () => {
    for(pattern of winpattern) {
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                boxdisabled();
                winmessage.innerText= "Winner: "+ pos1;
                winmessage.classList.remove("hide");
            }
        }
    }
}

reset.addEventListener("click", boxenable);