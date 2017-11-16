window.addEventListener('resize', setSidebar);

//Display Sidebar at certain screen width
function setSidebar(){
    var sideBar = document.querySelector('[sidebarFrame');

    if(screen.width >= 768){
        sideBar.style.display = 'block';
    }
}

//Trigger sideBar when clicking on parent button
function triggerSidebarFrame(ele) {
    var screenWidth = screen.width;
    var maxWidth = 768;

    if (screenWidth < maxWidth) {
        var sidebarFrame = document.querySelector(ele);

        if (sidebarFrame.style.display === 'none') {
            sidebarFrame.style.display = 'block';
        } else {
            sidebarFrame.style.display = 'none';
        }
    }
}