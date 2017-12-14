window.addEventListener('resize', setSidebar);

//Display Sidebar at certain screen width
function setSidebar() {
    var sideBar = document.getElementById('sidebarFrame');


    //Display sidebar next to main content if the screensize is big enough
    if (screen.width >= 768) {
        sideBar.style.display = 'block';
    } else {
        if(getComputedStyle(sideBar).display  === 'block') {
            sideBar.style.display = 'none';
        }
    }
}

//Fadein the sidebar on a mobile view when the burger button is clicked
function triggerSidebarFrame(ele) {
    var screenWidth = screen.width;
    var maxWidth = 768;

    if (screenWidth < maxWidth) {
        var sidebarFrame = document.getElementById(ele);

        if (getComputedStyle(sidebarFrame).display === 'none') {
            sidebarFrame.style.display = 'block';
        } else {
            sidebarFrame.style.display = 'none';
        }
    }
}