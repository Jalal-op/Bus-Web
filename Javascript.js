const form = document.getElementById("form");
const name = document.getElementById("Firstname");
const lname = document.getElementById("lastname");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const check = document.getElementById("Confirm");

form.addEventListener("submit", (e) =>{
	e.preventDefault();

	//create function
	checkInput();
});

function checkInput(){
	//check values
	const nameValue = name.value.trim();
	const lnameValue = lname.value.trim();
	const emailValue = email.value.trim();
	const PasswordValue = password.value.trim();
	const checkValue = check.value.trim();

	if (nameValue === "") {
		//show error
		//show error class

		setErrorFor(name , "First Name cannot be blank!");
	}
	else{
		//show success class

		setSuccessFor(name);
	}


	if (lnameValue === "") {
		//show error
		// show error class
		
		setErrorFor(lname , "Last Name cannot be blank!");
	}
	else{
		setSuccessFor(lname);
	}

	//check password

	if (checkValue === "") {
		setErrorFor(check , "CheckPassword cannot be blank!");
	}

	else if(checkValue !== PasswordValue){
		setErrorFor(check , "Password cannot be Match!");
	}

	else{
		setSuccessFor(check);
	}

	//Password

	if (PasswordValue === "") {
		setErrorFor(password , "Password cannot be blank!");
	}

	else{
		setSuccessFor(password);
	}


	//Email

	if (emailValue === "") {
		setErrorFor(email , "Email cannot be blank!");
	}

	else{
		setSuccessFor(email);
	}
}

function setErrorFor(input , message){
	const formControl = input.parentElement; //.form-control
	const small = formControl.querySelector("small");

	//show message
	small.innerText = message;

	//add error class
	formControl.className = "form-control error";
}

function setSuccessFor(input){
	const formControl = input.parentElement; //.form-control
	formControl.className = "form-control success";
}

// optional
		$('#blogCarousel').carousel({
				interval: 5000
		});


