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
    <S.SideBarContainer sx={{ width: openSidebar ? "15rem" : "5rem" }}>
      <S.LabelContainer>
        <S.CustomIcon
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          src={NotesIcon}
          alt=""
        />
        {openSidebar && <S.SidebarLabel>Notes</S.SidebarLabel>}
      </S.LabelContainer>
      <S.LabelContainer>
        <S.CustomIcon
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          src={RemindersIcon}
          alt=""
        />
        {openSidebar && <S.SidebarLabel>Reminders</S.SidebarLabel>}
      </S.LabelContainer>
      <S.LabelContainer>
        <S.CustomIcon
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          src={EditLablesIcon}
          alt=""
        />
        {openSidebar && <S.SidebarLabel>Edit Labels</S.SidebarLabel>}
      </S.LabelContainer>
      <S.LabelContainer>
        <S.CustomIcon
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          src={ArchiveIcon}
          alt=""
        />
        {openSidebar && <S.SidebarLabel>Archive</S.SidebarLabel>}
      </S.LabelContainer>
      <S.LabelContainer>
        <S.CustomIcon
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.1 },
          }}
          src={BinIcon}
          alt=""
        />
        {openSidebar && <S.SidebarLabel>Bin</S.SidebarLabel>}
      </S.LabelContainer>
    </S.SideBarContainer>
  );
};
