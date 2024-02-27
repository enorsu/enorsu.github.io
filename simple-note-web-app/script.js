
//get window size

const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;
var randomY;
var randomX;

var noteCount = 0;

var spawnTXT = document.getElementById("spawntxt");

spawnBTN = document.getElementById("spawnbtn");

spawnBTN.addEventListener("click", add_button);



function deleteNote(node) {
    document.body.removeChild(node);
    document.getElementById(noteCount).remove();
    
}

function addClipboard(node) {
    navigator.clipboard.writeText(node.innerHTML);
    const clipboardNotification = new Notification(title="Copied to clipboard", {body: "Copied text: " + node.innerHTML + " to clipboard."});
}
function add_button() {
    noteCount++;

    randomX = Math.random() * width;
    randomY = Math.random() * height;

    randomX = Math.round(randomX);
    randomY = Math.round(randomY);

    // console.log(randomX, randomY);
    

    var button = document.createElement("a");
    var seperator = document.createElement("br");
    button.setAttribute("class", "fancy-note");
    button.setAttribute("onclick", "addClipboard(this);");
    button.setAttribute("id", noteCount);
    button.innerHTML = spawnTXT.value;
    document.body.appendChild(button);

    var deleteButton = document.createElement("a");
    deleteButton.setAttribute("class", "fancy-note-remove");
    deleteButton.setAttribute("onclick", "deleteNote(this);");
    deleteButton.innerHTML = "X";
    document.body.appendChild(deleteButton);

}






var notificationBtn = document.getElementById("enable")
notificationBtn.addEventListener("click", askNotificationPermission);

function askNotificationPermission() {
    // Check if the browser supports notifications
    if (!("Notification" in window)) {
      console.log("This browser does not support notifications.");
      return;
    }
    Notification.requestPermission().then((permission) => {
      // set the button to shown or hidden, depending on what the user answers
      notificationBtn.style.display = permission === "granted" ? "none" : "block";
      const test =  new Notification(title="Notification permission granted");
      setTimeout(function() {
        test.close();
      }, 2300)
    });
  }
  
