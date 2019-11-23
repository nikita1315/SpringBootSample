function removeByJquery() {
    var element = $("#words-to-delete");
    element.remove();
}

function add() {
    var but2 = $("#add-but");
    but2.after("<h1>Hello, world!</h1>");
}
var current = "blue";
let colors = ["none", "none", "none", "none", "none", "none", "none", "none", "none"]
let resRed = 0;
let resBlue = 0;
function turn(number) {

    //    
    //    $("#s" + number).css("background-color", current);

    $("#s" + number).animate({
        backgroundColor: current,
        borderColor: "orange",

    }, 300)

    colors[number - 1] = current;

    if (current === "blue") {
        current = "red";
    } else {
        current = "blue";
    }

    $("#s" + number).prop("disabled", true);
    var result = check();
    if(result ==="red"){
        resRed++;
    }
    if(result ==="blue"){
        resBlue++;
    }

    if (result === "red" || result === "blue") {
        $("#rr").text(resRed.toString());
         $("#rb").text(resBlue.toString());
        $("#result").animate({
            backgroundColor: result,
        }, 300)
        $("#result").text("Winner is")
        for (let i = 1; i < 10; i++) {
            $("#s" + i).prop("disabled", true);
        }
    }


}

function check() {
    let count = 0;
    if ((colors[0] === "blue" && colors[1] === "blue" && colors[2] === "blue") || (colors[3] === "blue" && colors[4] === "blue" && colors[5] === "blue") || (colors[6] === "blue" && colors[7] === "blue" && colors[8] === "blue") || (colors[0] === "blue" && colors[3] === "blue" && colors[6] === "blue") || (colors[1] === "blue" && colors[4] === "blue" && colors[7] === "blue") || (colors[2] === "blue" && colors[5] === "blue" && colors[8] === "blue") || (colors[0] === "blue" && colors[4] === "blue" && colors[8] === "blue") || (colors[2] === "blue" && colors[4] === "blue" && colors[6] === "blue")) {
        return "blue";
        count++;

    } else {
        if ((colors[0] === "red" && colors[1] === "red" && colors[2] === "red") || (colors[3] === "red" && colors[4] === "red" && colors[5] === "red") || (colors[6] === "red" && colors[7] === "red" && colors[8] === "red") || (colors[0] === "red" && colors[3] === "red" && colors[6] === "red") || (colors[1] === "red" && colors[4] === "red" && colors[7] === "red") || (colors[2] === "red" && colors[5] === "red" && colors[8] === "red") || (colors[0] === "red" && colors[4] === "red" && colors[8] === "red") || (colors[2] === "red" && colors[4] === "red" && colors[6] === "red")) {
            return "red";
            count++;
        }

    }

    let cr = 0;
    for (let i = 0; i < 9; i++) {
        if (colors[i] === "none") {
            cr++;
        }
    }

    if (cr == 0 && count == 0) {
        return "draw"
    }
}

function restart() {
    for (let i = 1; i < 10; i++) {
        $("#s" + i).animate({
            backgroundColor: "white",
            borderColor: "black",

        }, 100)
        $("#s" + i).prop("disabled", false);
    }
    for (let i = 0; i < 9; i++) {
        colors[i] = "none";
    }
    
    $("#result").animate({
        backgroundColor: "gray",
    }, 300)
    $("#result").text("...")

}
