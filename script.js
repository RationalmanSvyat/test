var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var main = document.getElementById("main");
var myList = document.getElementById("list");
var ul = document.getElementsByTagName("ul");
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0];
var close = document.querySelector(".close");


console.log(btn1);
console.log(btn2);
console.log(ul);
console.log(story);


function addItem(){
	var newLi = document.createElement("li");
	newLi.innerHTML = "Новая задача!";
	newLi.className = "item";
	myList.appendChild(newLi);
}
function delItem(){
	myList.removeChild(story[0]);
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);