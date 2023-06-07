import { useEffect } from "react";
import axios from "axios";
import { S } from "./home.styled";
import { useState } from "react";

export const Home = () => {
  // State values
  const [userNote, setUserNote] = useState<string>();
  const [userNotes, setUserNotes] = useState([]);

  // Use effects
  useEffect(() => {
    getUserNotes();
  }, []);

  // Functions
  const postNote = () => {
    try {
      axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/post`, {
        note: userNote,
      });
      console.log("posted successfully");
      getUserNotes();
    } catch (err) {
      console.log(err);
    }
  };

  const getUserNotes = () => {
    try {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/getAll`)
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
