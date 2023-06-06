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
    </S.MainContainer>
  );
};
