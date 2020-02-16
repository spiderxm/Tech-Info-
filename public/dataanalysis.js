usercategories = {
    tags: [{
            tagname: "implementation",
            questionsdone: 0
        },
        {
            tagname: "dp",
            questionsdone: 0
        },
        {
            tagname: "math",
            questionsdone: 0
        },
        {
            tagname: "greedy",
            questionsdone: 0
        },
        {
            tagname: "brute force",
            questionsdone: 0
        },
        {
            tagname: "data structure",
            questionsdone: 0
        },
        {
            tagname: "constructive algorithms",
            questionsdone: 0
        },
        {
            tagname: "dfs and similar",
            questionsdone: 0
        },
        {
            tagname: "sortings",
            questionsdone: 0
        },
        {
            tagname: "binary search",
            questionsdone: 0
        },
        {
            tagname: "graphs",
            questionsdone: 0
        },
        {
            tagname: "trees",
            questionsdone: 0,
        },
        {
            tagname: "strings",
            questionsdone: 0
        },
        {
            tagname: "number theory",
            questionsdone: 0
        },
        {
            tagname: "geometry",
            questionsdone: 0
        },
        {
            tagname: "combinatorics",
            questionsdone: 0
        },
        {
            tagname: "two pointers",
            questionsdone: 0
        },
        {
            tagname: "dsu",
            questionsdone: 0
        },
        {
            tagname: "bitmasks",
            questionsdone: 0
        },
        {
            tagname: "probabilities",
            questionsdone: 0
        },
        {
            tagname: "shortest paths",
            questionsdone: 0
        },
        {
            tagname: "hashing",
            questionsdone: 0
        },
        {
            tagname: "divide and conquer",
            questionsdone: 0
        },
        {
            tagname: "games",
            questionsdone: 0
        },
        {
            tagname: "matrices",
            questionsdone: 0
        },
        {
            tagname: "flows",
            questionsdone: 0
        },
        {
            tagname: "string suffix structures",
            questionsdone: 0
        },
        {
            tagname: "expression parsing",
            questionsdone: 0
        },
        {
            tagname: "graph matchings",
            questionsdone: 0
        },
        {
            tagname: "ternary search",
            questionsdone: 0
        },
        {
            tagname: "meet-in-the-middle",
            questionsdone: 0
        },
        {
            tagname: "fft",
            questionsdone: 0
        },
        {
            tagname: "2-sat",
            questionsdone: 0
        },
        {
            tagname: "chinese remainder theorem",
            questionsdone: 0
        },
        {
            tagname: "schedules",
            questionsdone: 0
        }
    ]


}
console.log(usercategories.tags.length);

//
const searchuser = document.getElementById('search-user');
searchuser.addEventListener('keyup', (e) => {
    const usertext = e.target.value;
    for (let i = 0; i < 35; i++) {
        usercategories.tags[i].questionsdone = 0;
    }
    if (usertext !== '') {
        console.log(usertext);
        fetch(`https://codeforces.com/api/user.status?handle=${usertext}&from=1&count=1000`)
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {
                console.log(data);
                let f = 0;
                for (let i = 0; i < data.result.length; i++) {
                    if (data.result[i].verdict == "OK") {
                        for (let k = 0; k < 35; k++) {
                            console.log(data.result[i].problem.tags.length);
                            for (let l = 0; l < data.result[i].problem.tags.length; l++) {
                                if (data.result[i].problem.tags[l] === usercategories.tags[k].tagname) {
                                    usercategories.tags[k].questionsdone = usercategories.tags[k].questionsdone + 1;
                                    console.log("Hurray");
                                    f = f + 1;
                                }
                            }
                        }
                    }
                }
                let questiontags = [];
                let questionpercategory = [];
                for (let i = 0; i < 35; i++) {
                    if (usercategories.tags[i].questionsdone > 0) {
                        questiontags.push(usercategories.tags[i].tagname);
                        questionpercategory.push(usercategories.tags[i].questionsdone);

                    }
                }

                var ctx = document.getElementById("myChart").getContext('2d');
                ctx.innerHTML = `<h2>Pie Chart Analysis of questions solved by you</h2>`;
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: questiontags,
                        datasets: [{
                            backgroundColor: [
                                "#2ecc71",
                                "#3498db",
                                "#95a5a6",
                                "#9b59b6",
                                "#f1c40f",
                                "#e74c3c",
                                "#34495e",
                                "#B269FF",
                                "#008000",
                                "#00FFFF",
                                "#008080",
                                "#0000FF",
                                "#CD5C5C",
                                "#F08080",
                                "#1ecc71",
                                "#3448db",
                                "#75a5a6",
                                "#9b59h6",
                                "#f0c40f",
                                "#e74c9c",
                                "#2ecc71",
                                "#3498dk",
                                "#95a5a8",
                                "#9b59b5",
                                "#f1c40w",
                                "#e74c3d",
                            ],
                            data: questionpercategory
                        }]
                    }
                });
                var ctx = document.getElementById("myCht");
                var myChart = new Chart(ctx, {
                    type: 'radar',
                    data: {
                        labels: questiontags,
                        datasets: [{
                            label: 'questions',
                            backgroundColor: "rgba(153,255,51,0.4)",
                            borderColor: "rgba(153,255,51,1)",
                            data: questionpercategory
                        }]
                    }
                });
                var strength = document.getElementById("strength");
                let html = `<h3>Strong Areas of User</h3>`;
                for (i = 0; i < questiontags.length; i++) {
                    if (i == 0) {
                        html += `
                    <div class="col-md-9">
                    <span class="badge badge-dark"> ${questiontags[i]}</span>
                    `;
                    } else {
                        html += `
                    <span class="badge badge-dark"> ${questiontags[i]}</span>
                    `;
                    }
                }
                strength.innerHTML = html;



            })

        .catch(function(err) {
            console.log(err);
        });
    } else {
        document.getElementById("clear-me").innerHTML = ` `;
        searchuser.innerHTML = ``;
    }
})