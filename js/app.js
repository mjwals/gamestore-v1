/*----------------------------
    Data - see data.js
----------------------------*/

let stores = getStores();
let filters = getFilters();

/*----------------------------
    element selectors
----------------------------*/

let noSearchResults = document.querySelector('.no-search-results');
let grid = document.querySelector('.grid');
let searchInput = document.querySelector('.store-search');
let searchInputClearSearch = document.querySelector('.search-controls__btn-clear');
let searchInputIcon = document.querySelector('.search-controls__icon');
let filteredResults = document.querySelector('.grid-filters__results-total');
let filterTags = document.querySelector('.filter-tags');
let tagsContainer = document.querySelector('.tags-container');
let categories = document.querySelector('.categories');
let disableBtn = document.querySelector('.disable-dark-mode');
let enableBtn = document.querySelector('.enable-dark-mode');
let darkMode = localStorage.getItem('darkMode');

/*----------------------------
    events
----------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    setAutoFocus(searchInput);
    filterStores(stores, filters);
    showCategories();
    darkModeChecker();

    document.querySelector('.store-search').addEventListener('input', function (event) {
        // capture and store what the user entered
        filters.searchText = event.target.value;
        showFilterTags();
        setSearchFieldIcon();
        filterStores(stores, filters);
    });

    document.querySelectorAll('.category').forEach(function (checkbox) {
        checkbox.addEventListener('change', function (event) {
            if (event.target.checked) {
                filters.selectedCategories.push(event.target.value.toLowerCase());
                showFilterTags();
            } else {
                let checkboxValueIndex = filters.selectedCategories.indexOf(event.target.value.toLowerCase());
                filters.selectedCategories.splice(checkboxValueIndex, 1);
                showFilterTags();
            }
            filterStores(stores, filters);
        });
    });

    disableBtn.addEventListener('click', function () {
        darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            // if the value IS NOT null
            disableDarkMode();
            disableBtn.classList.add('active');
            enableBtn.classList.remove('active');
        }
    });

    enableBtn.addEventListener('click', function () {
        // get the current value of darkMode from local storage
        darkMode = localStorage.getItem('darkMode');
        if (darkMode !== 'enabled') {
            // if the value IS null
            enableDarkMode();
            disableBtn.classList.remove('active');
            enableBtn.classList.add('active');
        }
    });

});