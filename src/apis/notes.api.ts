import axios from "axios";
import { INote } from "interfaces/notes.type";

export function createNewNoteApi(title: string, note: string) {
  return axios.post<INote>("/notes", { title, note });
}

export function getAllNotesApi() {
  return axios.get<INote[]>("/notes");
}

export function getNoteById(id: string) {
  return axios.get<INote>(`/notes/${id}`);
}

export function updateNoteById(note: INote) {
  return axios.put<INote>(`/notes/${note._id}`, { note });
}

export function deleteNoteById(id: string) {
  return axios.delete<INote>(`/notes/${id}`);
}