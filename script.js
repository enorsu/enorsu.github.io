
//github redirect
function redirect_github() {
  window.location = "https://github.com/enorsu";
}

// redirect function for easy access
function goto(URL) {
  window.location = URL;
}


//redirects
const queryString =  window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const redir = urlParams.get("r");

if (redir = "github") {goto("https://github.com/enorsu");}

