
$(document).ready(function newsapi () {
  //get APIkey of news api
  $.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f3b907107f2a4a98a96e65a897eae499", function (res) {
    console.log(res);
    res.articles.forEach(element => {
    $(".newsAPI").append(`<li><a href="${element.url}"> ${element.title}</a></li>`)
    })
  })
  $('#loading').hide();
  $('.newsa').click(function(){
    $('#loading').show(".newsAPI");
    console.log("clicked");
    $('#main').replaceWith(" <section id='main' class='newsAPI'> </section>");
    newsapi('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=f3b907107f2a4a98a96e65a897eae499');
    })

})

$(document).ready(function newsgardian () {
//get APIkey of the gardian
  $.get("https://content.guardianapis.com/search?api-key=84ea0f75-c7c8-46a3-9e23-40d6b63c0c0b", function (result) {
    console.log(result);
    result.response.results.forEach(ele => {
      $(".TheGuardian").append(`<li><a href="${ele.webUrl}">${ele.webTitle}</a></li>`)
    })
  })
  $('#loading').hide();
  $('.newsg').click(function(){
    $('#loading').show(".TheGuardian");
    console.log("clicked");
    $('#main').replaceWith(" <section id='main' class='TheGuardian'> </section>");
    newsgardian('https://content.guardianapis.com/search?api-key=84ea0f75-c7c8-46a3-9e23-40d6b63c0c0b');

    })
})

