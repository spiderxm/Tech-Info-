getJson();

function getJson() {
    fetch('https://codeforces.com/api/user.ratedList?activeOnly=true')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            // console.log(data);
            let html = '';
            let abba = 100;

            for (let i = 0; i < abba; i++) {
                let url = `https://codeforces.com/profile/${data.result[i].handle}`;
                console.log(url);
                if (i % 3 == 0) {
                    html += `<div class="popup">
                    <div class="row">
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <img class = "card-img-top"
                  src = "${data.result[i].titlePhoto}"
                  alt = "Card image" >
                  <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)">
                  <h4 class = "card-title text-white" > ${data.result[i].handle} </h4> 
                  <p class = "card-text text-white" > ${data.result[i].firstName}</p>
                  <p class = "card-text text-white" > ${data.result[i].rating}</p>
                  <p class = "card-text text-white" > ${data.result[i].rank}</p>
                   <a href = "${url}"
                   class = "btn btn-primary" > Profile </a> 
                  </div> 
                 </div>
                `;

                }
                if (i % 3 == 1) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <img class = "card-img-top" src = "${data.result[i].titlePhoto}" alt = "Card image" >
                  <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)">
                  <h4 class = "card-title text-white" > ${data.result[i].handle} </h4> 
                  <p class = "card-text text-white" > ${data.result[i].firstName}</p>
                  <p class = "card-text text-white" > ${data.result[i].rating}</p>
                  <p class = "card-text text-white" > ${data.result[i].rank}</p>
                    <a href = "${url}"
                    class = "btn btn-primary" > Repository </a>
                  </div> 
                 </div>

                `;

                }
                if (i % 3 == 2) {
                    html += `
                <div class = "card column mt-4 mb-4 mr-4 ml-4"
                style = "width:295px" >
                  <img class = "card-img-top" src ="${data.result[i].titlePhoto}" alt ="Card image">
                  <div class = "card-body" style="background:linear-gradient(45deg,#24006b,#f42f8c)" text-white>
                  <h4 class = "card-title text-white" > ${
                          data.result[i].handle
                      } </h4>  <p class = "card-text text-white" > ${
                          data.result[i].firstName
                      } </p> <p class = "card-text text-white" > ${data.result[i].rating} </p> 
                      <p class = "card-text text-white" > ${
                          data.result[i].rank
                      } </p> 
                      <a href = "${url}"
                      class = "btn btn-primary" > Repository </a>
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