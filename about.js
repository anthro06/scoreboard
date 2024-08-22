/* Toggle between adding and removing the "responsive" class to topnav and adding line breaks to the form when the user clicks on the icon */
function toggleNav() {
    let x = document.getElementById('nav');
    let lineBreak = document.getElementsByClassName('spanBreak');
    if (x.className === "top-nav font-nav") {
        x.className += " responsive";
        for (let i = 0; i < lineBreak.length; i++) {
            lineBreak[i].innerHTML = "<br>";
        }
    } else {
        x.className = "top-nav font-nav";
        for (let i = 0; i < lineBreak.length; i++) {
            lineBreak[i].innerHTML = "";
        }
    }
  }