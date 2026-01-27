import { formatDateToDDMMYY } from "../../utils/dateToddmmyy";
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
          key={card._id}
          id={card._id}
          theme={card.topic}
          title={card.title}
          date={formatDateToDDMMYY(card.date)}         
        /> 
      ))} 
    </S.cards>
  </S.mainColumn>
    );
};



