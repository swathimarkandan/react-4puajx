import "./styles.css";
import React from 'react';
import { useState, useEffect } from "react";
import Cardshift from "./Cardshift.js";
const image = [
  { src: "https://wallpapercave.com/wp/wp10937815.png", matched: false, id: 1 },
  { src: "https://wallpapercave.com/wp/wp2837200.jpg", matched: false, id: 2 },
  {
    src:
      "https://www.shutterstock.com/image-vector/illustration-beautiful-girl-dressed-ball-260nw-631129706.jpg",
    matched: false,
    id: 3
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMP1ftwKtwDgV2WO-0WZopny2vuFpk135uaKYHNpmg-8fOTKu4t3qNa9xEQlu9HBEBbZ4&usqp=CAU",
    matched: false,
    id: 4
  },
  {
    src:
      "https://img.freepik.com/premium-vector/cinderella-cartoon-illustration_23-2148528107.jpg?w=2000",
    matched: false,
    id: 5
  },
  {
    src:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/11/111746/4351929-637-cinderella_label1.jpg",
    matched: false,
    id: 6
  },
  { src: "https://wallpapercave.com/wp/wp10937815.png", matched: false, id: 7 },
  { src: "https://wallpapercave.com/wp/wp2837200.jpg", matched: false, id: 8 },
  {
    src:
      "https://www.shutterstock.com/image-vector/illustration-beautiful-girl-dressed-ball-260nw-631129706.jpg",
    matched: false,
    id: 9
  },
  {
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMP1ftwKtwDgV2WO-0WZopny2vuFpk135uaKYHNpmg-8fOTKu4t3qNa9xEQlu9HBEBbZ4&usqp=CAU",
    matched: false,
    id: 10
  },
  {
    src:
      "https://img.freepik.com/premium-vector/cinderella-cartoon-illustration_23-2148528107.jpg?w=2000",
    matched: false,
    id: 11
  },
  {
    src:
      "https://comicvine.gamespot.com/a/uploads/scale_medium/11/111746/4351929-637-cinderella_label1.jpg",
    matched: false,
    id: 12
  }
];

export default function App() {
  const [shuffledcards, setShuffledcards] = useState([]);
  const [turn, setTurn] = useState(0);
  const [firstChoice, setFirstchoice] = useState(null);
  const [secondChoice, setSecondchoice] = useState(null);
  const [disable, setDisable] = useState(false);

  function shuffleimg() {
    const wholeimages = [...image];
    wholeimages.sort(() => Math.random() - 0.5);
    //.map((card) => ({ ...card, id: Math.random() * 12 }));
    setSecondchoice(null);
    setFirstchoice(null);
    setShuffledcards(wholeimages);
    setTurn(0);
  }
  //when img clicked

  function onClickedtheImg(cards) {
    // console.log(cards);
    firstChoice ? setSecondchoice(cards) : setFirstchoice(cards);
    //if first is null it will be false ,so else part execute;
  }
  useEffect(() => {
    //setFilter(true);
    if (firstChoice && secondChoice) {
      setDisable(true);
      if (firstChoice.src === secondChoice.src) {
        //...
        setShuffledcards((prevCards) => {
          //...
          return prevCards.map((flip) => {
            if (flip.src === firstChoice.src) {
              return { ...flip, matched: true };
            } else {
              return flip;
            }
          });
          //....
        });
        //..
        console.log(shuffledcards);
        reset();
        //console.log("matched");
      } else {
        console.log("notmatched");
        setTimeout(() => {
          reset();
        }, 1000);
      }
    }
  }, [firstChoice, secondChoice]);
  const reset = () => {
    setFirstchoice(null);
    setSecondchoice(null);
    setTurn((prefun) => prefun + 1);
    setDisable(false);
  };
  console.log(shuffledcards);
  return (
    <>
      <div className="App">
        <div className="turn">Magic box</div>
        <button onClick={() => shuffleimg()}>NewStart</button>
        <div className="image-grid">
          {shuffledcards.map((cards) => (
            <Cardshift
              key={cards.id}
              cards={cards}
              onClickedtheImg={onClickedtheImg}
              filters={
                cards.matched || cards === firstChoice || cards === secondChoice
              }
              disable={disable}
            />
          ))}
        </div>
        <p className="turn">Turn {turn}</p>
      </div>
      {/* <div>
        {shuffledcards.map((c) => {
          return <p key={c.id}>{c.matched}</p>;
        })}
      </div> */}
    </>
  );
}
