document.addEventListener('DOMContentLoaded', function (_ev) {

    // Node references
    const navigationMenu = this.querySelector('#nav-menu');
    const navigationMenuToggle = this.querySelector('#nav-toggle');
    
    navigationMenuToggle.addEventListener('click', ev => {
        if (navigationMenu.classList.contains('invisible')) {
            navigationMenu.classList.toggle('invisible', false);
            navigationMenu.style.left = ev.clientX - navigationMenu.clientWidth + 'px';
            navigationMenu.style.top = ev.clientY + navigationMenuToggle.clientHeight + 'px';
            navigationMenuToggle.ariaExpanded = true;
        } else {
            navigationMenu.classList.toggle('invisible', true);
            navigationMenuToggle.ariaExpanded = false;
        }
    });
});
