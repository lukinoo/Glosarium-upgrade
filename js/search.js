const searchedWords = document.getElementById("searched-words");
const searchInput = document.getElementById("search-input");

const API_URL = "https://glosarium.iliauni.edu.ge/search?search=";

const createSearchedWords = (words) => {
  searchedWords.innerHTML = "";

  words.forEach(({ word }) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="https://glosarium.iliauni.edu.ge/glossary?word=${word}">${word}</a>`;

    searchedWords.appendChild(li);
  });
};

const fetchSearchWords = async (value) => {
  searchedWords.innerHTML = "";

  try {
    const response = await fetch(API_URL + value);
    const data = await response.json();

    createSearchedWords(data);
  } catch (err) {
    console.error(err);
  }
};

const handleSeach = (e) => {
  let val = e.target.value;

  if (!val.trim() || val.length < 3) return (searchedWords.innerHTML = "");

  fetchSearchWords(val);
};

// input event
searchInput.addEventListener("input", handleSeach);
