import * as S from './PopNewCard.styled';
  import { Calendar } from "../Calendar/Calendar";
  
  export const PopNewCard = () => {
      return (
        <S.PopNewCardWrapper id="popNewCard">
          <S.PopNewCardContainer>
            <S.PopNewCardBlock>
              <S.PopNewCardContent>
                <S.PopNewCardTitle>Создание задачи</S.PopNewCardTitle>
                <S.PopNewCardClose to={-1}>&#10006;</S.PopNewCardClose>
                <S.PopNewCardWrap>
                  <S.PopNewCardForm id="formNewCard" action="#">
                    <S.FormNewBlock>
                      <S.Subtitle htmlFor="formTitle">Название задачи</S.Subtitle>
                      <S.FormNewInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                    </S.FormNewBlock>
                    <S.FormNewBlock>
                      <S.Subtitle htmlFor="textArea">Описание задачи</S.Subtitle>
                      <S.FormNewArea name="text" id="textArea" placeholder="Введите описание задачи..."></S.FormNewArea>
                    </S.FormNewBlock>
                  </S.PopNewCardForm>
                  <Calendar />
                </S.PopNewCardWrap>
                <S.CategoriesWrapper>
                  <S.CategoriesParagraph><S.Subtitle>Категория</S.Subtitle></S.CategoriesParagraph>
                  <S.CategoriesThemes>
                    <S.CategoryTheme className="orange" $active={true}>
                      <p>Web Design</p>
                    </S.CategoryTheme>
                    <S.CategoryTheme className="green">
                      <p>Research</p>
                    </S.CategoryTheme>
                    <S.CategoryTheme className="purple">
                      <p>Copywriting</p>
                    </S.CategoryTheme>
                  </S.CategoriesThemes>
                </S.CategoriesWrapper>
                <S.FormNewCreate id="btnCreate">Создать задачу</S.FormNewCreate>
              </S.PopNewCardContent>
            </S.PopNewCardBlock>
          </S.PopNewCardContainer>
        </S.PopNewCardWrapper>
      );
  }