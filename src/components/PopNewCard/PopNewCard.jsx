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

  const [errors, setErrors] = useState({
    title: false,
    topic: false,
    description: false,
    date: false,
  });

  const [error, setError] = useState("");

  const validateForm = () => {
    const newErrors = {
      title: false,
      topic: false,
      description: false,
      date: false,
    };
    let isValid = true;

    if (!formData.title?.trim()) {
      newErrors.title = true;
      setError("Поле не может быть пустым или содержать только пробелы");
      isValid = false;
    }

    const trimmedDescription = formData.description?.trim() || "";

    if (!trimmedDescription) {
      newErrors.description = true;
      setError("Поле не может быть пустым или содержать только пробелы");
      isValid = false;
    } else if (trimmedDescription.length < 5) {
      newErrors.description = true;
      setError("Текст описания не может быть короче 5 символов");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    const checkErrors = Object.values(errors).some(Boolean);
    if (!checkErrors) {
      setError("");
    }
  };

  const handleCreateTask = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const taskData = {
        title: formData.title,
        topic: formData.topic,
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
            <S.error>{error}</S.error>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" onSubmit={handleCreateTask}>
                <S.FormContentWrapper>
                  <S.FormLeftColumn>
                    <S.FormNewBlock>
                      <S.Subtitle htmlFor="formTitle">
                        Название задачи
                      </S.Subtitle>
                      <S.FormNewInput
                        $error={errors.title}
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
                        $error={errors.description}
                        name="description"
                        id="textArea"
                        placeholder="Введите описание задачи..."
                        value={formData.description}
                        onChange={handleInputChange}
                      ></S.FormNewArea>
                    </S.FormNewBlock>

                    <S.FormNewBlock>
                      <S.CategoriesWrapper>
                        <S.Subtitle>Категория</S.Subtitle>
                        <S.CategoriesThemes>
                          <S.CategoriesTheme
                            className="orange"
                            $active={formData.topic === "Web Design"}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                topic: "Web Design",
                              })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <p>Web Design</p>
                          </S.CategoriesTheme>
                          <S.CategoriesTheme
                            className="green"
                            $active={formData.topic === "Research"}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                topic: "Research",
                              })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <p>Research</p>
                          </S.CategoriesTheme>
                          <S.CategoriesTheme
                            className="purple"
                            $active={formData.topic === "Copywriting"}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                topic: "Copywriting",
                              })
                            }
                            style={{ cursor: "pointer" }}
                          >
                            <p>Copywriting</p>
                          </S.CategoriesTheme>
                        </S.CategoriesThemes>
                      </S.CategoriesWrapper>
                    </S.FormNewBlock>
                  </S.FormLeftColumn>
                  <S.FormRightColumn>
                    <S.FormWithCalendar>
                      <Calendar />
                    </S.FormWithCalendar>
                  </S.FormRightColumn>
                </S.FormContentWrapper>
                <S.FormNewCreate
                  type="submit"
                  disabled={Object.values(errors).some(Boolean)}
                >
                  Создать задачу
                </S.FormNewCreate>
              </S.PopNewCardForm>
            </S.PopNewCardWrap>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCardWrapper>
  );
};
