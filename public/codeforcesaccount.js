const searchuser = document.getElementById('search-user');
searchuser.addEventListener('keyup', (e) => {
    const usertext = e.target.value;
    if (usertext !== '') {
        console.log(usertext);
        fetch(`https://codeforces.com/api/user.info?handles=${usertext}`)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data);
                let i = 0;
                console.log(data.result[0].handle);
                let html = '';
                let url = `https://codeforces.com/profile/${data.result[0].handle}`;
                console.log(url);
                html += `
    <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${data.result[0].titlePhoto}" style="width:320px;height:300px;">
            <a href="${url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
          </div>
          <div class="col-md-9">
            <span class="badge badge-primary">Contribution: ${data.result[0].contribution}</span>
            <span class="badge badge-secondary">Rank: ${data.result[0].rank}</span>
            <span class="badge badge-secondary">Max Rank: ${data.result[0].maxRank}</span>
            <span class="badge badge-success">Maximum Rating: ${data.result[0].maxRating}</span>
            <span class="badge badge-info">Current Rating: ${data.result[0].rating}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Organization: ${data.result[0].organization}</li>
              <li class="list-group-item">Country: ${data.result[0].country}</li>
              <li class="list-group-item">City: ${data.result[0].city}</li>
              <li class="list-group-item">Friend of: ${data.result[0].friendOfCount}</li>
            </ul>
          </div>
        </div>
      </div>
                `;

                document.getElementById('profile').innerHTML = html;
            })
            .catch(function(err) {

                console.log(err);
            });
    } else {
        document.getElementById("clear-me").innerHTML = ` `;

        searchuser.innerHTML = ``;
    }
})