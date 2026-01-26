import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./PopNewCard.styled";
import { Calendar } from "../Calendar/Calendar";
import { TasksContext } from "../../context/TasksContext";

export const PopNewCard = () => {
  const { addNewTask } = useContext(TasksContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    topic: "",
    description: "",
    date: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Заполните название задачи");
      return;
    }

    try {
      const taskData = {
        title: formData.title,
        //topic: "",
        //status: "",
        description: formData.description,
        //date: "",
      };

      await addNewTask({ task: taskData });
      navigate(-1);
    } catch (error) {
      console.error("Ошибка создания задачи", error);
      alert("Не удалось создать задачу");
    }
  };

  return (
    <S.PopNewCardWrapper id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
            <S.PopNewCardClose to={-1}>&#10006;</S.PopNewCardClose>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" onSubmit={handleCreateTask}>
                <S.FormContentWrapper>
                  <S.FormLeftColumn>
                    <S.FormNewBlock>
                      <S.Subtitle htmlFor="formTitle">
                        Название задачи
                      </S.Subtitle>
                      <S.FormNewInput
                        type="text"
                        name="title"
                        id="formTitle"
                        placeholder="Введите название задачи..."
                        value={formData.title}
                        onChange={handleInputChange}
                        autoFocus
                      />
                    </S.FormNewBlock>
                    <S.FormNewBlock>
                      <S.Subtitle htmlFor="textArea">
                        Описание задачи
                      </S.Subtitle>
                      <S.FormNewArea
                        name="description"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        value={formData.description}
                        onChange={handleInputChange}
                      ></S.FormNewArea>
                    </S.FormNewBlock>
                  </S.FormLeftColumn>
                  <S.FormRightColumn>
                    <S.FormWithCalendar>
                      <Calendar />
                    </S.FormWithCalendar>
                  </S.FormRightColumn>
                </S.FormContentWrapper>
                <S.FormNewCreate type="submit">Создать задачу</S.FormNewCreate>
              </S.PopNewCardForm>
            </S.PopNewCardWrap>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
};
