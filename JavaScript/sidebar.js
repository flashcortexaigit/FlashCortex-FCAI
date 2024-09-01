document.addEventListener('DOMContentLoaded', function() {
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');
    const sidebar = document.getElementById('sidebar');
    const link2 = document.getElementById('link2');
    const subMenu = document.getElementById('subMenu');

    openSidebarBtn.addEventListener('click', function() {
        sidebar.style.height = '100%';
        sidebar.style.top = '0';
    });

    closeSidebarBtn.addEventListener('click', function() {
        sidebar.style.height = '0';
        sidebar.style.top = '-100%';
    });

    link2.addEventListener('click', function(event) {
        event.preventDefault();
        // Toggle sub-menu visibility
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            subMenu.style.display = 'block';
        }
    });

    // Handle back button press on mobile
    window.addEventListener('popstate', function(event) {
        sidebar.style.height = '0';
        sidebar.style.top = '-100%';
    });

    // Prevent accidental back navigation on sidebar open
    window.history.pushState(null, '', window.location.href);
});
