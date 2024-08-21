document.addEventListener("DOMContentLoaded", function () {
	const formElement = document.getElementById("form");
	const currentTextElement = document.getElementById("text-input");
	const itemListElement = document.getElementById("item-list");
	const warning = document.getElementById("warning");
	let counter = 0;

	formElement.addEventListener("submit", function (event) {
		event.preventDefault();
		if (currentTextElement.value !== "") {
			const li = document.createElement("li");
			li.classList.add("list-item");
			li.id = counter++;
			li.innerText = currentTextElement.value;
			li.addEventListener("click", function () {
				this.remove();
			});
			itemListElement.appendChild(li);
			console.log(li.id);
			currentTextElement.value = "";
			warning.innerText = "";
		} else {
			warning.innerText = "Write something!";
			console.log("Write something");
		}
	});
});
