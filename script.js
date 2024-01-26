document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('toggleBtn');
    const sidebar = document.getElementById('container__header--sidebar');

    toggleBtn.addEventListener('click', function () {
        if (sidebar.style.right === '0px') {
            sidebar.style.right = '-100em';
            contenido.style.marginRight = '0';
        } else {
            sidebar.style.right = '0px';
            contenido.style.marginRight = '100em';
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.getElementById('closeBtn');
    const sidebar = document.getElementById('container__header--sidebar');

    closeBtn.addEventListener('click', function () {
        if (sidebar.style.right === '0px') {
            sidebar.style.right = '-100em';
            contenido.style.marginRight = '0';
        } else {
            sidebar.style.right = '0px';
            contenido.style.marginRight = '100em';
        }
    });
});
