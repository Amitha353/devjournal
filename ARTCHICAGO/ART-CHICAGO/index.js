let results = [];
let total_count = 0;

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
    console.log(results);
    const list_element = document.getElementById('list');
    const pagination_element = document.getElementById('pagination');
    let current_page = 1;
    let rows = 10;
    // createDisplay(results);
    for(let idx = current_page; idx <= total_count; idx++) {
        DisplayList(results, list_element, rows, idx);
    }
    setUpPagination(results, pagination_element, rows);
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

// function createDisplay(avatar_data) {
//     const list_element = document.getElementById('list');
//     const pagination_element = document.getElementById('pagination');
//     let current_page = 1;
//     let rows = ;
// }
artAvatar();
// const list_element = document.getElementById('list');
// const pagination_element = document.getElementById('pagination');
// let current_page = 1;
// let rows = 10;

function DisplayList(items, wrapper, rows, page) {
    wrapper.innerHTML = "";
    let end_idx = rows*page;
    let start_idx = end_idx - rows;
    let paginatedItems = results.slice(start_idx, end_idx);
    // const table = document.getElementsByClassName("table")[0];
    for(let i = 0; i < paginatedItems.length; i++) {
        let item = paginatedItems[i];
        wrapper.appendChild(createCard(item));

        // let item_element = document.createElement('div');
        // item_element.classList.add('item');
        // item_element.innerText = item.id;
        // wrapper.appendChild(item_element);
    }
}

function setUpPagination(items, wrapper, rows) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows);
    for(let i = 1; i < page_count + 1; i++) {
        let btn = PaginationButton(i, items);
        wrapper.appendChild(btn);
    }
}


function PaginationButton(page, items) {
    let button = document.createElement('button');
    button.innerText = page;
    if(current_page == page) {
        button.classList.add('active');
    }

    button.addEventListener('click', function() {
        current_page = page;
        DisplayList(items, list_element, rows, current_page);

        let current_btn = document.querySelector('.pagenumber button.active');

        button.classList.add('active');
    })
    return button;
}

function createCard(data) {
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
    return card;
}

// DisplayList(results, list_element, rows, current_page);
// setUpPagination(results, pagination_element, rows);
