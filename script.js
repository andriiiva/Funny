function AddTask(e) {
    e.preventDefault();
    
    var ul = document.querySelector("ul");
    var li = document.createElement('li');
    var label = document.createElement('label');

    var checkbox = document.createElement("INPUT");
    checkbox.setAttribute("type", "checkbox");
    checkbox.addEventListener("change", decidedTask);

    var span = document.createElement('span');
    span.innerHTML = document.querySelector("#task").value;

    var removeButton = document.createElement('button');
    removeButton.innerHTML = 'x';
    removeButton.addEventListener("click", removeTask);
    
    label.appendChild(checkbox);
    label.appendChild(span);
    li.appendChild(label);
    li.appendChild(removeButton);
    ul.appendChild(li);

    document.querySelector("#task").value = "";
};

function removeTask(e) {
    e.target.parentNode.remove();
}

function decidedTask(e) {   
    if (e.target.checked) {
        e.target.parentNode.classList.add("done");
    } else {
        e.target.parentNode.classList.remove("done");
    }
}