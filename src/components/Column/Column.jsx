import { Card } from "../Card/Card";
import * as S from "./Column.styled"

export const Column = ({ title, cards }) => {
    return (
  <S.mainColumn>
    <S.columnTitle>
      <p>{ title }</p>
    </S.columnTitle>
    <S.cards>
      {cards.map((card) => (    
   
        <Card
          key={card.id}
          id={card.id}
          theme={card.theme}
          title={card.title}
          date={card.date}         
        /> 
      ))} 
    </S.cards>
  </S.mainColumn>
    );
};



