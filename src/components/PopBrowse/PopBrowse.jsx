import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "../Calendar/Calendar";
import { Link } from "react-router-dom";
import * as S from "./PopBrowse.styled";
import { TasksContext } from "../../context/TasksContext";

export const PopBrowse = ({ card, loading, id }) => {
  const { deleteTask, updateTask } = useContext(TasksContext);
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [editData, setEditData] = useState({
    title: card?.title || "",
    topic: card?.topic || "",
    status: card?.status || "",
    description: card?.description || "",
    date: card?.date || "",
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

    const trimmedDescription = editData.description?.trim() || "";

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
    setEditData({
      ...editData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    const checkErrors = Object.values(errors).some(Boolean);
    if (!checkErrors) {
      setError("");
    }
  };

  const handleDelTask = async (e) => {
    e.preventDefault();

    try {
      await deleteTask(id);
      navigate(-1);
    } catch (error) {
      console.error("Ошибка удаления задачи", error);
      alert("Не удалось удалить задачу");
    }
  };

  const handleEditTask = async (e) => {
    e.preventDefault();
    setIsEdit(true);
    if (card) {
      setEditData({ description: card.description, status: card.status });
    }
  };

  const handleCancelEdit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    setEditData({
      title: card?.title || "",
      topic: card?.topic || "",
      status: card?.status || "",
      description: card?.description || "",
      date: card?.date || "",
    });
    setErrors({
      title: false,
      topic: false,
      description: false,
      date: false,
    });
    setError("");
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    try {
      const taskData = {
        title: card.title,
        topic: card.topic,
        status: editData.status,
        description: editData.description,
        date: card.date,
      };
      console.log("Отправляемые данные:", taskData);

      await updateTask({
        id,
        task: taskData,
      });

      setIsEdit(false);
    } catch (error) {
      console.error("Ошибка изменения задачи", error);
      alert("Не удалось изменить задачу");
    }
  };

  const handleClose = (e) => {
    e.preventDefault();
    const hasChanges =
      editData.status !== card?.status ||
      editData.description !== card?.description;

    if (isEdit && hasChanges) {
      const userConfirmed = confirm(
        "Вы внесли изменения. Действительно ли вы хотите закрыть карточку без сохранения?",
      );

      if (!userConfirmed) {
        return;
      }
    }

    navigate(-1);
  };

  return (
    <S.PopBrowseWrapper>
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            {loading ? (
              <S.LoadingText>Карточка открывается...</S.LoadingText>
            ) : !card ? (
              <S.LoadingText>Карточка не найдена</S.LoadingText>
            ) : (
              <>
                <S.PopBrowseTopBlock>
                  <S.PopBrowseTitle>{card.title}</S.PopBrowseTitle>
                  <S.CategoryTheme
                    $theme={card.topic}
                    $active
                    className="theme-top"
                  >
                    <p>{card.topic}</p>
                  </S.CategoryTheme>
                </S.PopBrowseTopBlock>
                <S.StatusWrapper>
                  <S.StatusParagraph>
                    <S.Subtitle>Статус</S.Subtitle>
                  </S.StatusParagraph>
                  <S.StatusThemes>
                    {isEdit ? (
                      <>
                        <S.StatusTheme
                          $gray={editData.status === "Без статуса"}
                          onClick={() =>
                            setEditData({ ...editData, status: "Без статуса" })
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <p>Без статуса</p>
                        </S.StatusTheme>
                        <S.StatusTheme
                          $gray={editData.status === "Нужно сделать"}
                          onClick={() =>
                            setEditData({
                              ...editData,
                              status: "Нужно сделать",
                            })
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <p>Нужно сделать</p>
                        </S.StatusTheme>
                        <S.StatusTheme
                          $gray={editData.status === "В работе"}
                          onClick={() =>
                            setEditData({ ...editData, status: "В работе" })
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <p>В работе</p>
                        </S.StatusTheme>
                        <S.StatusTheme
                          $gray={editData.status === "Тестирование"}
                          onClick={() =>
                            setEditData({ ...editData, status: "Тестирование" })
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <p>Тестирование</p>
                        </S.StatusTheme>
                        <S.StatusTheme
                          $gray={editData.status === "Готово"}
                          onClick={() =>
                            setEditData({ ...editData, status: "Готово" })
                          }
                          style={{ cursor: "pointer" }}
                        >
                          <p>Готово</p>
                        </S.StatusTheme>
                      </>
                    ) : (
                      <S.StatusTheme $gray>
                        <p>{card.status}</p>
                      </S.StatusTheme>
                    )}
                  </S.StatusThemes>
                </S.StatusWrapper>
                
                <S.PopBrowseWrap>
                  <S.PopBrowseForm id="formBrowseCard" action="#">
                    <S.FormBrowseBlock>
                      <label htmlFor="textArea01">
                        <S.Subtitle>Описание задачи</S.Subtitle>
                      </label>
                      <S.error>{error}</S.error>
                      <S.FormBrowseArea
                        $error={errors.description}
                        name="description"
                        id="textArea01"
                        value={isEdit ? editData.description : card.description}
                        onChange={handleInputChange}
                        readOnly={!isEdit}
                        placeholder="Введите описание задачи..."
                      ></S.FormBrowseArea>
                    </S.FormBrowseBlock>
                  </S.PopBrowseForm>
                  <Calendar />
                </S.PopBrowseWrap>
                <S.ThemeDown>
                  <S.Subtitle>Категория</S.Subtitle>
                  <S.CategoryTheme $orange $active>
                    <p>{card.topic}</p>
                  </S.CategoryTheme>
                </S.ThemeDown>
                {!isEdit && (
                  <S.ButtonActions className="pop-browse__btn-browse">
                    <S.ButtonGroup>
                      <S.ButtonBrowse $bordered $group>
                        <a href="#" onClick={handleEditTask}>
                          Редактировать задачу
                        </a>
                      </S.ButtonBrowse>
                      <S.ButtonBrowse $bordered $group>
                        <a href="#" onClick={handleDelTask}>
                          Удалить задачу
                        </a>
                      </S.ButtonBrowse>
                    </S.ButtonGroup>
                    <S.ButtonBrowse>
                      <Link to={-1}>Закрыть</Link>
                    </S.ButtonBrowse>
                  </S.ButtonActions>
                )}
                {isEdit && (
                  <S.ButtonActions className="pop-browse__btn-edit">
                    <S.ButtonGroup>
                      <S.ButtonBrowse $group onClick={handleSaveEdit}>
                        <a href="#">Сохранить</a>
                      </S.ButtonBrowse>
                      <S.ButtonBrowse
                        $bordered
                        $group
                        onClick={handleCancelEdit}
                      >
                        <a href="#">Отменить</a>
                      </S.ButtonBrowse>
                      <S.ButtonBrowse $bordered $group id="btnDelete">
                        <a href="#" onClick={handleDelTask}>
                          Удалить задачу
                        </a>
                      </S.ButtonBrowse>
                    </S.ButtonGroup>
                    <S.ButtonBrowse>
                      <a href="#" onClick={handleClose}>
                        Закрыть
                      </a>
                    </S.ButtonBrowse>
                  </S.ButtonActions>
                )}
              </>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
};
