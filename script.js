const inputField = document.getElementById('input-field');
const addButton = document.getElementById('add-button');
const list = document.querySelector('ul');
const listItems = document.getElementsByTagName('li');
var buttonList = document.getElementsByClassName("toggleButton");

function createListElement() {
	var newListElement = document.createElement("li");
	var newButton = document.createElement("button");
	newButton.className = "toggleButton";
	newButton.appendChild(document.createTextNode("X"));
	newListElement.appendChild(newButton);
	newListElement.appendChild(document.createTextNode(" " + inputField.value));
	list.appendChild(newListElement);
    inputField.value = "";
    console.log('wtf');
	itemEvents();
}

function toggleItem() {
	this.classList.toggle("done");
}

function deleteItem() {
	this.parentElement.remove();
}

function itemEvents() {
	for(var i = 0; i < listItems.length; i++) {
		listItems[i].addEventListener("click", toggleItem);
	}
	for(var i = 0; i < buttonList.length; i++) {
		buttonList[i].addEventListener("click", deleteItem);
	}
}

console.log(inputField);
console.log(addButton);
console.log(list);
console.log(listItems);

addButton.addEventListener("click", createListElement);
itemEvents();