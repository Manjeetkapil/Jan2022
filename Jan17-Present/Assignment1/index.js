var previous;
function showText(value){
    let image = `image${value}`;
    let current = document.getElementById(image);
    
    let classes = current.classList;
    if (classes.contains("show")) {
        classes.remove("show");
      } 
    else {
        if (previous != null){
            previous.classList.remove("show");
        }
        previous = current;
        classes.add("show");
    }

}