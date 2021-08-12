console.log("hello");
let key = "notes";
let addNote = document.getElementById('addNote');
let clearNotes = document.getElementById('clearNotes');
const date = new Date();

displayNotes();

addNote.addEventListener('click', function (e) {
    let txt = document.getElementById('addTxt');
    if (txt.value.trim() == "") {
        alert('Please Add Note first');
        return;
    }

    let notes = (localStorage.getItem(key));
    if (notes == null) {
        notesObj = [];
        //localStorage.setItem(key, notesObj);
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(txt.value);
    localStorage.setItem(key, JSON.stringify(notesObj));

    txt.value = "";

    displayNotes();
});

function displayNotes() {
    let notes = localStorage.getItem(key);
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
        <div class="card bg-dark text-light my-2 mx-2" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title fw-lighter">${date.toDateString()}</h5>
                <p class="card-text">${element}</p>
            </div>
            <div class="card-footer">
                <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-light">Delete</button>
                <p class="text-muted align-right my-1">${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</p>
            </div>
        </div>
        `
    });
    let notesHere = document.getElementById('notesHere');
    if(notesObj.length != 0){
        notesHere.innerHTML = html;
    }
    else{
        notesHere.innerHTML = `Nothing to show here. Create your note by clicking "Add note" first`;
    }
};

function deleteNote(index){
    let notes = localStorage.getItem(key);
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem(key,JSON.stringify(notesObj));
    displayNotes();
};

clearNotes.addEventListener('click',()=>{
    localStorage.removeItem(key);
    displayNotes();
})