function validation() {
	var form = document.getElementById("form");
	var email = document.getElementById("email").value;
	var text = document.getElementById("text");
	var error = document.getElementsByClassName("error");
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

	if (email.match(pattern)) {
		form.classList.add("valid");
		form.classList.remove("invalid");
		text.innerHTML = "Your Email Address is Valid.";
		text.style.color = "hsl(223, 87%, 63%)";
	} else {
		form.classList.remove("valid");
		form.classList.add("invalid");
		text.innerHTML = "Please provide a valid email address";
		text.style.fontSize = "12px";
		text.style.color = "hsl(354, 100%, 66%)";
		document.getElementById("email").style.border = "1px solid #ff5263";
	}
}