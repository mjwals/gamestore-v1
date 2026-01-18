// This function contains our stores data
let getStores = function () {
    // store the string version of our data in a variable
    let JSONGames = localStorage.getItem('games');

    // by default if localStorage can't find any data, NULL is returned
    // here we check whether our games data exists, if it does, return it else return an empty array
    // JSON.parse converts a string into in this example an array of objects
    if (JSONGames !== null) {
        return JSON.parse(JSONGames);
    } else {
        return [];
    }
}

// This function stores the values created by the user e.g when a user starts typing the value is stored here
let getFilters = function () {
    return {
        searchText: '',
        selectedCategories: []
    }
}

// This function sets focus on any input element
let setAutoFocus = function (element) {
    element.focus();
}

// This function replaces the search icon with a clear search button when the user types in a value
let setSearchFieldIcon = function () {
    if (filters.searchText.length > 0) {
        searchInputClearSearch.classList.remove('hide');
        searchInputIcon.classList.add('hide');
        searchInputClearSearch.addEventListener('click', clearSearchField);
    } else {
        searchInputClearSearch.classList.add('hide');
        searchInputIcon.classList.remove('hide');
        searchInputClearSearch.removeEventListener('click', clearSearchField);
    }
}

// This function looks for a tag that matches the user search value and removes it from the DOM
let clearSearchField = function () {
    let tags = document.querySelectorAll('.tags__tag');
    tags.forEach(function (tag) {
        if (tag.textContent === `"${filters.searchText}"`) {
            resetSearchField();
            removeTag(tag);
            filterStores(stores, filters);
            preventRightClick();
        }
    });
}

// This function clears any existing values and styles for the search field only
let resetSearchField = function () {
    filters.searchText = '';
    searchInput.value = '';
    searchInputClearSearch.classList.add('hide');
    searchInputIcon.classList.remove('hide');
}

// This function allows us to filter the stores data
let filterStores = function (stores, filters) {
    // show total number of stores inside search field as a placeholder
    searchInput.placeholder = `Search ${stores.length} stores for...`;
    // filter stores by name and category
    let filteredStores = stores.filter(function (store) {
        let storeName = store.name.toLowerCase().includes(filters.searchText.toLowerCase());
        let storeCategory = filters.selectedCategories.includes(store.category.name.toLowerCase()) || filters.selectedCategories.length === 0;
        return storeName && storeCategory;
    });
    // return total number of filtered results
    updateResultsTotal(filteredStores);
    // sort filtered stores a-z
    sortStores(filteredStores);
    // show filtered stores otherwise show error message
    showFilteredStores(filteredStores);
}

// This function returns the total number of matched stores
let updateResultsTotal = function (filteredStores) {
    if(filters.searchText.length > 0) {
        filteredResults.textContent = `${filteredStores.length} matching results`;
    } else {
        filteredResults.textContent = `All ${filteredStores.length} Amazing Games`;
        searchInput.placeholder = `Search ${filteredStores.length} games for...`;
    }
}

// This function sorts the filtered stores alphabetically
let sortStores = function(filteredStores) {
    filteredStores.sort(function (a, b) {
        if (a.name > b.name) {
            return 1;
        } else if (b.name > a.name) {
            return -1;
        } else {
            return 0;
        }
    });
}

// This function checks whether the filtered results return a match (a store)
let showFilteredStores = function (filteredStores) {
    if (filteredStores.length === 0) {
        // build no results error message
        grid.classList.add('hide');
        noSearchResults.innerHTML = '';
        noSearchResults.innerHTML = buildNoSearchResultsMsg();
    } else {
        // build filtered store grid
        grid.classList.remove('hide');
        noSearchResults.innerHTML = '';
        buildStoresGrid(filteredStores);
    }
}

// This function builds the no results found layout
let buildNoSearchResultsMsg = function () {
    return `
        <p><i class="fas fa-poop"></i></p>
        <h1>Nothing found!</h1>
        <h4>Sorry, we couldn't find any games related to <strong>"${filters.searchText}"</strong>.</h4>
    `
}

// This function builds the list of stores as an unordered list
let buildStoresGrid = function (filteredStores) {
    grid.innerHTML = '';
    filteredStores.forEach(function (filteredStore) {
        let li = document.createElement('li');
        li.setAttribute('class', 'grid__item');
        li.innerHTML = buildStore(filteredStore);
        grid.appendChild(li);
    });
}

// The function builds the individal store (card/tile) layout
let buildStore = function(filteredStore) {
    let cardDescriptionText = trimCardDescription(filteredStore);

    return `
    <div class="card">
        <div class="card__img-wrapper">
            <div class="card__controls">
                <a href="./game.html#${filteredStore.id}" class="card__controls__button game-details" title="View Details">
                    <i class="fas fa-eye"></i>
                </a>
                <a class="card__controls__button" title="Add To Basket">
                    <i class="fas fa-shopping-basket"></i>
                </a>
            </div>
            <div class="card__img" style="background-image: url('${filteredStore.thumbnail}')"></div>
        </div>
        <div class="card__desc">
            <a href="./game.html#${filteredStore.id}">${cardDescriptionText}</a>
        </div>
        <div class="card__meta-data">
            by
            <a href="#"><strong>${filteredStore.developer}</strong></a>
            in
            <a href="#"><strong>${filteredStore.category.name}</strong></a>
        </div>
        <div class="card__price">
            From&nbsp;<figure>£${filteredStore.price}</figure>&nbsp;/ month
        </div>
    </div>
    `
}

// This function trims any long descriptions and replaces the characters with dots
let trimCardDescription = function (filteredStore) {
    let descText = filteredStore.name;
    let descLimiter = 24; // set number of characters of our description text
    let descDots = '...';
    let trimmedDescText = null;
    let newDescText = null;

    // if the string is less than or equal to the descLimiter value (24 chars) return the original string value
    if (descText.length -1 <= descLimiter) {
        return descText;
    } else {
        // substring returns a NEW string (doesn't change original value)
        // here we start from the first letter up to the value of descLimiter and place the new string inside a variable
        // we then join the dots string to this variable using concat() method
        trimmedDescText = descText.substring(0, descLimiter);
        newDescText = trimmedDescText.concat(descDots);
        return newDescText;
    }
}

// This function controls whether or not to display the search tags
let showFilterTags = function () {
    resetFilterTags();
    if (filters.searchText.length > 0 && !filters.selectedCategories.length > 0) {
        // search NOT empty categories UNCHECKED
        showSearchText();
        getAllFilterTags();
    } else if (!filters.searchText.length > 0 && filters.selectedCategories.length > 0) {
        // search empty categories CHECKED
        showSelectedCategories();
        getAllFilterTags();
    } else if (filters.searchText.length > 0 && filters.selectedCategories.length > 0) {
        // search NOT empty AND categories CHECKED
        showSearchText();
        showSelectedCategories();
        getAllFilterTags();
    }
    else {
        tagsContainer.classList.remove('tags');
        tagsContainer.innerHTML = '';
    }
}

// This function resets the tagsContainer to prevent the LI's from endlessly appending to the UL 
let resetFilterTags = function () {
    tagsContainer.innerHTML = '';
    tagsContainer.classList.add('tags');
}

// This function APPENDS the user search value (with quotes) inside the tagContainer UL
let showSearchText = function () {
    tagsContainer.innerHTML += buildTags(`"${filters.searchText}"`);
}

// This function APPENDS the user category checkbox value inside the tagContainer UL
let showSelectedCategories = function () {
    filters.selectedCategories.forEach(function (category) {
        tagsContainer.innerHTML += buildTags(category);
    });
}

// This function builds the individual tag HTML structure
let buildTags = function (value) {
    return `
    <li class="tags__tag-item">
        <a href="#" class="tags__tag" title="Remove">${value}<i class="fas fa-times-circle"></i></a>
    </li>`
}

// This function creates a list of categorys from the stores object by targeting each store.category.name property
let showCategories = function () {
    let storeCategories = [];
    stores.forEach(function (store) {
        storeCategories.push(store.category.name);
    });
    // Set() method removes duplicate value from an array and returns an object
    // Array.from converts an object into an array
    storeCategories = Array.from(new Set(storeCategories));
    // sort categories a-z
    sortCategories(storeCategories);
    // loop through array and build the LI elements
    storeCategories.forEach(function (category) {
        categories.innerHTML += buildCategories(category);
    });
}

// This functions sorts the categories alphabetically
let sortCategories = function (storeCategories) {
    storeCategories.sort(function (a, b) {
        if (a > b) {
            return 1;
        } else if (b > a) {
            return -1;
        } else {
            return 0;
        }
    });
}

// This function builds the individual category HTML structure
let buildCategories = function (category) {
    return `
    <li>
        <label class="checkbox-container">
            <input type="checkbox" value="${category.toLowerCase()}" class="category">
            <span class="checkbox"></span>
            <span class="checkbox-label">${category}</span>
        </label>
    </li>`
}

// This function gets all classes called 'tags__tag' and adds a click event listener to each one
let getAllFilterTags = function () {
    let tags = document.querySelectorAll('.tags__tag');
    tags.forEach(function (tag) {
        tag.addEventListener('click', function (event) {
            // if the tag is the user search value (with quotes) or a category
            if (tag.textContent === `"${filters.searchText}"`) {
                removeSearchTag(event);
            } else {
                removeCategoryTag(event);
            }
            filterStores(stores, filters);
            preventRightClick();
        });
    });
}

// This function removes only the user search tag
let removeSearchTag = function (event) {
    resetSearchField();
    removeTag(event.target);
}

// This function unchecks the category checkbox the user selected and removes its associated tag
let removeCategoryTag = function (event) {
    deleteSelectedCategoryTagValue(event.target.textContent.toLowerCase());
    removeTag(event.target);
}

// This function removes a tag from the DOM
let removeTag = function (targetTag) {
    targetTag.parentElement.remove();
    if (filters.searchText.length === 0 && filters.selectedCategories.length === 0) {
        tagsContainer.classList.remove('tags');
    }
}

// This function searches the filters.selectedCategories array for a value that matches the selected (clicked) tag text and deletes it
let deleteSelectedCategoryTagValue = function (targetTag) {
    let checkboxValueIndex = filters.selectedCategories.indexOf(targetTag);
    filters.selectedCategories.splice(checkboxValueIndex, 1);
    uncheckCheckbox(targetTag);
}

// This function unchecks the checkbox of the selected tag
let uncheckCheckbox = function (targetTag) {
    document.querySelectorAll('.category').forEach(function (checkbox) {
        if (checkbox.value === targetTag) {
            checkbox.checked = false;
        }
    });
}

// This function checks whether the user has darkmode enabled
let darkModeChecker = function () {
    // on first load (a brand new session) darkMode value in localStorage will be null as the data doesn't exist yet
    // the if statement below checks whether the user previously turned on darkmode from another session
    // if true, darkmode will be enabled on page load, otherwise it's simply skipped
    if (darkMode === 'enabled') {
        enableDarkMode();
        disableBtn.classList.remove('active');
        enableBtn.classList.add('active');
    }
}

// This function enables darkmode
let enableDarkMode = function () {
    // add class to the body tag
    document.body.classList.add('darkmode');
    // update localStorage with the new value
    localStorage.setItem('darkMode', 'enabled');
}

// This function disables darkmode
let disableDarkMode = function () {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}