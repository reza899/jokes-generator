import React, { useState } from "react";
import http from "../../service/httpService";
import { FaBattleNet } from "react-icons/fa";
import classes from "./JokeDisplay.module.css";

const JokeDisplay = (props) => {
  const [joke, setJoke] = useState("");

  const generateJoke = async () => {
    const joke = await http.get(props.apiurl ? props.apiurl : "/");
    setJoke(joke.data.value);
  };
  // useEffect(() => {
  //   generateJoke();
  // }, []);

  return (
    <div className={classes.box}>
      <h2>
        <FaBattleNet /> Joke Generator
      </h2>
      <div className={classes.text}>
        {joke ? joke : <p>select a category</p>}
      </div>
      <button onClick={generateJoke}>Get a JOKE</button>
    </div>
  );
};

export default JokeDisplay;
