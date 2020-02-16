setTimeout(getJson, 1);

function getJson() {
    fetch('')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            document.getElementById('languages').innerHTML = html;
        })
        .catch(function(err) {
            console.log(err);
        });
}