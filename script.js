const data = [
    {
        question: "qual foi e exata primeira msg q eu mandei? ",
        a: "wtf eu tive um dejavu q a gente namorava",
        b: "te achei gostosa me mostra a xereca",
        c: "cara eu tenho quase certeza que tua pfp deve ser o fetiche de alguém pqp q coisa bizarra kjkkkkk",
        d: "te amo mommy :3",
        ans: "op3"
    },
    {
        question: "quando foi nosso primeiro encontro?",
        a: "sabado, 11 de dezembro",
        b: "sabado, 4 de dezembro",
        c: "domingo, 5 de dezebro",
        d: "domingo, 18 de dezembro",
        ans: "op2"
    }
    ,
    {
        question: "qual foi a primeira foto q eu te mandei?",
        a: "recibo do primeiro album do kamaitachi",
        b: "foto que tu achava ser eu bebado",
        c: "foto minha arrumado indo p escola",
        d: "foto do pau gozando",
        ans: "op1"
    }
    ,
    {
        question: "qual minha comida favorita?",
        a: "teu cuzinho",
        b: "cebola",
        c: "xorume",
        d: "frango frito feito pela minha mãe",
        ans: "op4"
    }
    ,
    {
        question: "qual o catamara q eu peguei p te ver?",
        a: "o das 12:50",
        b: "o das 13:45",
        c: "o das 13:25",
        d: "o das 13:30",
        ans: "op3"
    }
    ,
    {
        question: "nossa primeira foto juntos foi tirada q hrs?",
        a: "14:22",
        b: "13:48",
        c: "14:54",
        d: "14:31",
        ans: "op4"
    }
    ,
    {
        question: "a torta que comemos no primeiro encontro era de:",
        a: "maçã",
        b: "uva",
        c: "laranja",
        d: "limão",
        ans: "op1"
    },
    {
        question: "qual camisa que eu tava inicialmente usando no primeiro encontro",
        a: "camisa de fogo",
        b: "camisa do bad luv",
        c: "camisa Chat Online dell 2012",
        d: "tava sem camisa qnd cheguei pq taba com calor",
        ans: "op2"
    }
    ,
    {
        question: "qual era o nome do papai noel q tiramos foto no 1 encontro?",
        a: "thiago",
        b: "jonhatan",
        c: "pq caralhos eu saberia isso?",
        d: "heitor",
        ans: "op3"
    }
    ,
    {
        question: "pq eu te amo?",
        a: "bundão",
        b: "peitão",
        c: "coxão",
        d: "pq tu me completa e cada dia mais eu me sinto mais apaixonado por ti e acho que tu é a mulher perfeita com quem eu quero criar uma familia <3",
        ans: "op4"
    }
];

let arrayvalues = 0;
let score = 0;


// Getting Acces to elements from DOM 


let question = document.getElementById('qust');
let option1 = document.getElementById('option1');
let option2 = document.getElementById('option2');
let option3 = document.getElementById('option3');
let option4 = document.getElementById('option4');
let submit = document.getElementById('submit-btn');
let scoreis = document.getElementById('score');
let starting = document.getElementById('start');
let restart = document.getElementById('restart');
let highScore = document.querySelector(".high-score");
let start = document.querySelector("#start-next");
let container = document.querySelector(".container");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let scorecomplete = document.querySelector(".score");
let answer = document.querySelectorAll(".button");




// Getting ID of checked radio button

const getAnswer = () => {
    let count = 0;
    let ansis = null;
    answer.forEach((curEle) => {

        if (curEle.checked) {
            ansis = curEle.id;
        }
    });

    return ansis;



};



// By clicking on submit checking answer by comparing (checked id of radio button with array Ans value)
// also loading next questions
submit.addEventListener('click', () => {


    const checkAnswer = getAnswer();
    if (checkAnswer === null) {

    } else {

        if (checkAnswer === data[arrayvalues].ans) {
            score++;
            scoreis.innerText = score;
            result.classList.replace("hidding", "correct");
            result.innerHTML = `<h3>acertou, safada 8===D</h3> `;

        } else {
            result.classList.replace("hidding", "wrong");
            result.innerHTML = `<h3>errou amoi :(</h3> `;


        }
        setTimeout(() => {
            arrayvalues++;
        if (arrayvalues < data.length) {
            answer.forEach((curEle) => {

                if (curEle.checked) {
                    curEle.checked = false;
                }
            });
            loadquestion();

            result.classList.replace("correct", "hidding");
            result.classList.replace("wrong", "hidding");        } else {
        result.classList.add("hidden");
            container.classList.add('hidden');
            scorecomplete.classList.remove("hidden");
            restart.classList.remove("hidden");
        }
            
        }, 2000);
        
        


       
    }


});



// Loading Questions 
function loadquestion() {

    let questionValue = data[arrayvalues];
    question.innerText = questionValue.question;
    option1.innerText = questionValue.a;
    option2.innerText = questionValue.b;
    option3.innerText = questionValue.c;
    option4.innerText = questionValue.d;
}



// By Clicking on Restart website Refresh & some content display hidden
restart.addEventListener("click", () => {
    scorecomplete.classList.add("hidden");
    restart.classList.add("hidden");

})

// This is for navbar which comes from upper side (for hidding navbar)
result.addEventListener("click", () => {
    result.classList.replace("correct", "hidding");
    result.classList.replace("wrong", "hidding");
})



// First Program start from here when user click on Start Button
starting.addEventListener("click", () => {
    starting.classList.add('hidden');

    loadquestion();
    container.classList.remove('hidden');


});
