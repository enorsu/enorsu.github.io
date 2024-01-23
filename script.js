
//github redirect
function redirect_github() {
  window.location = "https://github.com/enorsu";
}


//redirects
const queryString =  window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const redir = urlParams.get("r");

if (redir = "github") {redirect_github();}

