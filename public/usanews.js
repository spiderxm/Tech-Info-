setTimeout(getJson, 1);

function getJson() {
    fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0c815cb62614408aaa79cdea61c866d6')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            let html = '';
            let abba = 20;
            for (let i = 0; i < abba; i++) {
                if (i % 3 == 0) {
                    html += `<div class="row">
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <img class = "card-img-top" src = "${data.articles[i].urlToImage}" alt = "Card image" >
                  <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)">
                  <h4 class = "card-title text-white" > ${data.articles[i].description} </h4> 
                  <p class = "card-text text-white" > ${data.articles[i].author}</p>
                  <a href = "${data.articles[i].url}"
                  class = "btn btn-primary">Link to news</a> 
                  </div> 
                 </div>
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <img class = "card-img-top" src = "${data.articles[i].urlToImage}" alt = "Card image" >
                  <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)">
                  <h4 class = "card-title text-white" > ${data.articles[i].description} </h4> 
                  <p class = "card-text text-white" > ${data.articles[i].author} </p>
                  <a href = "${data.articles[i].url}" class = "btn btn-primary">Link to news</a> 
                  </div> 
                  </div>

                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <img class = "card-img-top" src = "${data.articles[i].urlToImage}" alt = "Card image" >
                  <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)">
                  <h4 class = "card-title text-white" > ${data.articles[i].description} </h4> 
                  <p class = "card-text text-white" >${data.articles[i].author}</p> 
                  <a href = "${data.articles[i].url}"
                  class = "btn btn-primary" >Link to news</a> 
                  </div> 
                  </div>
                  </div>
                  `;

                }
            }
            document.getElementById('languages').innerHTML = html;
        })
        .catch(function(err) {
            console.log(err);
        });
}