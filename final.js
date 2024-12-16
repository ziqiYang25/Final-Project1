var name = prompt("Hi! What's your name?");
console.log(name);
alert("Hi" + name);

//var name_change = document.getElementById("page");
//name_change.textContent = name +" is making this webpage.";

//var note = document.createElement("p");
//note.textContent = "H Mom how are you?";
//document.body.appendChild(note);
 
//var child = document.getElementById("page");
//document.body.insertBefore(note, child);

//note.setAttribute("class", "extraNote");
//note.setAttribute("style", "foot-size: 25px");
//note.style.backgroundColor = "green";
//note.removeAttribute("style");

var name1 = prompt("what's your favorite movie?");
console.log(name1);
alert(name1+" is a good movie!");
var note = document.createElement("h1");
note.textContent = name1
document.body.appendChild(note);

function start(){
	var name = readLine("Enter movie: ");
	if(name == "Green Book"){
		println("Great movie");
	}	
} 

note.setAttribute("class", "extraNote");
note.setAttribute("style", "font-size: 25px; background-color: lightgray;");
note.style.backgroundColor = "white";
note.removeAttribute("sty;e");

var i = 1;
function changeColor2(event){
    if(document.body.style.backgroundColor !="red"){
        document.body.style.backgroundColor = "red";
    }
    i++;
    if(i == 5){
        clearInterval(intercalID);
        console.log("This function ran 5 times")
    }
}
