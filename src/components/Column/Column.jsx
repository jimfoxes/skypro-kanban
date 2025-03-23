import { Card } from "../Card/Card";

export const Column = ({ title, cards }) => {
    return (
  <div className="main__column column">
    <div className="column__title">
      <p>{ title }</p>
    </div>
    <div className="cards">
      {cards.map((card) => (    
   
        <Card
          key={card.id}
          theme={card.theme}
          title={card.title}
          date={card.date} 
        
        /> 
      ))} 
    </div>
  </div>
    );
};



