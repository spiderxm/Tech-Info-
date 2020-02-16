setTimeout(languages, 1);

function languages() {
    console.log(true);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', "https://github-trending-api.now.sh/languages", true);
    xhr.onload = function() {
        if (this.status == 200) {
            let html = '';
            const languages = JSON.parse(this.responseText);
            const abba = languages.length;
            let delay = 0;

            for (let i = 0; i < abba; i++) {
                if (i % 3 == 0) {
                    html += `
        <div class="row">
            <div class = "card pt-4 pb-4 pr-4 pl-4 mt-4 mb-4 mr-4 ml-4 column bg-dark text-white border border-secondary" style = "width: 18.5rem ;background:linear-gradient(45deg,#24006b,#f42f8c)">
                <div class = "card-body" >
                     <h5 class = "card-title" > ${languages[i].name} </h5> 
                     <br>
                     <br>
                     <h6>${i+1}</h6> 
                </div> 
            </div>`;
                    delay = delay + .1;
                }
                if (i % 3 == 1) {
                    html += `
            <div class = "card pt-4 pb-4 pr-4 pl-4 column mt-4 mb-4 mr-4 ml-4 bg-dark text-white border border-secondary"
            style = "width: 18.5rem;background:linear-gradient(45deg,#24006b,#f42f8c)"
            "animation-delay: ${delay}s"
             >
                <div class = "card-body" >
                     <h5 class = "card-title" > ${languages[i].name} </h5> 
                     <br>
                     <br>
                     <h6>${i+1}</h6> 
                </div> 
            </div>`;
                    delay = delay + .1;

                }
                if (i % 3 == 2) {
                    html += `
            <div class = "card pt-4 pb-4 pr-4 pl-4 column mt-4 mb-4 mr-4 ml-4 bg-dark text-white border border-secondary"style = "width: 18.5rem;background:linear-gradient(45deg,#24006b,#f42f8c)">
                <div class = "card-body" >
                     <h5 class = "card-title" > ${languages[i].name} </h5> 
                     <br>
                     <br>
                     <h6>${i+1}</h6> 
                </div> 
            </div>
        </div>`;
                    delay = delay + .1;

                }

            }
            document.getElementById('languages').innerHTML = html;
        }
    }
    xhr.send();
}