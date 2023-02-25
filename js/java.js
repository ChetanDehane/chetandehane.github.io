window.onload = function() {
  window.scrollTo(0, 0);
}


function darkmode() {

  var link1 = document.querySelectorAll(".links")[0];
  var link2 = document.querySelectorAll(".links")[1];

  if (document.body.style.backgroundColor == "white") {
    document.getElementById("darkmodebutton").childNodes[0].nodeValue =
      "Normal Mode";
    document.body.style.backgroundColor = "#000000cf";
    document.body.style.color = "white";

    
    if(link1 || link2) {
      link1.style.color = "#ddd";
      link1.style.textDecoration.none;

      link2.style.color = "#ddd";
      link2.style.textDecoration.none;
    }
    
  }
  else {
    document.getElementById("darkmodebutton").childNodes[0].nodeValue =
      "Dark Mode";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#000000cf";

    if(link1 || link2) {
      link1.style.color = "blue";
      link1.style.textDecoration.initial;

      link2.style.color = "blue";
      link2.style.textDecoration.initial;
    }

  }
}
