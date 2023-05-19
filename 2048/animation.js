function ShowNumberWithAnimation(i, j, randnumber) {
    var numbercell = $("#number-cell-"+i+"-"+j);
    //set numbercell color and number
    numbercell.css("background-color", getNumberBackgroundColor(randnumber));
    numbercell.css("color", getNumberColor(randnumber));
    numbercell.text(randnumber);
    //set numbercell display animation
    numbercell.animate( {
        width: "100px",
        height: "100px",
        top: getPosTop(i),
        left: getPosLeft(j)
    }, 50)
}

function showMoveAnimation(fromx, fromy, tox, toy) {
    var numbercell = $("#number-cell-"+fromx+"-"+fromy);
    numbercell.animate( {
        top:getPosTop(tox),
        left:getPosLeft(toy)
    },200);
}

function updataScore(score) {
    $("#score").text(score);
}