var text = document.getElementById("text");
var body = document.getElementById("body");
var nav = document.getElementById("navbar");
var divElement = document.getElementById("divcontent");
var togglebtn = document.getElementById("togglebtn");
togglebtn.addEventListener("click",toggle);
function toggle(){
	if (togglebtn.value=="default") 
	{
	//changes the background color to black
	body.style.backgroundColor="#1e272e";
	
	togglebtn.innerHTML = "Change To Default Theme";
	/// Changes the button color when clicked
	togglebtn.style.color="black";
	togglebtn.style.backgroundColor="white";
	/// changes the navbar color to green
	nav.style.color = "#0be881";
	//changes the text color to green
	text.style.color="#0be881";
	//changes the button value to hackertheme
	togglebtn.value="hackertheme";
	}
	else if (togglebtn.value == "hackertheme")
	{
	/// changes the body background to the transparent
	body.style.backgroundColor="transparent";
	/// changes the text to white
	text.style.color="#1e272e";
	//changes the button color 
	togglebtn.style.backgroundColor = "#1e272e";
	togglebtn.style.color = "#0be881";
	/// changes the button text
	togglebtn.innerHTML = "Change To Hacker Theme";
	// changes the background value to default
	togglebtn.value="default";
	// changes the navbar text to black
	nav.style.color = "#1e272e";


	}


}