const quotes = [
    {
        quote:
            "Code Never Lies, Comments Sometimes Do.",
        author: "Ron Jeffries"
    },
    {
        quote:
            "Programmers are constantly making things more complicated than they need to be because future. Program for Today.",
        author: "David Heinemeier Hansson"
    },
    {
        quote:
            "Code is like humor. When you have to explain it, It's Bad.",
        author: "Cory House"
    },
    {
        quote: "The proper use of comments is to compensate for our failure to express ourself in code.",
        author: "Robert C Martin"
    },
    {
        quote:
            "If You Can't deploy your services independently then they are not microservice. ",
        author: "Daniel Bryant"
    },
    {
        quote:
            "Programming is key concept who want to understand and must have interested of ourself.",
        author: " Code Express"
    }
];


const btn=document.querySelector(".generate")

btn.addEventListener("click",function(){
    const random=Math.floor(Math.random()*quotes.length)

    document.querySelector(".quote").innerHTML=quotes[random].quote;
    document.querySelector(".author").innerHTML=quotes[random].author
})