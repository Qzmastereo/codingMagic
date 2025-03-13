const scientists = [
    { name: "Albert", surname: "Einstein", birthYear: 1879, deathYear: 1955 },
    { name: "Isaac", surname: "Newton", birthYear: 1643, deathYear: 1727 },
    { name: "Galileo", surname: "Galilei", birthYear: 1564, deathYear: 1642 },
    { name: "Marie", surname: "Curie", birthYear: 1867, deathYear: 1934 },
    { name: "Nikola", surname: "Tesla", birthYear: 1856, deathYear: 1943 },
    { name: "Charles", surname: "Darwin", birthYear: 1809, deathYear: 1882 },
    { name: "Stephen", surname: "Hawking", birthYear: 1942, deathYear: 2018 },
    { name: "Richard", surname: "Feynman", birthYear: 1918, deathYear: 1988 },
    { name: "Carl", surname: "Sagan", birthYear: 1934, deathYear: 1996 },
    { name: "Dmitri", surname: "Mendeleev", birthYear: 1834, deathYear: 1907 },
    { name: "Alan", surname: "Turing", birthYear: 1912, deathYear: 1954 },
    { name: "Niels", surname: "Bohr", birthYear: 1885, deathYear: 1962 }
];

const scientistTexts = document.querySelectorAll(".scientist-text");
const buttons = document.querySelectorAll(".button-scienttist-js");

buttons[0].addEventListener("click", () => {
    const filtered = scientists.filter(s => s.birthYear >= 1879 && s.birthYear < 1955);
    updateScientists(filtered);
});

buttons[1].addEventListener("click", () => {
    const einstein = scientists.find(s => s.surname === "Einstein");
    updateScientists([einstein]);
});

buttons[2].addEventListener("click", () => {
    const sorted = [...scientists].sort((a, b) => a.surname.localeCompare(b.surname));
    updateScientists(sorted);
});

buttons[3].addEventListener("click", () => {
    const filtered = scientists.filter(s => s.surname.startsWith("C"));
    updateScientists(filtered);
});

buttons[4].addEventListener("click", () => {
    const sorted = [...scientists].sort((a, b) => (b.deathYear - b.birthYear) - (a.deathYear - a.birthYear));
    updateScientists(sorted);
});

buttons[5].addEventListener("click", () => {
    const filtered = scientists.filter(s => !s.name.startsWith("A"));
    updateScientists(filtered);
});

buttons[6].addEventListener("click", () => {
    const latestBorn = scientists.reduce((latest, s) => s.birthYear > latest.birthYear ? s : latest, scientists[0]);
    updateScientists([latestBorn]);
});

buttons[7].addEventListener("click", () => {
    const longestLived = scientists.reduce((longest, s) => (s.deathYear - s.birthYear) > (longest.deathYear - longest.birthYear) ? s : longest, scientists[0]);
    const shortestLived = scientists.reduce((shortest, s) => (s.deathYear - s.birthYear) < (shortest.deathYear - shortest.birthYear) ? s : shortest, scientists[0]);
    updateScientists([longestLived, shortestLived]);
});

buttons[8].addEventListener("click", () => {
    const filtered = scientists.filter(s => s.name[0] === s.surname[0]);
    updateScientists(filtered);
});

function updateScientists(list) {
    scientistTexts.forEach((el, index) => {
        el.textContent = list[index] ? `${list[index].name} ${list[index].surname}` : "";
    });
}
