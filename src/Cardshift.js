import './styles.css';
import React from 'react';
export default function Cardshift({
  cards,
  onClickedtheImg,
  filters,
  disable,
}) {
  const onClicked = () => {
    if (!disable) onClickedtheImg(cards);
  };

  // const reffer = useRef("");
  //console.log(reffer);
  return (
    <>
      <div className="image-container">
        <div className={filters ? 'flipp' : ''}>
          <img src={cards.src} className="inside" />
          <img
            src="https://i.pinimg.com/236x/12/b7/68/12b7684d9f72cad79b4825f97aebdadf--rainbow-colours-neon-colors.jpg"
            className="front"
            onClick={onClicked}
          />
        </div>
      </div>
    </>
  );
}
