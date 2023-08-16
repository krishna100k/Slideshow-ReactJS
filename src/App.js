import { useState } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);

  let data = [
    {
      title: "Today's workout plan",
      text: "We're gonna do 3 fundamental exercises."
    },
    {
      title: "First, 10 push-ups",
      text: "Do 10 reps. Remember about full range of motion. Don't rush."
    },
    {
      title: "Next, 20 squats",
      text: "Squats are important. Remember to keep your back straight."
    },
    {
      title: "Finally, 15 sit-ups",
      text: "Slightly bend your knees. Remember about full range of motion."
    },
    {
      title: "Great job!",
      text: "You made it, have a nice day and see you next time!"
    }
  ];

  const nextHandler = () => {
    if (counter < data.length - 1) setCounter(counter + 1);
  };

  const prevHandler = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const restartHandler = () => {
    setCounter(0);
  };

  const prevDisabled = counter === 0;
  const nextDisabled = counter === data.length - 1;

  return (
    <div className="App">
      <div className="buttons">
        <button onClick={restartHandler} disabled={prevDisabled}>
          Restart
        </button>
        <button onClick={prevHandler} disabled={prevDisabled}>
          Previous
        </button>
        <button onClick={nextHandler} disabled={nextDisabled}>
          Next
        </button>
      </div>
      <div className="slide">
        <h1>{data[counter].title}</h1>
        <p>{data[counter].text}</p>
      </div>
    </div>
  );
}
