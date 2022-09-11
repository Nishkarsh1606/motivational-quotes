const quotesDisplayDiv=document.querySelector("#quoteDisplay")
const authorDisplayDiv=document.querySelector("#authorDisplay")
// fetch('https://zenquotes.io/api/today')
//     .then(response=>response.json())
//     .then(json=>{
//         quotesDisplayDiv.innerHTML=`<h1>${json}</h1>`
//     })
const randomQuoteNumber=Math.floor(Math.random()*1544)
fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(json=>{
    const randomQuote=json[randomQuoteNumber].text
    const author=json[randomQuoteNumber].author
    quotesDisplayDiv.innerHTML=`
    <h1>${randomQuote}</h1>`
    authorDisplayDiv.innerHTML=`<h3>--${author}</h3>`
})