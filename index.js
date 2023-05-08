var inputBox = document.getElementById("input-box");
var listContainer = document.querySelector("ul");
function addTask(){
    if(inputBox.value==""){
       alert("You must write something");
    }
    else{
        var lI = document.createElement("li");
        lI.innerHTML = inputBox.value;
        listContainer.appendChild(lI);
        var Span = document.createElement("span");
        Span.innerHTML = "\u00d7";
        lI.appendChild(Span);
    }
    inputBox.value="";
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
    }
    else{
        if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
    }
    }
}, false);
