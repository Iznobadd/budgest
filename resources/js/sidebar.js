let toggleSidebar = document.getElementById('toggleSidebar');
let sidebar = document.getElementById('sidebar');
let listItems = document.querySelectorAll('#sidebar ul li span');
let listChevrons = document.querySelectorAll('#sidebar ul li a > i');
let listLinks = document.querySelectorAll('#sidebar ul li a');

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('md:w-20');
    sidebar.classList.toggle('w-0');
    sidebar.classList.toggle('w-64');

    toggleSidebar.classList.toggle('fa-chevron-left');
    toggleSidebar.classList.toggle('fa-chevron-right');

    listItems.forEach(item => {
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



