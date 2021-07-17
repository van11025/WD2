class jEntry {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.date = Date;
        this.id = 'btn' + Date.now();
    }
};



let mainPage = document.querySelector("#main");
let entryList = document.querySelector("#entryList");
let editPage = document.querySelector("#editEntry");
let newPage = document.querySelector("#newEntry");

let newButton = document.querySelector("#newButton");
let cancelButton = document.querySelector("#cancelButton");
let editCancel = document.querySelector("#editCancel");
let editSave = document.querySelector("#editSave");
let saveButton = document.querySelector("#saveButton");
let deletebutton = document.querySelector("#editDelete");


jList = [];

mainPage.toggleAttribute("hidden");

if (localStorage.getItem('jEntries')) {
    jList = JSON.parse(localStorage.getItem('jEntries'));
    refreshList();
}
else {
    entryList.innerHTML = `
    <h3>No entries found. Click new entry to get started!</h3>
    `
}

let currentEntry;

//this.dataset.

// ===================================
// Functions for saving, deleting, ect
// ====================================

function saveData(title, text) {
    if (title) {
        jList.push(new jEntry(title, text));
        localStorage.setItem('jEntries', JSON.stringify(jList));
        refreshList();
    }
};



function refreshList() {
    entryList.innerHTML = '';
    for (x = (jList.length - 1); x >= 0; x--) {
        entry = jList[x];
        entryList.innerHTML += `
            <div class="displayEntry">
            <h4>${entry.title}</h4>
            <p>${entry.text}</p>
            <button id="${entry.id}" onclick="showEdit(${entry.id})">Edit</button>
            </div>`;
    }
}

function showEdit(id) {
    for (x = 0; x < jList.length; x++) {
        if (jList[x].id == id.id) {
            currentEntry = jList[x];
            break;
        }
    }
    if (currentEntry) {
        document.querySelector('#editTitle').value = currentEntry.title;
        document.querySelector('#editTextarea').value = currentEntry.text;
        mainPage.toggleAttribute("hidden");
        editPage.toggleAttribute("hidden");
    }
    else {
        console.log("Entry Error. Check the showedit function.")
    }
}
function closeEdit(){
    document.querySelector("#editTextarea").innerHTML = "";
    document.querySelector("#editTitle").innerHTML = "";
    mainPage.toggleAttribute("hidden");
    editPage.toggleAttribute("hidden");
}
function deleteEntry() {
    jList = JSON.parse(localStorage.getItem('jEntries'));
    for (x = 0; x <= (jList.length - 1); x++) {
        if(jList[x].id == currentEntry.id){
            jList.pop(x);
            break;
        }
    }
    localStorage.setItem('jEntries', JSON.stringify(jList));
    refreshList();
    closeEdit();
}

function saveEdit(){
    let title = document.querySelector("#editTitle");
    let text = document.querySelector("#editTextarea");
    if(!title.value){return};
    for (x = 0; x <= (jList.length - 1); x++) {
        if(jList[x].id == currentEntry.id){
            if(title){
                jList[x].title = title.value;
                jList[x].text = text.value;}
            break;
        }
    }
    localStorage.setItem('jEntries', JSON.stringify(jList));
    closeEdit();
    refreshList();
}

// Show the new entry page
newButton.addEventListener("click", () => {
    mainPage.toggleAttribute("hidden");
    newPage.toggleAttribute("hidden");
});




// Add a cancel button to the new/edit pages.
cancelButton.addEventListener("click", () => {
    document.querySelector("#newTextarea").innerHTML = "";
    mainPage.toggleAttribute("hidden");
    newPage.toggleAttribute("hidden");
});


editCancel.addEventListener("click", closeEdit);

// Event for saving entries.
saveButton.addEventListener('click', () => {
    let textval = document.querySelector("#newTextarea").value;
    let titleval = document.querySelector("#titleInput").value;
    if (titleval) {
        saveData(titleval, textval);
        mainPage.toggleAttribute("hidden");
        newPage.toggleAttribute("hidden");
    }
});

editDelete.addEventListener('click', deleteEntry);
editSave.addEventListener('click', saveEdit);