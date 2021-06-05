const links = [
    {
        label: "Home",
        url: "/index.html"
    },
    {
        label: "Week 1 notes",
        url: "week1/index.html"
    },
    {
        label: "Week 2 notes",
        url: "week2/wk2.html"
    },
    {
        label: "Week 3 notes",
        url: "week3/wk3.html"
    },
    {
        label: "Week 4 notes",
        url: "week4/wk4.html"
    },
    {
        label: "Week  6",
        url: "week6/wk6.html"
    },
    {
        label: "Week  7",
        url: "week7/wk7.html"
    }
];


//Get <ul> tag pointer.
let ul = document.querySelector('ul');



links.forEach(
    link => {
        ul.innerHTML += `<a href="${link.url}"><li>${link.label}</li></a>`;
    }
);


function toggleMenu(){
    document.querySelector('ul').toggleAttribute("hidden");
}