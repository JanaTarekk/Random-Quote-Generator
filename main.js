function randomQuoteGenerator() {
    var names = [
        "Oscar Wilde",
        "Marcus Tullius Cicero",
        "Mahatma Gandhi",
        "Mae West",
        "Mark Twain",
    ];
    var text = [
        "Be yourself; everyone else is already taken.",
        "A room without books is like a body without a soul.",
        "Be the change that you wish to see in the world.",
        "You only live once, but if you do it right, once is enough.",
        "If you tell the truth, you don't have to remember anything.",
    ];

    var num = Math.floor(Math.random() * names.length);
    var quote = text[num] + " - " + names[num];

    document.getElementById("quoteDisplay").textContent = quote;
}
