function moreaboutme() {
  var x = document.getElementById('myDIV');
  var y = document.getElementById('welcome-section');
  if (x.style.display == "block") {
    x.style.display = "none";
    y.style.height = "90rem";

  } else {
    x.style.display = "block";
    y.style.height = "140rem";
  }
}


function darkmode() {

  if (document.body.style.backgroundColor == "white") {
    document.getElementById("darkmodebutton").childNodes[0].nodeValue =
      "Normal Mode";
    document.body.style.backgroundColor = "#000000cf";
    document.body.style.color = "white";
  }
  else {
    document.getElementById("darkmodebutton").childNodes[0].nodeValue =
      "Dark Mode";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000000cf";
  }
}


/*function navFunction() {
  var x = document.getElementById("nav-ele");
  if (x.className === "nav-list") {
    x.className += " responsive";
  } else {
    x.className = "nav-list";
  }
}*/
