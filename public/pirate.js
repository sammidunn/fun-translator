const pirateSubmit = document.querySelector("#pirate-submit");
const result = document.querySelector("#result");
const pirateQuery = document.querySelector("#pirate-query");

pirateSubmit.addEventListener("click", () => {
  let input = encodeURIComponent(pirateQuery.value)
  const urlToFetch = `https://api.funtranslations.com/translate/pirate.json?text=${input}`
  
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
