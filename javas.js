function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
/*popup*/

function toggleDivs() {
    var $inner = $("#inner");

    // See which <divs> should be animated in/out.
    if ($inner.position().left == 0) {
        $inner.animate({
            left: "-400px"
        });
    }
    else {
        $inner.animate({
            left: "0px"
        });
    }
}

$("button").bind("click", function() {
    toggleDivs();
});

/*slide*/

