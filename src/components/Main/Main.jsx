import { useState, useEffect } from "react";
import { cardList } from "../../data";
import { Column } from "../Column/Column";
import * as S from "./Main.styled";
import { Container } from "../Styles/globalStyles";


export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 500);
  }, []);

  const columns = [
    { title: 'Без статуса' },
    { title: 'Нужно сделать' },
    { title: 'В работе' },
    { title: 'Тестирование' },
    { title: 'Готово' },
  ];
  
  return (
    <S.main>
      <Container>
        <S.mainBlock>
          <S.mainContent>
          {isLoading ? (<S.loadingText>Данные загружаются...</S.loadingText>) : ( columns.map((column) => 
            (
              <Column
                key={column.title}
                title={column.title}
                cards={cardList.filter((card) => card.status === column.title)}
                
                />
            )))}
          </S.mainContent>

        </S.mainBlock>
      </Container>
    </S.main>
  );
};
