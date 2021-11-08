

const people = ["Mduduzi","Selina","Lucky",
"Happy","Precious","Andiwse","Sophie",
"Lebo","Sitembiso","Kagisho","Khumi","Vuzi",
"Ntombela","Nkosphenule","Wandile"]


const display = document.getElementById('display');


for (let i = 0; i < people.length; i++) {
    display.innerHTML+= "<li>" + people[i] + "</li>"
    
}


