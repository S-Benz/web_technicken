window.addEventListener("load", positionFooter);
window.addEventListener("resize", positionFooter);

function positionFooter() {
    var footer = document.querySelector("footer");
    var main = document.querySelector("main");

    footer.style.bottom = "0px";

    var footerOffsetTop = footer.offsetTop;
    var mainOffsetTop = main.offsetTop + main.offsetHeight;

    var diff = mainOffsetTop - footerOffsetTop;

    if(diff > 0) {
        footer.style.bottom = "-" + diff + "px";
    }

    console.log("Main: " + mainOffsetTop + "\n Footer: " + footerOffsetTop)
}

