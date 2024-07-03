let boxes = document.querySelectorAll(".box") ;
let resbtn = document.querySelector("#resetbutton") ;
let turn0 = true ;//playerx or 0 
let newgamebtn = document.querySelector("#new-butn") ;
let msg = document.querySelector("#msg") ;
let msgcontainer = document.querySelector(".msg-container") ;
const winpatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [3,4,5] ,
    [6,7,8] ,
    [2,4,6] ,
 ];
 const resetgame = () =>
 {
    turn0 = true ;
    enableboxes() ;
    msgcontainer.classList.add("hide") ;
 };
 boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        console.log("box was clicked") ;
        if(turn0)
        {
            box.innerText = "0" ;
            turn0 = false ;
        }
        else{
            box.innerText = "X" ;
            turn0 = true ;
        }
        box.disabled = true ;
        checkWinner() ;
     });
 }) ;
 const disableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = true ;
    }
 };
 const enableboxes = () => {
    for(let box of boxes)
    {
        box.disabled = false ;
        box.innerText = "" ;
    }
 };

 const showwinner = (winner) =>{
    msg.innerText = `Congratulations , Winner is ${winner}` ;
    msgcontainer.classList.remove("hide") ;
    disableboxes() ;
 };
 const checkWinner = () => {
    for( let pattern of winpatterns)
    {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText ;
        let pos3 = boxes[pattern[2]].innerText ;
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1==pos2 && pos2 == pos3)
            {
                console.log("winner" , pos1) ;
                showwinner(pos1) ;
            }
        }
        
    }
 };
newgamebtn.addEventListener("click" , resetgame) ;
resetgame.addEventListener("click" , resetgame) ;