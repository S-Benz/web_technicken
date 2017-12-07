window.addEventListener("load", positionFooter);
window.addEventListener("resize", positionFooter);

function positionFooter() {
    var footer = document.querySelector("footer");
    var main = document.querySelector("main");

    footer.style.bottom = "0px";

    var footerOffsetTop = footer.offsetTop;
    var mainOffsetTop = main.offsetTop + main.offsetHeight;

    var diff = mainOffsetTop - footerOffsetTop;

    console.log(mainOffsetTop);

    if(diff > 0) {
        footer.style.bottom = "-" + diff + "px";
    }
}

