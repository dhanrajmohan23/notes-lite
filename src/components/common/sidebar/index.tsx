import { S } from "./sidebar.styled";
import NotesIcon from "../../../assets/icons/notes.svg";
import RemindersIcon from "../../../assets/icons/remiders.svg";
import EditLablesIcon from "../../../assets/icons/edit-label.svg";
import ArchiveIcon from "../../../assets/icons/archive.svg";
import BinIcon from "../../../assets/icons/bin.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export const Sidebar = () => {
  const { openSidebar } = useSelector((state: RootState) => state.app);

  return (
    <S.SideBarContainer>
      <img src={NotesIcon} alt="" />
      <img src={RemindersIcon} alt="" />
      <img src={EditLablesIcon} alt="" />
      <img src={ArchiveIcon} alt="" />
      <img src={BinIcon} alt="" />
    </S.SideBarContainer>
  );
};
