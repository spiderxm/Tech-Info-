setTimeout(languages, 1);

function languages() {
    console.log(true);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://github-trending-api.now.sh/repositories?language=javascript&since=weekly", true);
    xhr.onload = function() {
        if (this.status == 200) {
            console.log(this.responseText);
            let html = ' ';
            const languages = JSON.parse(this.responseText);
            const abba = languages.length;
            console.log(languages.href);

            for (let i = 0; i < abba; i++) {
                if (i % 3 == 0) {
                    html += `<div class="row">
                    <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:295px" >
                      <img class = "card-img-top" src = "${languages[i].avatar}" alt = "Card image" >
                      <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c);" >
                      <h4 class = "card-title text-white" > ${languages[i].author} </h4> 
                      <p class = "card-text text-white" > ${languages[i].description}</p>
                      <a href = "${languages[i].url}"
                      class = "btn btn-primary">Repository</a> 
                      </div> 
                     </div>
                    `;

                }
                if (i % 3 == 1) {
                    html += `
                    <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:295px" >
                      <img class = "card-img-top" src = "${languages[i].avatar}" alt = "Card image" >
                      <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)" >
                      <h4 class = "card-title text-white" > ${languages[i].author} </h4> 
                      <p class = "card-text text-white " > ${languages[i].description} </p>
                      <a href = "${languages[i].url}" class = "btn btn-primary">Repository</a> 
                      </div> 
                      </div>
                      
                    `;

                }
                if (i % 3 == 2) {
                    html += `
                    <div class = "card column mt-4 mb-4 mr-4 ml-4"
                    style = "width:295px" >
                      <img class = "card-img-top" src = "${languages[i].avatar}" alt = "Card image" >
                      <div class = "card-body"  style="background:linear-gradient(45deg,#24006b,#f42f8c)">
                      <h4 class = "card-title text-white" > ${languages[i].author} </h4> 
                      <p class = "card-text text-white" >${languages[i].description}</p> 
                      <a href = "${languages[i].url}"
                      class = "btn btn-primary" >Repository</a> 
                      </div> 
                      </div>
                      </div>
                    
                    `;


                }

            }
            document.getElementById('languages').innerHTML = html;
        }
    }
    xhr.send();
}