let bookshelf = ["Fahrenheit 451", "Pillars of the Earth", "Lonesome Dove","The Road"];
let input = document.getElementById("input");
let output = document.getElementById("output");
let html = ''
onload=updateBookshelf()

function addBookFront(){
    if (input.value!==''){
        bookshelf.unshift(input.value.trim());
        updateBookshelf();
    }
}

function addBookBack(){
    if (input.value!==''){
        bookshelf.push(input.value.trim());
        updateBookshelf();
    }
}

function deleteBookFront(){
    if (bookshelf.length>0){
        bookshelf.shift();
        updateBookshelf();
    }
}

function deleteBookBack(){
    if (bookshelf.length>0){
        bookshelf.pop();
        updateBookshelf();
    }
}

function updateBookshelf(){
    if (bookshelf.length>0){
        html+=`<h3>Front of Shelf</h4>`;
        for (i=0;i<bookshelf.length;i++){
        html+=`
        <li>${bookshelf[i]}</li>
        `
        }
        html+=`<h3>Back of Shelf</h4>`;
    }
    else if(bookshelf.length<=0){
        html+=`<h3>Bookshelf is Empty!</h3>`
    }
    output.innerHTML = html;
    html=''
}
