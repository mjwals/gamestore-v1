/*----------------------------
    element selectors
----------------------------*/

let disableBtn = document.querySelector('.disable-dark-mode');
let enableBtn = document.querySelector('.enable-dark-mode');
let darkMode = localStorage.getItem('darkMode');
let locationHash = location.hash.substring(1);
let getGamesData = getStores();
let getGame = getGamesData.find(function (game) {
    return game.id === locationHash;
});
let gameBanner = document.querySelector('.banner');
let gameName = document.querySelector('.product-desc__name');
let gameCategory = document.querySelector('.product-desc__category');
let gamePrice = document.querySelector('.product-desc__price figure');
let gameSummary = document.querySelector('.summary');
let gameReleaseDate = document.querySelector('.release-date');
let gameDeveloper = document.querySelector('.developer');
let gameDeveloperIcon = document.querySelector('.product-desc__category-icon');
let gameRating = document.querySelector('.ratings');


/*----------------------------
    functions
----------------------------*/

let buildSummary = function (getGame) {
    gameSummary.innerHTML = '';

    getGame.summary.forEach(function (summaryItem) {
        let p = document.createElement('p');
        let img = document.createElement('img');

        p.textContent = summaryItem.txt;
        img.setAttribute('src', `${summaryItem.img}`);
        img.setAttribute('class', 'gallery-img');

        gameSummary.appendChild(p);
        gameSummary.appendChild(img);
    });
}

let buildRating = function (ratings) {
    gameRating.innerHTML = '';

    ratings.forEach(function (rating) {
        let div = document.createElement('div');
        div.setAttribute('class', 'ratings__rating');
        div.setAttribute('style', `background-image: url('${rating}')`);
        gameRating.appendChild(div);
    });
}

/*----------------------------
    events
----------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    darkModeChecker();

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

    gameBanner.setAttribute('style', `background-image: url('${getGame.banner}')`);
    gameName.textContent = getGame.name;
    gameCategory.textContent = getGame.category.name;
    gamePrice.textContent = `£${getGame.price}`;
    gameSummary = buildSummary(getGame);
    gameReleaseDate.textContent = getGame.releaseDate;
    gameDeveloper.textContent = getGame.developer;
    gameRating = buildRating(getGame.rating);
    gameDeveloperIcon.innerHTML = getGame.developerIcon;
});