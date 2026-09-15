let button = document.querySelector("#button")
let text = document.querySelector("#text")
let list = document.querySelector("#list")

button.addEventListener("click", function () {
	if (text.value === "") {
		return
	}

	let item = document.createElement("li")
	item.innerHTML = text.value
	list.appendChild(item)

	text.value = ""
})