// this removes all the buttons with the class "goofy-button"

const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
var randomY;
var randomX;

function remove_goofy_buttons() {
    var buttons = document.getElementsByClassName("goofy-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].parentNode.removeChild(buttons[i]);
    }
}


function deleteItem(e){
    console.log("Button element", e)
    e.parentElement.remove()
  }

//this add 1 goofy buttons in a random location

function add_goofy_button() {

    randomX = Math.random() * width;
    randomY = Math.random() * height;

    randomX = Math.round(randomX);
    randomY = Math.round(randomY);

    // console.log(randomX, randomY);
    

    var button = document.createElement("a");
    button.setAttribute("class", "goofy-button");
    button.setAttribute("onclick", "document.body.removeChild(this)");
    button.innerHTML = "X";
    document.body.appendChild(button);

    
}