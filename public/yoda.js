const yodaSubmit = document.querySelector("#yoda-submit");
const yodaQuery = document.querySelector("#yoda-query");
const result = document.querySelector("#result");

yodaSubmit.addEventListener("click", () => {
  let input = encodeURIComponent(yodaQuery.value)
  const urlToFetch = `https://api.funtranslations.com/translate/yoda.json?text=${input}`
  
  console.log(urlToFetch);
  fetch(urlToFetch)
    .then(response => response.json())
    .then(myJson =>{
      console.log(myJson)
      result.innerHTML = myJson.contents.translated;
      result.classList.remove("is-hidden");
  })
  .catch(error => {
    console.log("error was:", error);
  })
})