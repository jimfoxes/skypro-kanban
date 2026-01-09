import { Column } from "../Column/Column";
import * as S from "./Main.styled";
import { Container } from "../Styles/globalStyles";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";


export const Main = () => {
  const { tasks, loading, error } = useContext(TasksContext); 
  console.log(tasks)

  if (error) {
    return <ErrorMessage>Ошибка загрузки данных</ErrorMessage>;
  }
  
  // Состояние загрузки
  if (loading) {
    return (
      <S.main>
        <Container>
          <S.mainBlock>
            <S.loadingText>Загрузка задач...</S.loadingText>
          </S.mainBlock>
        </Container>
      </S.main>
    );
  }
  
  // Если tasks пуст, но не загружается
  if (!tasks || tasks.length === 0) {
    return (
      <S.main>
        <Container>
          <S.mainBlock>
            <S.loadingText>Нет задач</S.loadingText>
          </S.mainBlock>
        </Container>
      </S.main>
    );
  }

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
          { columns.map((column) => 
            (
              <Column
                key={column.title}
                title={column.title}
                cards={tasks.filter((task) => task.status === column.title)}
                
                />
            ))}
          </S.mainContent>

        </S.mainBlock>
      </Container>
    </S.main>
  );
};
