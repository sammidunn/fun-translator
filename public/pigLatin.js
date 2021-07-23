const pigLatinSubmit = document.querySelector("#pig-latin-submit");
const result = document.querySelector("#result");
const pigLatinQuery = document.querySelector("#pig-query");

pigLatinSubmit.addEventListener("click", () => {
  console.log("pig latin clicked")
  let input = encodeURIComponent(pigLatinQuery.value)
  const urlToFetch = `https://api.funtranslations.com/translate/pig-latin.json?text=${input}`
  
  console.log(urlToFetch);
  fetch(urlToFetch)
    .then(response => response.json())
    .then(myJson =>{
      result.innerHTML = myJson.contents.translated;
      result.classList.remove("is-hidden");
  })
  .catch(error => {
    console.log("error was:", error)
  })
})