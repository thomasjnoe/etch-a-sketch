var container = $("#container");
//var square = $(".square");
var h = container.height();
var w = container.width();
var alpha = 1;

$(document).ready(function () {
    addGrid(20);
    singleColor();
    $(".single-color").on("click", resetGridSingle);
    $(".random-color").on("click", resetGridRandom);
    $(".lighten-color").on("click", resetGridLighten);
});

function singleColor() {
    $(".square").on("mouseenter", function() {
        $(this).addClass("new-color");
    });
}

function randomColor() {
    $(".square").on("mouseenter", function() {
        var color1 = Math.floor(Math.random() * 256);
        var color2 = Math.floor(Math.random() * 256);
        var color3 = Math.floor(Math.random() * 256);
        $(this).css("background-color","rgb(" + color1 + "," + color2 + "," + color3 + ")");
    });
}

function lightenColor() {
    $(".square").on("mouseenter", function() {
        var o = +$(this).css("opacity");
        if(o>0.1) {    
            $(this).css("opacity",o - .1)
        } else {
            $(this).css("opacity",0)
        }
    });
}

function addGrid(n) {
    var count = 1;
    var width=w/n;
    var height=h/n
    for (var i = 1; i <= n * n; i++) {
        container.append("<div class='square' style='width: " + width + "px; height: " + height + "px;'></div>");
        if (count === n) {
            container.append("<div class='new-line'></div>");
            count = 0;
        }
        count++;
    }
}

function resetGrid() {
    var n = prompt("How large would you like to make the grid?");
    container.empty();
    addGrid(n);
}

function resetGridSingle() {
    resetGrid();
    singleColor();
}

function resetGridRandom() {
    resetGrid();
    randomColor();
}

function resetGridLighten() {
    resetGrid();
    lightenColor();
}









