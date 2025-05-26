import { Calendar } from "../Calendar/Calendar";
import { Link } from "react-router-dom";
import * as S from "./PopBrowse.styled";

export const PopBrowse = ({ card, loading }) => {
  return (
    <S.PopBrowseWrapper id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          <S.PopBrowseContent>
            {loading ? (
              <S.LoadingText>Данные загружаются...</S.LoadingText>
            ) : !card ? (
              <S.LoadingText>Карточка не найдена</S.LoadingText>
            ) : (
              <>
                <S.PopBrowseTopBlock>
                  <S.PopBrowseTitle>{card.title}</S.PopBrowseTitle>
                  <S.CategoryTheme $orange $active className="theme-top">
                    <p>{card.theme}</p>
                  </S.CategoryTheme>
                </S.PopBrowseTopBlock>
                <S.StatusWrapper>
                  <S.StatusParagraph>
                    <S.Subtitle>Статус</S.Subtitle>
                  </S.StatusParagraph>
                  <S.StatusThemes>
                    <S.StatusTheme className="_hide">
                      <p>Без статуса</p>
                    </S.StatusTheme>
                    <S.StatusTheme $gray>
                      <p>Нужно сделать</p>
                    </S.StatusTheme>
                    <S.StatusTheme className="_hide">
                      <p>В работе</p>
                    </S.StatusTheme>
                    <S.StatusTheme className="_hide">
                      <p>Тестирование</p>
                    </S.StatusTheme>
                    <S.StatusTheme className="_hide">
                      <p>Готово</p>
                    </S.StatusTheme>
                  </S.StatusThemes>
                </S.StatusWrapper>
                <S.PopBrowseWrap>
                  <S.PopBrowseForm id="formBrowseCard" action="#">
                    <S.FormBrowseBlock>
                      <label htmlFor="textArea01">
                        <S.Subtitle>Описание задачи</S.Subtitle>
                      </label>
                      <S.FormBrowseArea
                        name="text"
                        id="textArea01"
                        readOnly
                        placeholder="Введите описание задачи..."
                      ></S.FormBrowseArea>
                    </S.FormBrowseBlock>
                  </S.PopBrowseForm>
                  <Calendar />
                </S.PopBrowseWrap>
                <S.ThemeDown>
                  <S.Subtitle>Категория</S.Subtitle>
                  <S.CategoryTheme $orange $active>
                    <p>Web Design</p>
                  </S.CategoryTheme>
                </S.ThemeDown>
                <S.ButtonActions className="pop-browse__btn-browse ">
                  <S.ButtonGroup>
                    <S.ButtonBrowse $bordered $group>
                      <a href="#">Редактировать задачу</a>
                    </S.ButtonBrowse>
                    <S.ButtonBrowse $bordered $group>
                      <a href="#">Удалить задачу</a>
                    </S.ButtonBrowse>
                  </S.ButtonGroup>
                  <S.ButtonBrowse>
                    <Link to={-1}>Закрыть</Link>
                  </S.ButtonBrowse>
                </S.ButtonActions>
                <S.HiddenContent className="pop-browse__btn-edit">
                  <S.ButtonActions>
                    <S.ButtonGroup>
                      <S.ButtonBrowse $group>
                        <a href="#">Сохранить</a>
                      </S.ButtonBrowse>
                      <S.ButtonBrowse $bordered $group>
                        <a href="#">Отменить</a>
                      </S.ButtonBrowse>
                      <S.ButtonBrowse $bordered $group id="btnDelete">
                        <a href="#">Удалить задачу</a>
                      </S.ButtonBrowse>
                    </S.ButtonGroup>
                    <S.ButtonBrowse>
                      <a href="#">Закрыть</a>
                    </S.ButtonBrowse>
                  </S.ButtonActions>
                </S.HiddenContent>
              </>
            )}
          </S.PopBrowseContent>
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowseWrapper>
  );
};
