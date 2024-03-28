import axios from "axios";
import { INote } from "interfaces/notes.type";

export function createNewNoteApi(title: string, note: string) {
  return axios.post<INote>("/notes", { title, note });
}

export function getAllNotesApi() {
  return axios.get<INote[]>("/notes")
}