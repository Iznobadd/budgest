let toggleSidebar = document.getElementById('toggleSidebar');
let sidebar = document.getElementById('sidebar');
let listItems = document.querySelectorAll('#sidebar ul li span');

toggleSidebar.addEventListener('click', function () {
    sidebar.classList.toggle('w-20');
    sidebar.classList.toggle('w-64');

    toggleSidebar.classList.toggle('fa-chevron-left');
    toggleSidebar.classList.toggle('fa-chevron-right');

    listItems.forEach(item => {
        item.classList.toggle('hidden');
    });
});
