import { S } from "./header.styled";
import MenuIcon from "../../../assets/icons/Menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { setSidebarState } from "../../../store/app/appSlice";
import { RootState } from "../../../store";

export const Header = () => {
  const { openSidebar } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  return (
    <S.HeaderContainer>
      <S.CustomMenuIcon
        src={MenuIcon}
        alt=""
        onClick={() => dispatch(setSidebarState(!openSidebar))}
      />
    </S.HeaderContainer>
  );
};
