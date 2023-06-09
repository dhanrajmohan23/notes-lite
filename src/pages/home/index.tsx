import { useEffect } from "react";
import axios from "axios";
import { S } from "./home.styled";
import { useState } from "react";
import Cookies from "js-cookie";

export const Home = () => {
  // State values
  const [userNote, setUserNote] = useState<string>("");
  const [userNotes, setUserNotes] = useState([]);
  const userId = Cookies.get("userId");

  // Use effects
  useEffect(() => {
    getUserNotes();
  }, []);

  // Functions
  const postNote = () => {
    try {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/post`, {
        note: userNote,
        userId: userId,
      });
      console.log("posted successfully");
      getUserNotes();
      setUserNote("");
    } catch (err) {
      console.log(err);
    }
  };

  const getUserNotes = () => {
    try {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/getNotesByUserId/${userId}`
        )
        .then((res) => {
          setUserNotes(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <S.MainContainer>
      <S.InputContainer>
        <S.CustomInput
          id="filled-basic"
          disableUnderline
          placeholder="Take a note"
          multiline
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
        />
        <S.PostButton onClick={postNote}>Post</S.PostButton>
      </S.InputContainer>
      <S.DataGrid>
        {userNotes?.map((note: any) => {
          return (
            <S.NotesContainer key={note._id}>{note.note}</S.NotesContainer>
          );
        })}
      </S.DataGrid>
    </S.MainContainer>
  );
};
