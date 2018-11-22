function AddTask(e) {
    e.preventDefault();
    
    var li = document.createElement('li');
    li.classList.add("li");
    var ul = document.querySelector("ul");

    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    var span = document.createElement('span');
    span.innerHTML = document.querySelector("#task").value;

    var removeButton = document.createElement('INPUT');
    removeButton.setAttribute("type", "submit");
    removeButton.setAttribute("value","x");
    removeButton.addEventListener("click", removeTask);

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);
    li.addEventListener("click", decidedTask);
    document.querySelector("#task").value = "";
};

function removeTask(e) {
    e.target.parentNode.remove();
}

function decidedTask(thisObject) {   
    if (thisObject.target.className.includes("li")) {
        thisObject = thisObject.target;
    } else {
        thisObject = thisObject.target.parentNode;
    }
    var span = thisObject.childNodes[1];
    var checkbox = thisObject.childNodes[0];
    if (thisObject.className.includes("decided")) {
        thisObject.classList.remove("decided");
        span.classList.remove("decidedTask");
        checkbox.checked = false;
    } else {
        thisObject.classList.add("decided");
        span.classList.add("decidedTask");
        checkbox.checked = true;
    }
}


// var element = document.querySelector("button");
// element.addEventListener("click", event1); 

/*
function AddTask(e) {
    e.preventDefault();
    
    var li = document.createElement('li');
    li.setAttribute("onclick","decidedTask(this)");
    var ul = document.querySelector("ul");

    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");

    var span = document.createElement('span');
    span.innerHTML = document.querySelector("#task").value;

    var removeButton = document.createElement('INPUT');
    removeButton.setAttribute("type", "submit");
    removeButton.setAttribute("value","x");
    removeButton.setAttribute("onclick", "removeTask(this)");

    ul.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton);
    document.querySelector("#task").value = "";
};

function removeTask(thisObject){
    document.querySelector('ul').removeChild(thisObject.parentNode);
}

function decidedTask(thisObject)
{
    var span = thisObject.childNodes[1];
    var checkbox = thisObject.childNodes[0];
    if (thisObject.className.includes("decided")) {
        thisObject.classList.remove("decided");
        span.classList.remove("decidedTask");
        checkbox.checked = false;
    } else {
        thisObject.classList.add("decided");
        span.classList.add("decidedTask");
        checkbox.checked = true;
    }
}


// var element = document.querySelector("button");
// element.addEventListener("click", event1); 
*/