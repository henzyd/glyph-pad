import axiosInstance from "~/config/axios";

type NoteDTO = Pick<Note, "title" | "description">;

class NoteServices {
  static create = async (data: NoteDTO) => {
    const { data: response } = await axiosInstance.post(`/notes`, data);
    return response;
  };

  static getAll = async () => {
    const { data: response } = await axiosInstance.get(`/notes`);
    return response;
  };

  static delete = async (id: string) => {
    const { data: response } = await axiosInstance.delete(`/notes/${id}`);
    return response;
  };

  static update = async ({ id, data }: { id: string; data: Partial<NoteDTO> }) => {
    const { data: response } = await axiosInstance.patchForm(`/notes/${id}`, data);
    return response;
  };
}

export default NoteServices;
