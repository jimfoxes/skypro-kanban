import { useState, useEffect } from "react";
import { cardList } from "../../data";
import { Column } from "../Column/Column";



export const Main = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Через 2 секунды "загрузка" завершается
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
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
          {isLoading ? (<div className="loading-text">Данные загружаются...</div>) : ( columns.map((column) => 
            (
              <Column
                key={column.title}
                title={column.title}
                cards={cardList.filter((card) => card.status === column.title)}
                
                />
            )))}
          </div>

        </div>
      </div>
    </main>
  );
};
