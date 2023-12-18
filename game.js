window.onload = function () {
  generateNewQuestion();
  startTimer();
};

function generateNewQuestion() {
  var text = generateTopic();
  var index = 0;
  var pre = document.querySelector("pre");
  pre.textContent = "";
  var delay = 30;
  // Use a while loop to iterate until the end of the text
  while (index < text.length) {
    var CHAR = text[index];
    (function (CHAR) {
      setTimeout(function () {
        pre.textContent += CHAR;
      }, delay * index);
    })(CHAR);
    index++;
  }
}

let scoreselement = document.getElementById("score");
let answer = 0;
let score = 0;
let time = 60;

let data = [
  // 1
  {
    name: "What is h20?",
    ans: 0,
    images: [
      "assets/images/que1/water.png",
      "assets/images/que1/iron.png",
      "assets/images/que1/copper.png",
    ],
  },
  // 2
  {
    name: "What element is a key component in the production of glass used in windows and mirrors?",
    ans: 1,
    images: [
      "assets/images/que2/calcium.png",
      "assets/images/que2/silicon.png",
      "assets/images/que2/sodium.png",
    ],
  },
  // 3
  {
    name: "In rechargeable batteries found in many electronic devices, which element is commonly used in the cathode?",
    ans: 1,
    images: [
      "assets/images/que3/zinc.png",
      "assets/images/que3/lithium.png",
      "assets/images/que3/nickel.png",
    ],
  },
  // 4
  {
    name: "What metal is often alloyed with copper to create brass, a widely used material in the manufacturing of musical instruments and decorative items?",
    ans: 2,
    images: [
      "assets/images/que4/nickel.png",
      "assets/images/que4/aluminium.png",
      "assets/images/que4/zinc.png",
    ],
  },
  // 5
  {
    name: "In the semiconductor industry, what element is a fundamental component of silicon wafers used in electronic devices?",
    ans: 1,
    images: [
      "assets/images/que4/nickel.png",
      "assets/images/que2/silicon.png",
      "assets/images/que3/zinc.png",
    ],
  },
  // 6
  {
    name: "Which element is commonly used as a fuel in car engines?",
    ans: 1,
    images: [
      "assets/images/que6/nitrogen.png",
      "assets/images/que6/oxygen.png",
      "assets/images/que6/titanium.png",
    ],
  },
  // 7
  {
    name: "Which element is commonly used in the construction of car bodies to prevent corrosion?",
    ans: 0,
    images: [
      "assets/images/que4/aluminium.png",
      "assets/images/que1/copper.png",
      "assets/images/que6/titanium.png",
    ],
  },
  // 8
  {
    name: "What is the chemical symbol for the element used in car tires to enhance their elasticity and is also a scripting language commonly used in web development?",
    ans: 0,
    images: [
      "assets/images/que8/sulfur.png",
      "assets/images/que1/copper.png",
      "assets/images/que6/titanium.png",
    ],
  },
  // 9
  {
    name: "Which gas is responsible for inflating airbags in cars during a collision and is also a commonly used command-line interface in computer operating systems?",
    ans: 1,
    images: [
      "assets/images/que9/ethyl.png",
      "assets/images/que9/nitrogen.png",
      "assets/images/que6/oxygen.png",
    ],
  },
  // 10
  {
    name: "What is the pH value of pure water?",
    ans: 1,
    images: [
      "assets/images/que10/number-10.png",
      "assets/images/que10/number-5.png",
      "assets/images/que10/7.png",
    ],
  },
];

function generateTopic() {
  const randomIndex = Math.floor(Math.random() * data.length);
  let topic = data[randomIndex];

  answer = topic.ans;

  let element = `<div class="answers">
  <div>
  <P class="option">OPTION 1:</P>
  <img class="imageclass" id="0" src=${topic.images[0]} alt=""/>
  </div>
  <div>
  <p class="option" >OPTION 2:</P>
  <img  id="1" class="imageclass" src=${topic.images[1]} alt="" />
  </div>
  <div>
  <p class="option" >OPTION 3:<p>
  <img id="2" class="imageclass" src=${topic.images[2]} alt="" />
  </div>
</div>`;

  let container = document.getElementById("container");
  container.innerHTML = element;

  var imagesdiv = document.querySelectorAll(".imageclass");
  console.log(imagesdiv);

  for (let i = 0; i < imagesdiv.length; i++) {
    imagesdiv[i].addEventListener("click", clickOnImage);
  }

  return topic.name;
}




function clickOnImage(e) {
  console.log(e.target.id);

  if (answer == e.target.id) {
    console.log("correct answer");
    // time = 10;
    score = score + 1;
    time += 5;
    generateNewQuestion();
    // startTimer();
    scoreselement.innerText = score;
  } else {
    localStorage.setItem("scoren", score);
    location.href = "gameover.html";
  }
}

function startTimer() {
  var timerInterval = setInterval(() => {
    time--;
    document.getElementById("timer").innerHTML = time;
    if (time == 1) {
      localStorage.setItem("scoren", score);
      window.location.href = "gameover.html";
    }
  }, 1000);
}
