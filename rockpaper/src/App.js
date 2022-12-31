import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼 3개
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 3, 4의 결과를 가지고 누가 이겼는지 승패를 따짐
// 6. 승패 결과에 따라 테두리 색 변경 (이김: 초록, 짐: 빨강, 비김: 검정)

const choice = {
  rock:{
    name:"Rock",
    img:"https://cdn-icons-png.flaticon.com/512/3562/3562093.png"
  },
  scissors:{
    name:"Scissors",
    img:"https://cdn-icons-png.flaticon.com/512/4161/4161804.png"
  },
  paper:{
    name:"Paper",
    img:"https://cdn-icons-png.flaticon.com/512/7467/7467471.png"
  }
}

function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setcomputerSelect] = useState(null);
  const [result, setResult] = useState("");
  const [computerResult, setcomputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setcomputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
    setcomputerResult(computerJudgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);

    // user == computer : tie / user = rock, computer = scissors : win / user = rock, computer = paper : lose ...

    if(user.name == computer.name) {
      return "tie";
    } else if(user.name == "Rock") return computer.name=="Scissors"?"win":"lose"
    else if(user.name == "Scissors") return computer.name=="Paper"?"win":"lose"
    else if(user.name == "Paper") return computer.name=="Rock"?"win":"lose" 
  };

  const computerJudgement = (user, computer) => {
    
    if(user.name == computer.name) {
      return "tie";
    } else if(user.name == "Rock") return computer.name=="Scissors"?"lose":"win"
    else if(user.name == "Scissors") return computer.name=="Paper"?"lose":"win"
    else if(user.name == "Paper") return computer.name=="Rock"?"lose":"win" 
  };

  const randomChoice = () =>{
    let itemArray = Object.keys(choice); // 객체에 키 값만 뽑아서 Arrya 만들어주는 함수
    console.log("item array", itemArray);

    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log(randomItem);

    let final = itemArray[randomItem];
    return choice[final];
  };
 
  return (
    <div>
      <div className='main'>
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={computerResult}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
