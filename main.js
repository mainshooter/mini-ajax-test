function deepLink() {
  // Hasing
  var link = window.location.hash;
  if (link == "") {
    // Load home
    loadItem('home.html' ,"content");
  }
  else {
    // Load anything else
    link = link.replace("#", "");
    link += ".html";
    loadItem(link ,"content");
  }
}
function loadItem(fileLocation, id) {
  // This function performs a AJAX REQUEST
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      callBack(this.responseText, $(id));
    }
  };
  xhttp.open("GET", fileLocation, false);
  xhttp.send();
}
function callBack(content, id) {
  // Display a result from a ajax request
  id.innerHTML = content;
}
function $(element) {
  // Select a element
  element = document.getElementById(element);
  return(element);
}
