const quotes = [
    "`복잡한 문제는 작은 문제로 나누어 해결하라`",
    "`에러 메시지는 문제를 해결하기 위한 단서다`",
    "`완벽한 코드보다 이해할 수 있는 코드부터 작성하라`",
    "`모르는 코드는 설명할 수 있을 때까지 공부하라`",
    "`작은 기능 하나를 완성하는 것이 시작이다`"
];

const quoteElement = document.querySelector("#quote");

const today = new Date();

const index = (today.getDate() - 1) % quotes.length;
quoteElement.textContent = quotes[index];

const month = today.getMonth() + 1;
const day = today.getDate();

document.querySelector("#today-title").textContent =
    `${month}월 ${day}일 개발자를 위한 오늘의 명언 - `;