window.addEventListener("load", positionFooter);
window.addEventListener("resize", positionFooter);

function positionFooter() {
    var footer = document.querySelector("footer");
    var main = document.querySelector("main");

    //Reset footer bottom attr. to 0px
    footer.style.bottom = "0px";

    //Get topoffset of footer and main element
    var footerOffsetTop = footer.offsetTop;
    var mainOffsetTop = main.offsetTop + main.offsetHeight;

    //Get topoffset difference between footer and main
    var diff = mainOffsetTop - footerOffsetTop;

    //If the footer laps over the main element reposition the footer
    if(diff > 0) {
        footer.style.bottom = "-" + diff + "px";
    }
}

