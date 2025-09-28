
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

spawnBTN.addEventListener("click", add_note);


//deleteAllNoteBtn = document.getElementById("delete-all-notes");
//deleteAllNoteBtn.addEventListener("click", deleteAllNotes);

var getNotesBtn = document.getElementById("get-notes-storage");
getNotesBtn.addEventListener("click", get_notes);

var clearNotesBtn = document.getElementById("clear-notes-storage");
clearNotesBtn.addEventListener("click", clearLocalStorage);

var saveAllNotes = document.getElementById("save-all");
saveAllNotes.addEventListener("click", rewriteAllNotes);

var notificationsBtnClicked;

var buttonTemp;

var clickAction;
var action;

var tempNoteStore;

var tempNoteStore1;

var noteArray = [];

toggleOptions(0);
function toggleOptions(oneorzero) {
  if(oneorzero == 1) {
    getNotesBtn.style.display = "block";
    clearNotesBtn.style.display = "block";
    saveAllNotes.style.display = "block";
  } else {
    getNotesBtn.style.display = "none";
    clearNotesBtn.style.display = "none";
    saveAllNotes.style.display = "none";
  }
}


function rewriteAllNotes() {
  clearLocalStorage();
  for(var i = 0; i < noteArray.length; i++) {
    localStorage.setItem(i + 1, noteArray[i]);
  }

}


function clearLocalStorage() {
  localStorage.clear();
}


function get_notes() {
  for(var i = 1; i < localStorage.length + 1; i++) {
    console.log(localStorage.getItem(i));
    addNoteRaw(localStorage.getItem(i));
  }
}
function deleteAllNotes() {
  window.location = "";
}


function deleteNote(node) {
    document.body.removeChild(node);
    document.getElementById(noteCount).remove();
    
}

//function addClipboard(node) {
//    navigator.clipboard.writeText(node.innerHTML);
//    if(notificationsBtnClicked) {
//      const clipboardNotification = new Notification(title="Copied to clipboard", {body: "Copied text: " + node.innerHTML + " to clipboard."});
//    }
//
//  }


function doSpecifiedFunction(node) {
  clickAction = document.getElementById("actions");
  action = clickAction.value;
  if(action == "copy") {
    navigator.clipboard.writeText(node.innerHTML);
    if(notificationsBtnClicked) {
      const clipboardNotification = new Notification(title="Copied to clipboard", {body: "Copied text: " + node.innerHTML + " to clipboard."});
    }
  } else if(action == "del") {
    document.body.removeChild(node);
    ;
  }
}
    
function add_note() {
    noteCount++;

    //randomX = Math.random() * width;
    //randomY = Math.random() * height;

    //randomX = Math.round(randomX);
    //randomY = Math.round(randomY);

    // console.log(randomX, randomY);
    
    saveNote(spawnTXT.value, noteCount);
    var button = document.createElement("a");
    var seperator = document.createElement("br");
    button.setAttribute("class", "fancy-note");
    button.setAttribute("onclick", "doSpecifiedFunction(this);");
    button.setAttribute("value", noteCount);
    button.innerHTML = spawnTXT.value;
    document.body.appendChild(button);
   }



function addNoteRaw(note, removeQuotes) {
  tempNoteStore1 = note;
  removeQuotes = true;
  if(removeQuotes) {
    tempNoteStore1 = tempNoteStore1.replace(/['"]+/g, '');
  }
  var button = document.createElement("a");
  var seperator = document.createElement("br");
  button.setAttribute("class", "fancy-note");
  button.setAttribute("onclick", "doSpecifiedFunction(this);");
  button.setAttribute("value", noteCount);
  button.innerHTML = tempNoteStore1;
  document.body.appendChild(button);
  noteArray[noteCount] = tempNoteStore1;NoteStore1;
}
 

function addNoteRawNOsave(note, removeQuotes) {
  tempNoteStore1 = note;
  removeQuotes = true;
  if(removeQuotes) {
    tempNoteStore1 = tempNoteStore1.replace(/['"]+/g, '');
  }
  var button = document.createElement("a");
  var seperator = document.createElement("br");
  button.setAttribute("class", "fancy-note");
  button.setAttribute("onclick", "doSpecifiedFunction(this);");
  button.setAttribute("value", noteCount);
  button.innerHTML = tempNoteStore1;
  document.body.appendChild(button);
}
    

    

//   var deleteButton = document.createElement("a");
//    deleteButton.setAttribute("class", "fancy-note-remove");
//    deleteButton.setAttribute("onclick", "deleteNote(this);");
//    deleteButton.innerHTML = "X";
//    document.body.appendChild(deleteButton); 

    



function saveNote(note, noteNumber) {
    localStorage.setItem(noteNumber, JSON.stringify(note));
}

function getNote() {
    tempNoteStore = prompt("Please enter a note number");
    alert(JSON.parse(localStorage.getItem(tempNoteStore)));
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
      notificationsBtnClicked = true;
      const test =  new Notification(title="Notification permission granted");
      setTimeout(function() {
        test.close();
      }, 2300)
    });
  }
  
  window.addEventListener("pointerleave", function(event) {
    event.preventDefault();
    return;
  });