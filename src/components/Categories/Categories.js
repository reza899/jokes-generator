import React, { useState, useEffect } from "react";
import http from "../../service/httpService";
import JokeDisplay from "../JokeDisplay/JokeDisplay";
import classes from "./Categories.module.css";

const API_URL = "https://api.chucknorris.io/jokes/categories";
const Categories = () => {
  const [cat, setCat] = useState("");
  const [catSelected, setCatSelected] = useState("");

  useEffect(() => {
    http.get(API_URL).then((res) => {
      console.log(res.data);
      const { data } = res;
      console.log(data);
      let catArray = data.map((e) => {
        return { value: e, display: e };
      });

      setCat({ cat: [{ value: "", display: "Select" }].concat(catArray) });
    });
  }, []);

  return (
    <div>
      <div className={classes.inputSelectArea}>
        <span>Category: </span>
        <select
          className={classes.inputSelect}
          onChange={(e) => setCatSelected(e.target.value)}
          value={catSelected}
        >
          {cat.cat != null
            ? cat.cat.map((e) => (
                <option key={e.value} value={e.value}>
                  {e.display}
                </option>
              ))
            : null}
        </select>
      </div>
      <div>
        <JokeDisplay
          apiurl={`https://api.chucknorris.io/jokes/random?category=${catSelected}`}
        />
      </div>
    </div>
  );
};

export default Categories;
