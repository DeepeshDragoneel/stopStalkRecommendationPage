let data = [
    {
        problemName: "Seinfield",
        problemUrl: "https://google.com",
        site: "codechef",
        accuracy: "90.3",
        userSolved: "3000",
        editorial: "https://www.stopstalk.com/problems/editorials/3730",
        tags: ["arrays", "sorting"],
    },
    {
        problemName: "How",
        problemUrl: "https://google.com",
        site: "codeforces",
        accuracy: "50.7",
        userSolved: "3000",
        editorial: "https://www.stopstalk.com/problems/editorials/3730",
        tags: ["trees"],
    },
    {
        problemName: "Alice and hard",
        problemUrl: "https://google.com",
        site: "codeforces",
        accuracy: "33.1",
        userSolved: "3000",
        editorial: "https://www.stopstalk.com/problems/editorials/3730",
        tags: ["DP"],
    },
    {
        problemName: "Chef and kitchen",
        problemUrl: "https://google.com",
        site: "codechef",
        accuracy: "70.3",
        userSolved: "3000",
        editorial: "https://www.stopstalk.com/problems/editorials/3730",
        tags: ["arrays", "sorting"],
    },
    {
        problemName: "hacker 1",
        problemUrl: "https://google.com",
        site: "hackerearth",
        accuracy: "90.3",
        userSolved: "3000",
        editorial: "https://www.stopstalk.com/problems/editorials/3730",
        tags: ["Sliding window", "sorting", "arrays"],
    },
    {
        problemName: "Members",
        problemUrl: "https://google.com",
        site: "hackerrank",
        accuracy: "90.3",
        userSolved: "3000",
        editorial: "https://www.stopstalk.com/problems/editorials/3730",
        tags: ["Graphs"],
    },
];
console.log(data[0].site);

//api calls
/* const xhr = new XMLHttpRequest();
xhr.overrideMimeType("application/json");

xhr.onload = () => {
    console.log(this);
    const rowData = JSON.parse(xhr.responseText);
}

xhr.open("GET", "./problems.json");
xhr.send(); */

let table = document.getElementById("recommendationsTable");

let n = 1;

const sites = {
    codechef: "https://bit.ly/3h0X2ci",
    codeforces: "https://bit.ly/3zNn6A3",
    hackerearth: "https://bit.ly/3gT67VL",
    hackerrank: "https://bit.ly/3j4iUG0",
};

data.forEach(item => {
    let x = 0;
    let newRow = table.insertRow(n);
    let col0 = newRow.insertCell(0);
    let col1 = newRow.insertCell(1);
    let col2 = newRow.insertCell(2);
    let col3 = newRow.insertCell(3);
    let col4 = newRow.insertCell(4);
    let col5 = newRow.insertCell(5);
    col0.innerHTML = `<p>${item.problemName}</p>`;
    
    // link.setAttribute("target", "_blank");
    let link = document.createElement("a");
    link.setAttribute("href", item.problemUrl);
    link.setAttribute("target", "_blank");
    let img = document.createElement("img");
    img.src = (`./assets/link.png`);
    img.className = "problemUrl";
    link.className = "problemUrlLink";
    link.appendChild(img);
    col1.appendChild(link);
    
    img = document.createElement("img");
    img.className = "recommendationSite";
    if (item.site == "codechef") {  
        img.src = sites.codechef;
    }
    else if (item.site == "codeforces") {  
        img.src = sites.codeforces;
    }
    else if (item.site == "hackerrank") {
        img.src = sites.hackerrank;
    } else if (item.site == "hackerearth") {
        img.src = sites.hackerearth;
        img.height = 20;
        img.width = 20;
        img.className = "recommendationSiteHackerRank";
    } else {
        img.src = sites.hackerearth;
    }
    col2.appendChild(img);
    
    col3.innerHTML = `<p>${item.accuracy}%</p>`;

    
    img = document.createElement("img");
    img.src = ('./assets/open-book.png');
    link = document.createElement("a");
    link.setAttribute("href", item.editorial);
    link.setAttribute("target", "_blank");
    img.className = "recommendationEditorial";
    link.appendChild(img);
    col4.appendChild(link);
    
    col5.innerHTML = `<p>${item.tags}</p>`;
})


