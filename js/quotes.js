/**
 * 2023.11.23 시나버스 shinahverse.kr
 * 화면에 명언 랜덤으로 출력하기
 */
const quotes = [
    {
      quote: "노력한다고 항상 성공할 순 없지만 성공한 사람은 모두 노력했단 걸 알아둬.",
      author: "<곰돌이 푸>",
    },
    {
      quote: "아무도 걷지 않은 길을 가라 애초부터 삶이란 수학공식처럼 딱 맞아 떨어지지 않는다..",
      author: "<스티브잡스>",
    },
    {
      quote:
        "매일,매분,매초 인생을 바꿀 수 있는 기회가 있어.",
      author: "<덤보>",
    },
    {
      quote: "행복을 찾아 노력하는 것을 멈추어라, 그러면 정말 행복해질 수 있을것이다.",
      author: "<에디스 와튼>",
    },
    {
      quote: "꿈을 품고 뭔가 할 수 있다면 그것을 시작하라. 새로운 일을 시작하는 용기속에 당신의 천재성과 능력과 기적이 모두 숨어있다",
      author: "<괴테>",
    },
    {
      quote: "분노는 당신을 더 하찮게 만드는 반면, 용서는 당신을 예전보다 뛰어난 사람으로 성장하게 한다",
      author: "셰리 카터 스콧>",
    }
  ];

//문서에 있는 quote에 있는 첫번째 span
const quote = document.querySelector("#quote span:first-child");

//문서에 있는 quote에 있는 마지막 span
const author = document.querySelector("#quote span:last-child");

//문서에 랜덤으로 출력하기
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;