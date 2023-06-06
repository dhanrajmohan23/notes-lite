import { S } from "./home.styled";

export const Home = () => {
  return (
    <S.MainContainer>
      <S.InputContainer>
        <S.CustomInput
          id="filled-basic"
          disableUnderline
          placeholder="Take a note"
          multiline
        />
      </S.InputContainer>
      <S.DataGrid>
        <S.NotesContainer>note 1</S.NotesContainer>
        <S.NotesContainer>note 2</S.NotesContainer>
      </S.DataGrid>
    </S.MainContainer>
  );
};
