let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];


// let suggestions=[] ;
// const url = "https://jsonplaceholder.typicode.com/todos/1"
// fetch(url)
// .then(response => response.json())
// .then(json => suggestions.push(json.title));

let suggestion =[];
url = "given"
fetch(url)
.then(response =>response.text())
.then(data =>{ 
    let mystring = data
    suggestion = mystring.split(",")

});

data : [
    {
        name : "dhsh",
        age : 10
    },
    {
        name: "nfdhf",
        age : 20,
    }
]

for(let i=0 ; i<data.length ; i++){
    console.log(data[i].name);
}