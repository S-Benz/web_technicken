document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', stickyNav);
    window.addEventListener('resize', stickyNav);

    function stickyNav() {
        var nav = document.getElementById('navInner');
        var contentText = document.getElementById('contentText');
        var content = document.getElementById('content');
        var sidebar = document.getElementById('contentSidebar');
        var headerHeight = document.querySelector('header').offsetHeight;
        var navHeight = nav.offsetHeight;
        var stickyTriggerHeight = headerHeight + navHeight;


        if(window.pageYOffset >= stickyTriggerHeight) {
            nav.style.position = 'fixed';
            nav.style.top = 0;
            nav.style.width = "100%";
            sidebar.style.position = 'fixed';
            contentText.style.marginLeft = 0;
            if(window.outerWidth  < 768) {
                sidebar.style.top = "15px";
            } else {
                sidebar.style.top = navHeight + "px";
                contentText.style.marginLeft = "30%";
                if(window.outerWidth >= 1200) {
                    nav.style.width = "1200px";
                    sidebar.style.width = (content.offsetWidth * 0.3) + "px";
                }
            }

        }
        if(window.pageYOffset < stickyTriggerHeight) {
            nav.style.position = 'relative';
            if(window.outerWidth  < 768) {
                sidebar.style.position = 'absolute';
                sidebar.style.top = "-55px";
            } else {
                sidebar.style.position = 'relative';
                sidebar.style.top = 0;
                contentText.style.marginLeft = 0;
                nav.style.width = "100%";
            }
        }
    }
});