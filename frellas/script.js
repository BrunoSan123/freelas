var paginatedView = document.querySelector(".paginated-view");

var lastPage = document.querySelector(".page.A4");

var lastEl = document.querySelector(".paginated-view .page .text");

function onBtnAddElement(type) {

    var template = document.querySelector("#templates div." + type);

    lastEl = template.cloneNode(true);

    lastPage.appendChild(lastEl);

    if ((lastEl.offsetTop + lastEl.clientHeight) > (lastPage.offsetTop + lastPage.clientHeight)) {

        lastPage = document.createElement("div");
        lastPage.classList.add("page");
        lastPage.classList.add("A4");
        lastPage.appendChild(lastEl);

        paginatedView.appendChild(lastPage);

        var pageCountEl = document.createElement("span");
        pageCountEl.classList.add("page-count")
        pageCountEl.innerText = document.querySelectorAll(".page.A4").length;

        lastPage.prepend(pageCountEl);


    }

    lastEl.scrollIntoView({behavior: "smooth", block: "center"});

}