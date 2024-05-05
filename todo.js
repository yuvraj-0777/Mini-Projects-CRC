let string = "";
let title = document.getElementById("box1");
let description = document.getElementById("box2");
let mid = document.querySelector(".mid");
let ul = document.querySelector("ul");

function add(){
    if(title.value == "" && description.value == ""){
        alert("Please specify title and description");
    }
    else if(title.value == ""){
        alert("Please specify title");
    }
    else if( description.value == ""){
        alert("Fill the description");
    }
    else{
        string  = description.value;
        string = string.substring(0, 10)
        let icon = document.createElement("ul");
        icon.innerHTML = `<p>${title.value}</p> <p>${string}...</p> <i class="fa fa-times"></i>`;
        mid.appendChild(icon);

        icon.querySelector("i").addEventListener("click", function(){
            icon.remove(icon.value);
        })

        title.value = "";
        description.value = "";
    }
}

var clear = document.getElementsByTagName("ul");