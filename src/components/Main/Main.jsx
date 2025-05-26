import { Column } from "../Column/Column";
import * as S from "./Main.styled";
import { Container } from "../Styles/globalStyles";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";


export const Main = () => {
  const { tasks, loading} = useContext(TasksContext); 
  console.log(tasks)

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
          {loading ? (<S.loadingText>Данные загружаются...</S.loadingText>) : ( columns.map((column) => 
            (
              <Column
                key={column.title}
                title={column.title}
                cards={tasks.filter((task) => task.status === column.title)}
                
                />
            )))}
          </S.mainContent>

        </S.mainBlock>
      </Container>
    </S.main>
  );
};
