class PageManager {
    _pages;
    activePage;
    constructor() {
        this._pages = Array.from(document.getElementsByClassName("page"));
        this._activePage = document.getElementsByClassName("page active")[0];
        this._addListeners();
    }

    activate(page) {
        if(page.classList.contains("active")) return;

        this._activePage.classList.remove("active");
        page.classList.add("active");
        this._activePage = page;
    }

    _addListeners() {
        this._pages.forEach(page => {
            page.addEventListener("click", e => {this._clickHandler(e)})
        })
    }

    _clickHandler(e) {
        if(e.target.classList.contains("page") === false) return;
        this.activate(e.target);
    }
}

const pageManager = new PageManager();