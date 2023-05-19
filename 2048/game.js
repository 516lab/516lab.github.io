$(document).keydown(function(event) {
    switch(event.keyCode) {
        case 37:
            //left
            if(moveleft()) {
                //generate a new random number
                setTimeout("generateOneNumber()", 210);
                //whether the game is over
                setTimeout("isgameover(board)", 300);
            }
            break;
        case 38:
            //up
            if(moveup()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover(board)", 300);
            }
            break;
        case 39:
            //right
            if(moveright()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover(board)", 300);
            }
            break;
        case 40:
            //down
            if(movedown()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isgameover(board)", 300);
            }
            break;
    }
});

function moveleft() {
    //if this cell cannot move
    if(!canMoveLeft(board))
        return 0;
    for(var i = 0; i < 4; i++) {
        for(var j = 1; j < 4; j++) {
            //the first colomu cell cannot move so we start from j = 1
            if(board[i][j]) {
                for(var k = 0; k < j; k++) {
                    if(!board[i][k] && noMiddleBlokLeft(i, j, k, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[i][k] == board[i][j] && noMiddleBlokLeft(i, j, k, board) && !hasConfilicted[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updataScore(score);
                        hasConfilicted[i][k] = 1;
                    }
                }
            }
        }
    }
    setTimeout("updataview()", 200);
    return 1;
}

function moveup() {
    //if this cell cannot move
    if(!canMoveup(board))
        return 0;
    for(var i = 1; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            //the first row cell cannot move so we start from i = 1
            if(board[i][j]) {
                for(var k = 0; k < i; k++) {
                    if(!board[k][j] && noMiddleBlokUp(i, j, k, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[k][j] == board[i][j] && noMiddleBlokUp(i, j, k, board) && !hasConfilicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updataScore(score);
                        hasConfilicted[k][j] = 1;
                    }
                }
            }
        }
    }
    setTimeout("updataview()", 200);
    return 1;
}

function moveright() {
    //if this cell cannot move
    if(!canMoveright(board))
        return 0;
    for(var i = 0; i < 4; i++) {
        for(var j = 2; j >= 0; j--) {
            if(board[i][j]) {
                for(var k = 3; k > j; k--) {
                    if(!board[i][k] && noMiddleBlokRight(i, j, k, board)) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[i][k] == board[i][j] && noMiddleBlokRight(i, j, k, board) &&!hasConfilicted[i][k]) {
                        showMoveAnimation(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updataScore(score);
                        hasConfilicted[i][k] = 1;
                    }
                }
            }
        }
    }
    setTimeout("updataview()", 200);
    return 1;
}

function movedown() {
    //if this cell cannot move
    if(!canMovedown(board))
        return 0;
    for(var i = 2; i >= 0; i--) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j]) {
                for(var k = 3; k > i; k--) {
                    if(!board[k][j] && noMiddleBlokDown(i, j, k, board)) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                    }
                    else if(board[k][j] == board[i][j] && noMiddleBlokDown(i, j, k, board) && !hasConfilicted[k][j]) {
                        showMoveAnimation(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updataScore(score);
                        hasConfilicted[k][j] = 1;
                    }
                }
            }
        }
    }
    setTimeout("updataview()", 200);
    return 1;
}

function noMiddleBlokLeft(i, j, k, board) {
    for(var q = k + 1; q < j; q++) {
        if(board[i][q])
            return 0;
    }
    return 1;
}

function noMiddleBlokUp(i, j, k, board) {
    for(var q = k + 1; q < i; q++) {
        if(board[q][j])
            return 0;
    }
    return 1;
}

function noMiddleBlokRight(i, j, k, board) {
    for(var q = k - 1; q > j; q--) {
        if(board[i][q])
            return 0;
    }
    return 1;
}

function noMiddleBlokDown(i, j, k, board) {
    for(var q = k - 1; q > i; q--) {
        if(board[q][j])
            return 0;
    }
    return 1;
}

function isgameover(board) {
    if(nospace(board) && nomove(board))
        gameover();
}

function gameover() {
    $("#grid-container").append("<div id='gameover' class='gameover'><p>Your Score:</p><span>"+score+"</span><a href='javascript:restartgame();' id='restartgamebutton'>Restart</a></div>")
    var gameover = $("#gameover");
    gameover.css("width", "500px");
    gameover.css("height", "500px");
    gameover.css("background-color", "rgba(0, 0, 0, 0.5)");
    gameover.css("border-radius", "30px");
}

function restartgame() {
    $("#gameover").remove();
    updataScore(0);
    newgame();
}