function moreaboutme() {
  var x = document.getElementById('myDIV');
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function darkmode() {

if(document.body.style.backgroundColor == "white")
{
  document.getElementById("darkmodebutton").childNodes[0].nodeValue=
   "Normal Mode";
  document.body.style.backgroundColor = "#000000cf";
  document.body.style.color = "white";
  }
  else
  {
  	document.getElementById("darkmodebutton").childNodes[0].nodeValue=
   "Dark Mode";
  document.body.style.backgroundColor = "white";
  document.body.style.color = "#000000cf";
  }
}
