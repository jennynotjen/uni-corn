function generate(x) {
  if (x == 1){
    var x = document.getElementById("tracker").innerHTML;
    if (x == "20") {
      return;
    }

    var img = document.createElement("img");

    img.src = "img/unicorn.png";
    img.id = "unicorn"
    var src = document.getElementById("frames");

    src.appendChild(img);

    document.getElementById("tracker").innerHTML = parseInt(x)+1;
    return;
  }
  else {
    var src = document.getElementById("frames");
    src.innerHTML = "";
    document.getElementById("tracker").innerHTML = "0"
    return;
  }
};
