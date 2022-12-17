button=document.createElement("button");
button.setAttribute("onclick","random()");
button.innerText="run";
document.body.appendChild(button);

function random() 
{
	var number = Math.ceil(Math.random()*10);
	document.write(number);
}
 