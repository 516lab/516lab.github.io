function getPosTop(i) {
    return 20 + 120 * i;
}

function getPosLeft(j) {
    return 20 + 120 * j;
}

function getNumberBackgroundColor(number) {
    switch(number) {
        case 2:return "#eee4da";
        case 4:return "#9AFF02";
        case 8:return "#C07AB8";
        case 16:return "#EA0000	";
        case 32:return "#BE77FF";
        case 64:return "#007979";
        case 128:return "#2828FF";
        case 256:return "#BEBEBE";
        case 512:return "#F9F900";
        case 1024:return "#A5A552";
        case 2048:return "#9AFF02";
        case 4096:return "#8600FF";
        case 8192:return "#E8E8D0";
    }
}

function getNumberColor(number) {
    if(number <= 4)
        return "#776e65";
    return "white";
}

function canMoveLeft(board) {
    for(var i = 0; i < 4; i++) {
        for(var j = 1; j < 4; j++) {
            if(board[i][j]) {
                if(!board[i][j - 1] || board[i][j - 1] == board[i][j]) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

function canMoveup(board) {
    for(var i = 1; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j]) {
                if(!board[i - 1][j] || board[i - 1][j] == board[i][j]) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

function canMoveright(board) {
    for(var i = 0; i < 4; i++) {
        for(var j = 2; j >= 0; j--) {
            if(board[i][j]) {
                if(!board[i][j + 1] || board[i][j + 1] == board[i][j]) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

function canMovedown(board) {
    for(var i = 2; i >= 0; i--) {
        for(var j = 0; j < 4; j++) {
            if(board[i][j]) {
                if(!board[i + 1][j] || board[i + 1][j] == board[i][j]) {
                    return 1;
                }
            }
        }
    }
    return 0;
}

function nospace(board) {
    for(var i = 0; i < 4; i++) {
        for(var j = 0; j < 4; j++) {
            if(!board[i][j])
                return 0;
        }
    }
    return 1;
}

function nomove(board) {
    if(canMoveLeft(board) || canMoveright(board) || canMoveup(board) || canMovedown(board))
        return 0;
    return 1;
}