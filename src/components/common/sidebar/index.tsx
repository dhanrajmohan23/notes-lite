import { S } from "./sidebar.styled";
import NotesIcon from "../../../assets/icons/notes.svg";
import RemindersIcon from "../../../assets/icons/remiders.svg";
import EditLablesIcon from "../../../assets/icons/edit-label.svg";
import ArchiveIcon from "../../../assets/icons/archive.svg";
import BinIcon from "../../../assets/icons/bin.svg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import leftDoubleArrow from "../../../assets/icons/left-double-arrow.svg";
import rightDoubleArrow from "../../../assets/icons/right-double-arrow.svg";
import { setSidebarState } from "../../../store/app/appSlice";

export const Sidebar = () => {
  const { openSidebar } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  return (
    <S.SideBarContainer sx={{ width: openSidebar ? "15rem" : "5rem" }}>
      <S.userDetailsContainer>
        <S.userProfileContainer></S.userProfileContainer>
        {openSidebar && (
          <S.UserDataContainer>
            <S.UserName>Dhanraj</S.UserName>
            <S.UserEmail>dhanraj@aequalisys.com</S.UserEmail>
          </S.UserDataContainer>
        )}
        <S.ArrowIconContainer
          onClick={() => dispatch(setSidebarState(!openSidebar))}
        >
          <img src={openSidebar ? leftDoubleArrow : rightDoubleArrow} alt="" />
        </S.ArrowIconContainer>
      </S.userDetailsContainer>
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
