
var count = 1

var children = document.body.children;
for (c of children) { 
  var a = c.children;
  for (e of a) {
    
    var b = e.children;
    for (another of b) {
        count++
        
        //another.style = "animation: 1s var(--timing) " + count * 100 + "ms"+ " 1 slideInFromLeft;"
    }
  }
  
}
