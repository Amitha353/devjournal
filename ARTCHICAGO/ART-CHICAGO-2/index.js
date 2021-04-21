var list = new Array();
var pageList = new Array();
var currentPage = 1;
var numberPerPage = 10;
var numberOfPages = 1;
var results = [];
var total_count = 0;

async function artAvatar() {
    var pageCnt = 1;
    let found = false;
    while(!found) {
        let artUrl = 'https://api.artic.edu/api/v1/artworks/search?q=avatar&page=';
        artUrl += pageCnt;
        
        const response = await fetch(artUrl);
        const data = await response.json();
        if(data.pagination.total_pages <= pageCnt) {
            total_count = data.pagination.total_pages;
            found = true;
        }
        data.data.forEach(function(item) {
            var temp = {};
            temp.page_np = pageCnt;
            temp.id = item.id;
            temp.title = item.title;
            let details = [];
            extractDetails(item, details);
            temp.details = details;
            results.push(temp);
        });
        pageCnt += 1;
    }
}

function makeList() {
    list = results;
    numberOfPages = getNumberOfPages();
}

function getNumberOfPages() {
    return Math.ceil(list.length / numberPerPage);
}

function nextPage() {
    currentPage += 1;
    loadList();
}

function previousPage() {
    currentPage -= 1;
    loadList();
}

function firstPage() {
    currentPage = 1;
    loadList();
}

function lastPage() {
    currentPage = numberOfPages;
    loadList();
}

function loadList() {
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;

    pageList = list.slice(begin, end);
    drawList();
    check();
}
    
function drawList() {
    document.getElementById("list").innerHTML = "";
    for (r = 0; r < pageList.length; r++) {
        let data = pageList[r];

        console.log(data);
        const card = document.createElement('div');
        card.className = "card";
        const avatar_id = document.createElement('div');
        avatar_id.innerText = data.id;
        const avatar_title = document.createElement('div');
        avatar_title.innerText = data.title;
        let prxy = data.details[0];
        card.append(avatar_id);
        card.append(avatar_title);
        if(prxy != undefined) {
            const avatar_cid = document.createElement('div');
            avatar_cid.innerText = prxy.c_id;
            const avatar_ctitle = document.createElement('div');
            avatar_ctitle.innerText = prxy.c_title[0];
            const avatar_ttitle = document.createElement('div');
            avatar_ttitle.innerText = prxy.t_title[0];
            card.append(avatar_cid);
            card.append(avatar_ctitle);
            card.append(avatar_ttitle);
        }
        document.getElementById("list").appendChild(card);
    }
}

function check() {
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

async function extractDetails(item, details) {
    let api_link = item.api_link;
    let response = await fetch(api_link);
    let data = await response.json();
    var c_id = data.data.classification_id;
    var c_title = data.data.classification_titles; 
    var t_title = data.data.term_titles;
    var temp = {c_id: c_id, c_title : c_title, t_title: t_title};
    details.push(temp);
    return details
}

function load() {
    artAvatar();
    makeList();
    loadList();
}
    
window.onload = load;
