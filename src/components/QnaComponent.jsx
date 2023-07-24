import React, { useState, useEffect } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import image from "../asset/body.png"

import "./teststyle.css";

const qnaList = [
  {
    q: "1.날 떠나버릴지도 모른다는 두려움에 사람들에게 매달린다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [0] },
      { answer: "5", type: [0] },
      { answer: "6", type: [0] },
    ],
  },
  {
    q: "2. 날 사랑하는 사람이 다른 사람을 더 좋아하게 되어 나를 떠날까봐 굉장히 걱정한다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [0] },
      { answer: "5", type: [0] },
      { answer: "6", type: [0] },
    ],
  },
  {
    q: "3. 사람들의 궁극적인 목적이 무엇인지 경계하는 편이다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [1] },
      { answer: "5", type: [1] },
      { answer: "6", type: [1] },
    ],
  },
  {
    q: "4. 사람들이 나를 해치지 않을까 하는 걱정에 경계를 늦출 수가 없다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [1] },
      { answer: "5", type: [1] },
      { answer: "6", type: [1] },
    ],
  },
  {
    q: "5. 보통 사람들 보다 병에 걸리거나 다른 나쁜 일이 내게 닥칠까봐 더 많이 걱정하는 편이다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [2] },
      { answer: "5", type: [2] },
      { answer: "6", type: [2] },
    ],
  },
  {
    q: "6. 파산해서 거지가 되거나 남에게 의탁하게 될까 봐 걱정한다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [2] },
      { answer: "5", type: [2] },
      { answer: "6", type: [2] },
    ],
  },
  {
    q: "7. 살아가는 동안 혼자 힘으로 난관을 극복해 나갈 수 가 없기에 도움을 줄 사람이 필요하다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [3] },
      { answer: "5", type: [3] },
      { answer: "6", type: [3] },
    ],
  },
  {
    q: "8. 부모님과 나는 서로의 사생활에 지나치게 관여하는 경향이 있다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [3] },
      { answer: "5", type: [3] },
      { answer: "6", type: [3] },
    ],
  },
  {
    q: "9. 나를 돌봐주거나 나와 마음을 나누거나 내게 일어나는 일에 대해 깊이 염려해줄 사람이 없었다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [4] },
      { answer: "5", type: [4] },
      { answer: "6", type: [4] },
    ],
  },
  {
    q: "10. 이해와 공감, 지도, 충고, 지지에 대한 나의 정서적 욕구를 사람들이 만족시켜 준 적이 없다.  ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [4] },
      { answer: "5", type: [4] },
      { answer: "6", type: [4] },
    ],
  },
  {
    q: "11. 나는 소속감이 없다. 나는 남들과 다르고 어디에도 어울리지 않는다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [5] },
      { answer: "5", type: [5] },
      { answer: "6", type: [5] },
    ],
  },
  {
    q: "12. 나는 따분하고 싫증나는 사람이다. 사교적인 자리에서 어떻게 이야기해야 할지 모르겠다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [5] },
      { answer: "5", type: [5] },
      { answer: "6", type: [5] },
    ],
  },
  {
    q: "13. 내가 원하는 사람이 나의 모든 진실을 알게 되면 나를 사랑할 수 없을 것이다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [6] },
      { answer: "5", type: [6] },
      { answer: "6", type: [6] },
    ],
  },

  {
    q: "14. 나는 다른 사람들의 사랑과 관심, 존경을 받을 가치가 없다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [6] },
      { answer: "5", type: [6] },
      { answer: "6", type: [6] },
    ],
  },
  {
    q: "15. 나는 일(학업)에 있어서 남들보다 능력이 없다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [7] },
      { answer: "5", type: [7] },
      { answer: "6", type: [7] },
    ],
  },
  {
    q: "16. 남들보다 재능이나 지적능력, 경력이 모자라기 때문에 나는 이 자리에 어울리지 않는다고 느낀다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [7] },
      { answer: "5", type: [7] },
      { answer: "6", type: [7] },
    ],
  },
  {
    q: "17. 다른 사람들이 원하는 걸 내가 해주지 않으면 사람들은 나에게 어떤 방식으로든 보복하거나 나를 거부할 것이다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [8] },
      { answer: "5", type: [8] },
      { answer: "6", type: [8] },
    ],
  },
  {
    q: "18. 사람들은 내가 남들만을 위하고 자신을 위할줄 모른다고 생각한다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [8] },
      { answer: "5", type: [8] },
      { answer: "6", type: [8] },
    ],
  },
  {
    q: "19. 나는 최선을 다한다. 적당한 수준에 만족할 수 없다.  ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [9] },
      { answer: "5", type: [9] },
      { answer: "6", type: [9] },
    ],
  },
  {
    q: "20. 나는 할 일이 너무 많아서 쉬거나 즐길 시간이 없다. ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [9] },
      { answer: "5", type: [9] },
      { answer: "6", type: [9] },
    ],
  },
  {
    q: "21. 다른 사람이 지키는 정상적인 규칙이나 관례를 따를 필요는 없다.  ",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [10] },
      { answer: "5", type: [10] },
      { answer: "6", type: [10] },
    ],
  },
  {
    q: "22. 나는 일상적이고 지루한 일들을 완수해 내거나 내가 내 감정을 조절하는 습관을 기르지 못했다.",
    a: [
      { answer: "1", type: null },
      { answer: "2", type: null },
      { answer: "3", type: null },
      { answer: "4", type: [10] },
      { answer: "5", type: [10] },
      { answer: "6", type: [10] },
    ],
  },
];

const infoList = [
  {
    name: "제발 나를 떠나지 마세요 < 버림받음의 덫 > ",
    desc: "연애의 프로재능러인 당신! 쥐에 해당하는 당신은 연애의 모든 것들을 알고 있어, 쉽게 연애에 성공하는 스타일이랍니다. 주로 포부가 크고 성격이 낙천적인 성향을 가지고 있고, 논리적이면서 두뇌회전이 매우 빠르다고 할 수 있어요. 말재주 또한 좋아 사교성이 좋고 유쾌하지만 화려한 것을 좋아해 허영심을 부리거나 사치를 부리기 때문에 이 점들을 주의해야 돼요. 뛰어난 능력에 자만하는 경우도 종종 있기 때문에 겸손이 필요하답니다!",
  },
  {
    name: "당신을 믿을 수 없어 < 불신과 학대의 덫 > ",
    desc: "연애 유형의 진국인 당신! 소에 해당하는 당신은 상대방만 바라보는 해바라기 연애 스타일이랍니다. 매사에 끈기가 있어 연애를 할 때 성실하고 진심을 다하는 성향을 가지고, 온화하며 따뜻한 마음을 가지고 있어요. 한 번 좋아하면 끝까지 좋아하는 의리파지만 자존심이 쌔 은근히 고집이 강하답니다. 또한 욱하는 성질이 있어 이런 부분들을 조심해야 하고, 질투심이 많아 사랑이 집착으로 바뀔 수 있어 주의해야 된답니다! ",
  },
  {
    name: "언제 재난이 닥칠 지 몰라 < 취약성의 덫 > ",
    desc: "한 번 좋아하는 사람이 있으면 내 사람으로 만드는 당신! 호랑이에 해당하는 당신은 썸부터 사랑까지 한 번에 직진하는 스타일이랍니다. 연애할 때 주로 이끄는 성향을 가지고 있고, 시원시원한 성격과 유쾌한 성격을 가지고 있어요. 대쪽같은 성격에다 실수를 용납하는 대인배지만 유혹에 약하고 허영때문에 들뜨는 성격이라 다른 이성의 접근에 주의해야 돼요. 또한 내가 한 말로 인해 상대방이 상처를 받을 수 있기 때문에, 항상 말 조심이 필요하답니다!",
  },
  {
    name: "나 혼자서는 해낼 수 없어 < 의존의 덫 >  ",
    desc: "상대방을 홀리게 만드는 당신! 신비롭고 독특한 매력을 가져, 상대방이 푹 빠지게 만드는 스타일이에요. 직감이 발달되어 손재주가 뛰어난 편이고, 연애할 때 통통 튀는 모습들을 많이 보여준답니다. 유순하고 낙천적인 성향이지만, 자칫잘못하면 상대방에게 천진난만한 아이처럼 보일 수 있는 점을 주의해야 돼요. 또한 감정 기복이 심한 편이라 변덕스러운 마음을 가질 수 있어, 이런 부분들에 신경을 쓴다면 좋은 연애를 할 수 있어요.",
  },
  {
    name: "나는 결코 사랑받을 수 없을거야 < 정서적 결핍의 덫 >",
    desc: "상대방과의 미래를 꿈꾸는 당신! 현실적인 연애보다는, 미래에 대한 이상적인 연애관을 가지고 있어요. 매일매일 사랑하는 사람과 보낼 미래를 생각하기 때문에, 좋은 신랑감이 될 수 있는 자질이 있답니다. 또한 일적으로나 사랑으로나 야망이 커, 크게 성공할 확률이 높고 리더십이 매우 뛰어나답니다. 다만 높은 이상에 비해서 현실이 자신의 마음에 들지 않으면 허세를 부리거나 사람들을 무시하는 경우가 많으니 이점들을 주의하면 좋을 것 같아요!",
  },
  {
    name: "나는 적합하지가 않아 < 사회적 소외의 덫 >",
    desc: "상대방의 기념일을 챙기며 깜짝 놀라게 하는 당신!, 아이디어가 뛰어나고 남다른 감각이 있어, 상대방에게 많은 이벤트를 해주는 스타일이에요. 연애할 때 눈치도 빠르고, 감동을 줄 수 있어 상대방이 매일 행복하답니다. 전체적으로 화려한 연애를 하지만, 은근히 비밀이 많고 우유부단한 성격을 가지고 있답니다. 또한 귀가 매우 얇아 남의 이야기를 곧이 곧대로 믿어, 상대방을 의심하기도 하기 때문에 조심해야 된답니다!",
  },
  {
    name: "나는 쓸모 없는 사람이야 < 결함의 덫 > ",
    desc: "연애할 때, 센스가 넘쳐나는 당신! 말재주가 뛰어나며 처세술이 뛰어나, 상대방의 호감을 금방 얻는답니다. 낙천적이고 유연한 성격을 가지고 있으며, 구속받는 것을 싫어하는 스타일이에요. 소중한 사람들을 위해 희생할 줄도 알지만, 쾌략 지향적인 경우가 많아 사치와 허영에 물드는 경우가 다반수입니다. 한탕 주의에 빠져 쉽게 망가질 수 있기 때문에 이 점을 주의해야 된답니다!",
  },
  {
    name: "난 실패자인것 같아 < 실패의 덫 > ",
    desc: "연애할 때 모든 걸 맞춰주려고 하는 당신! 다정한 느낌과 상냥한 모습을 가지고 있어, 상대방 입장에서 편안한 느낌을 받을 수 있답니다. 타오르는 연애보다는 안정적인 연애를 추구하고, 상대방에게 마음을 여는 순간 진심으로 사랑에 푹 빠질 수 있습니다. 또한 강인한 생존력과 수완이 좋으나, 한편으로는 자신이 원하는 바를 모두 쟁취하려는 고집이 있어요. 이 고집이 심해지면 다른 사람 눈에서는 계산적인 사람처럼 보여 매력을 잃을 수 있습니다!",
  },
  {
    name: "당신이 원하는 대로 할게요 < 복종의 덫 > ",
    desc: "지치고 힘들 때 언제나 행복을 주는 당신! 정말 끼가 많고 말재주가 많다보니 팔방미인이라는 소리를 많이 듣는 편이랍니다. 또한 다재다능하고 총명하여 어떤 일이든지 잘할 수 있고, 유머 감각도 뛰어나 주변 사람들이 많이 따르는 마당발 타입입니다. 연애할 때 상대방의 기분을 잘 맞춰주고 즐거운 분위기를 유지하나, 다소 본인의 체면을 중시하는 경향이 있어요. 이 점 때문에 잔머리를 굴리다 타인에게 교활하다는 인상을 주게 될 수도 있기 때문에 조금 조심하면 좋을 것 같아요!",
  },
  {
    name: "아직 많이 부족해 < 엄격한 기준의 덫 > ",
    desc: "깔끔한 연애를 추구하며 맺고 끊는 것이 확실한 당신! 단아하고 고고한 이미지를 가지고 있어 우아한 매력을 표출하는 편이랍니다. 집중력과 기억력이 좋아 상대방과 있었던 일들을 다 기억해주는 편이고, 겉으로는 무뚝뚝하나 은근히 감수성이 풍부하답니다. 다만 자신이 생각한 선을 벗어나면 냉소적으로 바뀌고, 평소 직설적인 편이라 차갑다는 인상을 많이 줄 수 있어요. 섬세한 사람이기 때문에 예민한 경우가 많으니 마음을 평안히 다스리고, 상대방에게 좀만 더 따뜻하게 대하면 좋을 것 같아요!",
  },
  {
    name: "내가 원하는 건 뭐든지 다 가질 수 있어 < 특권 의식의 덫 > ",
    desc: "애교쟁이 그 자체인 당신! 둥글둥글하게 처세를 잘 하고, 붙임성이 매우 좋아 사교성이 매우 뛰어난 편이랍니다. 또한 궁금한 것을 참지 못해 호기심이 많고, 강아지같이 상대방에게 찰싹 달라붙는 것을 좋아하는 스타일이에요. 성격이 매우 쾌활하나, 감정의 기복이 은근히 심해 상대방이 하는 말에 대해 크게 상처받는 편입니다. 또한 성격이 급한 경우가 많아, 차분하게 행동을 하지 못하는 편이기 때문에 이 점을 좀만 조심하면 좋을 것 같아요! ",
  },
];

// const QnaComponent = () => {
//   const endPoint = 22;
//   const [select, setSelect] = useState(Array(endPoint).fill(0));
//   const [qIdx, setQIdx] = useState(0);

//   const calResult = () => {
//     console.log("final select:", select);
//     const max = Math.max(...select);
//     const result = select.reduce((acc, cur, idx) => {
//       if (cur === max) acc.push(idx);
//       return acc;
//     }, []);
//     console.log("result", result);
//     return result;
//   };

//   const setResult = () => {
//     const point = calResult();
//     const resultName = document.querySelector(".resultname");
//     resultName.innerHTML = infoList[point].name;

//     const resultImg = document.createElement("img");
//     const imgDiv = document.querySelector("#resultImg");
//     const imgURL = `img/image-${point}.png`;
//     resultImg.src = imgURL;
//     resultImg.alt = point;
//     resultImg.classList.add("img-fluid");
//     imgDiv.appendChild(resultImg);

//     const resultDesc = document.querySelector(".resultDesc");
//     resultDesc.innerHTML = infoList[point].desc;
//   };

//   const goResult = () => {
//     const qna = document.querySelector("#qna");
//     const result = document.querySelector("#result");

//     qna.style.WebkitAnimation = "fadeOut 1s";
//     qna.style.animation = "fadeOut 1s";

//     setTimeout(() => {
//       result.style.WebkitAnimation = "fadeIn 1s";
//       result.style.animation = "fadeIn 1s";

//       setTimeout(() => {
//         qna.style.display = "none";
//         result.style.display = "block";
//       }, 450);
//       setResult();
//     }, 450);
//   };

//   const addAnswer = (answerText, qIdx, idx) => {
//     const answerClickHandler = () => {
//       const target = qnaList[qIdx].a[idx].type;
//       const updatedSelect = [...select];
//       if (target !== null) {
//         for (let i = 0; i < target.length; i++) {
//           updatedSelect[target[i]] += 1;
//         }
//       }
//       setSelect(updatedSelect);
//       console.log("Updated Select:", updatedSelect);
//       goNext(qIdx + 1);
//     };

//     return (
//       <button
//         className="answerList my-3 py-3 mx-auto fadeIn"
//         onClick={answerClickHandler}
//       >
//         {answerText}
//       </button>
//     );
//   };

//   const goNext = (qIdx) => {
//     if (qIdx === endPoint) {
//       goResult();
//       return;
//     }

//     const q = document.querySelector(".qBox");
//     q.innerHTML = qnaList[qIdx].q;

//     // Use map to render each answer with the AnswerComponent
//     const answers = qnaList[qIdx].a.map((answer, idx) => (
//       <AnswerComponent
//         key={idx}
//         answerText={answer.answer}
//         qIdx={qIdx}
//         idx={idx}
//       />
//     ));

//      const rootElement = document.querySelector(".answerBox");
//     const root = createRoot(rootElement);
//     root.render(answers);

//     const status = document.querySelector(".statusBar");
//     status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

//     setQIdx(qIdx);
//   };

//   const AnswerComponent = ({ answerText, qIdx, idx }) => {
//     return addAnswer(answerText, qIdx, idx);
//   };

//   const begin = () => {
//     const main = document.querySelector("#main");
//     const qna = document.querySelector("#qna");

//     main.style.WebkitAnimation = "fadeOut 1s";
//     main.style.animation = "fadeOut 1s";

//     setTimeout(() => {
//       qna.style.WebkitAnimation = "fadeIn 1s";
//       qna.style.animation = "fadeIn 1s";

//       setTimeout(() => {
//         main.style.display = "none";
//         qna.style.display = "block";
//       }, 450);

//       goNext(0);
//     }, 450);
//   };

const QnaComponent = () => {
  const endPoint = 22;
  const [select, setSelect] = useState(Array(endPoint).fill(0));
  const [qIdx, setQIdx] = useState(0);
  const [question, setQuestion] = useState(null);
  const [answers, setAnswers] = useState([]);

  const calResult = () => {
    console.log("final select:", select);
    const max = Math.max(...select);
    const result = select.reduce((acc, cur, idx) => {
      if (cur === max) acc.push(idx);
      return acc;
    }, []);
    console.log("result", result);
    return result;
  };

  const setResult = () => {
    const points = calResult();
    const resultContainer = document.querySelector("#result");
    resultContainer.innerHTML = ""; // 기존 결과를 비웁니다.

    points.forEach((point) => {
      if (infoList[point]) {
        const resultSection = document.createElement("div");

        const resultName = document.createElement("h3");
        resultName.innerHTML = infoList[point].name;
        resultSection.appendChild(resultName);

        const resultImg = document.createElement("img");
        const imgURL = `img/image-${point}.png`;
        resultImg.src = imgURL;
        resultImg.alt = point;
        resultImg.classList.add("img-fluid");
        resultSection.appendChild(resultImg);

        const resultDesc = document.createElement("p");
        resultDesc.innerHTML = infoList[point].desc;
        resultSection.appendChild(resultDesc);

        resultContainer.appendChild(resultSection);
      } else {
        // 적절한 오류 처리
        const errorMessage = document.createElement("p");
        errorMessage.innerHTML = "알 수 없는 결과";
        resultContainer.appendChild(errorMessage);
      }
    });
  };

  //   const setResult = () => {
  //     const point = calResult()[0];
  //     const resultName = document.querySelector(".resultname");

  //     if (infoList[point]) {
  //       resultName.innerHTML = infoList[point].name;

  //       const resultImg = document.createElement("img");
  //       const imgDiv = document.querySelector("#resultImg");
  //       const imgURL = `img/image-${point}.png`;
  //       resultImg.src = imgURL;
  //       resultImg.alt = point;
  //       resultImg.classList.add("img-fluid");
  //       imgDiv.appendChild(resultImg);

  //       const resultDesc = document.querySelector(".resultDesc");
  //       resultDesc.innerHTML = infoList[point].desc;
  //     } else {
  //       // 적절한 오류 처리
  //       resultName.innerHTML = "알 수 없는 결과";
  //     }
  //   };

  //   const setResult = ()[0] => {
  //     const point = calResult();
  //     const resultName = document.querySelector(".resultname");
  //     resultName.innerHTML = infoList[point].name;

  //     const resultImg = document.createElement("img");
  //     const imgDiv = document.querySelector("#resultImg");
  //     const imgURL = `img/image-${point}.png`;
  //     resultImg.src = imgURL;
  //     resultImg.alt = point;
  //     resultImg.classList.add("img-fluid");
  //     imgDiv.appendChild(resultImg);

  //     const resultDesc = document.querySelector(".resultDesc");
  //     resultDesc.innerHTML = infoList[point].desc;
  //   };

  const goResult = () => {
    const qna = document.querySelector("#qna");
    const result = document.querySelector("#result");

    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";

    setTimeout(() => {
      result.style.WebkitAnimation = "fadeIn 1s";
      result.style.animation = "fadeIn 1s";

      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
      }, 450);
      setResult();
    }, 450);
  };

  useEffect(() => {
    if (qIdx === endPoint) {
      goResult();
    } else {
      const q = qnaList[qIdx].q;
      const answerElements = qnaList[qIdx].a.map((answer, idx) =>
        addAnswer(answer.answer, qIdx, idx)
      );

      setQuestion(q);
      setAnswers(answerElements);
      const status = document.querySelector(".statusBar");
      status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;
    }
  }, [qIdx]);

  const addAnswer = (answerText, qIdx, idx) => {
    const handleClick = () => {
      const target = qnaList[qIdx].a[idx].type;
      const updatedSelect = [...select];
      if (target !== null) {
        for (let i = 0; i < target.length; i++) {
          updatedSelect[target[i]] += 1;
        }
      }
      setSelect(updatedSelect);
      console.log("Updated Select:", updatedSelect);

      goNext(qIdx + 1);
    };

    return (
      <button
        key={idx}
        className="answerList my-3 py-3 mbutton mx-auto fadeIn"
        onClick={handleClick}
      >
        {answerText}
      </button>
    );
  };

  const goNext = (qIdx) => {
    if (qIdx === endPoint) {
      goResult();
      return;
    }

    const q = document.querySelector(".qBox");
    q.innerHTML = qnaList[qIdx].q;
    const answerElements = qnaList[qIdx].a.map((answer, idx) =>
      addAnswer(answer.answer, qIdx, idx)
    );

    const status = document.querySelector(".statusBar");
    status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

    setQIdx(qIdx);
    return answerElements;
  };

  // const addAnswer = (answerText, qIdx, idx) => {
  //   const a = document.querySelector(".answerBox");
  //   const answer = document.createElement("button");
  //   answer.classList.add("answerList");
  //   answer.classList.add("my-3");
  //   answer.classList.add("py-3");
  //   answer.classList.add("mx-auto");
  //   answer.classList.add("fadeIn");

  //   a.appendChild(answer);
  //   answer.innerHTML = answerText;

  //   answer.addEventListener(
  //     "click",
  //     () => {
  //       const children = document.querySelectorAll(".answerList");
  //       for (let i = 0; i < children.length; i++) {
  //         children[i].disabled = true;
  //         children[i].style.WebkitAnimation = "fadeOut 0.5s";
  //         children[i].style.animation = "fadeOut 0.5s";
  //       }
  //       setTimeout(() => {
  //         const target = qnaList[qIdx].a[idx].type;
  //         const updatedSelect = [...select];
  //         if (target !== null) {
  //           for (let i = 0; i < target.length; i++) {
  //             updatedSelect[target[i]] += 1;
  //           }
  //         }
  //         setSelect(updatedSelect);
  //         console.log("Updated Select:", updatedSelect);
  //         for (let i = 0; i < children.length; i++) {
  //           children[i].style.display = "none";
  //         }
  //         goNext(qIdx + 1);
  //       }, 450);
  //     },
  //     false
  //   );
  // };

  // const goNext = (qIdx) => {
  //   if (qIdx === endPoint) {
  //     goResult();
  //     return;
  //   }

  //   const q = document.querySelector(".qBox");
  //   q.innerHTML = qnaList[qIdx].q;
  //   for (let i in qnaList[qIdx].a) {
  //     addAnswer(qnaList[qIdx].a[i].answer, qIdx, i);
  //   }
  //   const status = document.querySelector(".statusBar");
  //   status.style.width = `${(100 / endPoint) * (qIdx + 1)}%`;

  //   setQIdx(qIdx);
  // };

  const begin = () => {
    const main = document.querySelector("#main");
    const qna = document.querySelector("#qna");

    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";

    setTimeout(() => {
      qna.style.WebkitAnimation = "fadeIn 1s";
      qna.style.animation = "fadeIn 1s";

      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
      }, 450);

      goNext(0);
    }, 450);
  };

    return (
      <header className="masthead">
        <div className="container px-4 px-lg-5 h-100">
          <div className="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center" >
            <section id="main" className="qna-section bg-transparent text-white" >
              <h1
                className="text-white font-weight-bold"
                style={{ fontSize: "30px" }}
              >
                내 마음 속 "덫" 찾기
              </h1>
              <hr className="qna-divider-light"/>
               <p className="text-white">
                나의 마음 속에는 어떤 마음의 덫이 있을까요?<br/>
                아래 시작하기 버튼을 눌러 시작해 주십시오.
              </p><br/>
              <button
                type="button"
                className="btn btn-primary btn-xl"
                onClick={begin}
              >
                시작하기
              </button>
            </section>

            <section id="qna">
              <div className="qBox my-5 py-3 mx-auto">{question}</div>
              <div className="answerBox">{answers}</div>
              <div className="status mx-auto mt-5">
                <div className="statusBar"></div>
              </div>
            </section>
            <section id="result" className="mx-auto my-5 py-5 px-3">
              <h1>당신의 마음속 덫은?</h1>
              <div className="resultname"></div>
              <div
                id="resultImg"
                className="my-3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto"
              ></div>
              <div className="resultDesc"></div>
              <button
                type="button"
                className="kakao mt-3 py-2 px-3"
                //   onClick={/* Your share function */ }
              >
                공유하기
              </button>
            </section>
        </div>
        </div>
      </header>
    );
};

export default QnaComponent;
