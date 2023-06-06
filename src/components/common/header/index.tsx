import { S } from "./header.styled";
import MenuIcon from "../../../assets/icons/Menu.svg";

export const Header = () => {
  return (
    <S.HeaderContainer>
      <S.CustomMenuIcon src={MenuIcon} alt="" />
    </S.HeaderContainer>
  );
};
