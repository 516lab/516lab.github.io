//define a one-demisional array first because javascript cannot define two-demisional array directly
var board = new Array();
var score = 0;
var hasConfilicted = new Array();

$(function() {
    newgame();
});

function newgame() {
    //init chess board
    init();
    //generate two random number in the chess board
    generateOneNumber();
    generateOneNumber();
}

function init() {
    for(var i = 0; i < 4; i++) {
        //to create a two-demisional array
        board[i] = new Array();
        hasConfilicted[i] = new Array();
        for(var j = 0; j < 4; j++) {
            //init every evert cell beginning is zero
            board[i][j] = 0;
            hasConfilicted[i][j] = 0;
            //reap each cell and set their top and left
            var gridcell = $("#grid-cell-"+i+"-"+j);
            gridcell.css("top", getPosTop(i));
            gridcell.css("left", getPosLeft(j));
        }
    }

    updataview();
    score = 0;
    $("#score").text(score);
}

function updataview() {
    $(".number-cell").remove();
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            //create number cell to cover over the grid cell in order to show the number
            $("#grid-container").append("<div class='number-cell' id='number-cell-"+i+"-"+j+"'></div>");
            //set the css for the number
            var numbercell = $("#number-cell-"+i+"-"+j);
            if(board[i][j] == 0) {
                numbercell.css("width", "0px");
                numbercell.css("height", "0px");
                //to set the number in the middle of the grid cell
                numbercell.css("top", getPosTop(i) + 50);
                numbercell.css("left", getPosLeft(j) + 50);
            }
            else {
                numbercell.css("width", "100px");
                numbercell.css("height", "100px");
                numbercell.css("top", getPosTop(i));
                numbercell.css("left", getPosLeft(j));
                numbercell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numbercell.css("color", getNumberColor(board[i][j]));
                numbercell.text(board[i][j]);
            }
            hasConfilicted[i][j] = 0;
        }
    }
}

function generateOneNumber() {
    //to generate a random number on a random position
    //1.generate a random position
    var randx = Math.floor(Math.random() * 4);
    var randy = Math.floor(Math.random() * 4);
    //this random position must be cover on cell without number
    while(1) {
        if(board[randx][randy] == 0)
            break;
        var randx = Math.floor(Math.random() * 4);
        var randy = Math.floor(Math.random() * 4);
    }
    //2.generate a random number 2 or 4
    var randnumber = Math.random() < 0.5 ? 2 : 4;
    //3.display the randnumber on the random position
    board[randx][randy] = randnumber;
    //display number with animation
    ShowNumberWithAnimation(randx, randy, randnumber);
}