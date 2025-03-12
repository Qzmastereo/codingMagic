const scientists = [
    {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1
    },
    {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2
    },
    {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3
    },
    {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4
    },
    {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5
    },
    {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6
    },
    {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7
    },
    {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8
    },
    {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9
    },
    {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10
    },
    {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11
    },
    {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12
    }
    ];
    //!nineteenthCenturyScientists 
    const nineteenthCenturyScientists = scientists.filter(scientist => scientist.born >= 1800 && scientist.born < 1900);
    console.log(nineteenthCenturyScientists);

    //!bornEnstein
    const bornEnstein = scientists.find(scientist => scientist.born === 1879);
    console.log(bornEnstein);

    //!Відсортувати вчених за алфавітом

    const sortAlphabet = scientists.sort((a, b) => a.surname.localeCompare(b.surname));
    console.log(sortAlphabet);

    //!firstLetterC
    const firstLetterC = scientists.filter(scientist => scientist.surname.charAt(0) === "C");
    console.log(firstLetterC);

    //!deadBeforeBorn
    const aliveYears = scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
    console.log(aliveYears);

    //!Видалити всіх вчених, ім’я яких починається на “А”

    const deleteA = scientists.filter(scientist => scientist.name.charAt(0) !== "A");
    console.log(deleteA);

    //!Знайти вченого, який народився найпізніше

    const latestBorn = scientists.sort((a, b) => b.born - a.born);
    console.log(latestBorn[0]);

   //! Знайти вченого, який прожив найдовше і вченого, який прожив найменше

    const longestLife = scientists.sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
    console.log(longestLife[0]);
    
    //!Знайти вчених, в яких співпадають перші літери імені і прізвища
    const firstLetters = scientists.filter(scientist => scientist.name.charAt(0) === scientist.surname.charAt(0));
    console.log(firstLetters);

    document.addEventListener("DOMContentLoaded", function() {
        function formatScientist(scientist) {
          return `${scientist.name} ${scientist.surname} (Born: ${scientist.born}, Died: ${scientist.dead})`;
        }
      
        function displayResults(results) {
          const outputEls = document.querySelectorAll('.scientist-text');
          outputEls.forEach(el => el.textContent = ""); // Очищаем содержимое
      
          if (!Array.isArray(results)) {
            results = [results];
          }
          
          results.forEach((item, index) => {
            if (index < outputEls.length) {
              outputEls[index].textContent = (typeof item === "object") ? formatScientist(item) : item;
            }
          });
        }
      
        // Проверяем, существуют ли кнопки
        const buttons = document.querySelectorAll('.button-scienttist-js');
        if (buttons.length === 0) {
          console.error("Кнопки .button-scienttist-js не найдены! Проверьте HTML.");
          return;
        }
      
        buttons.forEach((button, index) => {
          button.addEventListener("click", () => {
            let result;
            try {
              switch (index) {
                case 0: result = window.nineteenthCenturyScientists || []; break;
                case 1: result = window.bornEnstein ? `${window.bornEnstein.name} was born in ${window.bornEnstein.born}` : "Дані не знайдені"; break;
                case 2: result = window.sortAlphabet || []; break;
                case 3: result = window.firstLetterC || []; break;
                case 4: result = window.aliveYears || []; break;
                case 5: result = window.deleteA || []; break;
                case 6: result = window.latestBorn || []; break;
                case 7: {
                  const sortedByLife = [...(window.scientists || [])].sort((a, b) => (a.dead - a.born) - (b.dead - b.born));
                  result = sortedByLife.length ? [sortedByLife[0], sortedByLife[sortedByLife.length - 1]] : "Дані не знайдені";
                  break;
                }
                case 8: result = window.firstLetters || []; break;
                default: result = "Операція не визначена";
              }
            } catch (error) {
              console.error("Ошибка при обработке кнопки:", error);
              result = "Помилка в коді";
            }
      
            displayResults(result);
          });
        });
      });