var current = 0;
var total = 4;


var nextBtn = document.getElementById("next");

nextBtn.addEventListener("click", function () {

    current++;

    if (current >= total) current = 0;

    console.log(current);

    var images = document.getElementsByClassName("slide");
    for (var i = 0; i < total; i++) {
        images[i].style.display = "none";
    }
    images[current].style.display = "block";
});



previousBtn.addEventListener("click", function () {

    current--;

    if (current < 0) current = total - 1;

    console.log(current);
  
    var images = document.getElementsByClassName("slide");
    for (var i = 0; i < total; i++) {
        images[i].style.display = "none";
    }
    images[current].style.display = "block";

})