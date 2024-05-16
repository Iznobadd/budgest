let toggleSidebar = document.getElementById('toggleSidebar');
let sidebar = document.getElementById('sidebar');
let mainContent = document.getElementById('main');
let listSpanItems = document.querySelectorAll('#sidebar ul li span');
let listChevrons = document.querySelectorAll('#sidebar ul li a > i');
let listLinks = document.querySelectorAll('#sidebar ul li a');

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('md:w-20');
    sidebar.classList.toggle('w-0');
    sidebar.classList.toggle('w-64');

    mainContent.classList.toggle('md:ml-20');
    mainContent.classList.toggle('ml-0');
    mainContent.classList.toggle('ml-64')

    toggleSidebar.classList.toggle('fa-angles-left');
    toggleSidebar.classList.toggle('fa-angles-right');



    listSpanItems.forEach(item => {
        item.classList.toggle('hidden');
        item.classList.toggle('ml-2');
    });
    listLinks.forEach(item => {
        item.classList.toggle('justify-between');
        item.classList.toggle('justify-center');
    });
    listChevrons.forEach(item => {
        item.classList.toggle('hidden');
    });
});

function toggleDropdown(event) {
    event.preventDefault();
    const chevron = event.currentTarget.querySelector('.fa-chevron-right');
    const dropdownMenu = event.currentTarget.nextElementSibling;

    if (!dropdownMenu) {
        return;
    }

    chevron.classList.toggle('rotate-90');
    chevron.classList.toggle('rotate-0');

    if (dropdownMenu.classList.contains('hidden')) {
        dropdownMenu.classList.remove('hidden');
    } else {
        dropdownMenu.classList.add('hidden');
    }
}

window.toggleDropdown = toggleDropdown;
