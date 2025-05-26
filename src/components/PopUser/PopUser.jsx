import * as S from './PopUser.styled';

export const PopUser = ({ $isPopUserVisible }) => {
    return (
        <S.PopUserContainer $isPopUserVisible={$isPopUserVisible}>
            <S.PopUserName>Ivan Ivanov</S.PopUserName>
            <S.PopUserMail>ivan.ivanov@gmail.com</S.PopUserMail>
            <S.PopUserTheme>
                <p>Темная тема</p>
                <S.ThemeCheckbox name="checkbox" />
            </S.PopUserTheme>
            <S.PopUserButton>
                <S.PopUserLink to="exit">Выйти</S.PopUserLink>
            </S.PopUserButton>
        </S.PopUserContainer>
    )
}