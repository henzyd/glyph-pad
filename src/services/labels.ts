import axiosInstance from "~/config/axios";

type LabelDTO = Pick<Label, "name" | "hex_code">;

class LabelServices {
  static create = async (data: LabelDTO) => {
    const { data: response } = await axiosInstance.post(`/labels`, data);
    return response;
  };

  static getAll = async () => {
    const { data: response } = await axiosInstance.get(`/labels`);
    return response;
  };

  static delete = async (id: string) => {
    const { data: response } = await axiosInstance.delete(`/labels/${id}`);
    return response;
  };

  static update = async ({ id, data }: { id: string; data: Partial<LabelDTO> }) => {
    const { data: response } = await axiosInstance.patchForm(`/labels/${id}`, data);
    return response;
  };
}

export default LabelServices;
