import React from "react";
// import "@/assets/plants.png"; // Verify the file location
// import "@/assets/fern-1250903.jpg"; // Verify the file location


const TestStartPage = (props) => {
  const start = () => {
    // Add logic for initializing the store
    props.history.push("/plant-test-view"); // Update the route path according to your project
  };

  return (
    <header className="masthead">
      <body style={{ padding: "10% 10%" }}>
        <div className="container">
          <section id="main" className="mx-auto my-5 py-5 px-3">
            <h1>내가 걸린 마음의 덫은?</h1>
            <div className="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto">
              <img
                src="/assets/plants.png" // Verify the file location
                alt="mainImage"
                className="img-fluid"
              />
            </div>
            <p>
              내가 걸려있는 삶의 덫은 무엇일까? <br />
              마음 진단하고 평화로운 마음을 얻어보세요!
            </p>
            <button type="button" className="btn btn-warning" onClick={start}>
              시작하기
            </button>
          </section>
        </div>
      </body>
    </header>
  );
};

export default TestStartPage;

const style = `
#main {
  background-color: whitesmoke;
  width: 80%;
  text-align: center;
  border-radius: 20px;
  left: 50%;
  top: 50%;
}

h1 {
  font-size: 42px;
  padding-top: 20px;
}

.container img {
  padding: 10% 30% 10% 30%;
}

p {
  font-size: 23px;
}

button {
  margin-top: 5px;
}

.container .main .img-fluid {
  width: 100px;
  height: 200px;
}

body {
  background-image: url("./asset/bg-masthead.jpg"); 

`;

const styleElement = document.createElement("style");
styleElement.innerHTML = style;
document.head.appendChild(styleElement);
