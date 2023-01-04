import api from "./apiConfig";

export const getBookBySubject = async (subject) => {
  try {
    const res = await api.get(`/subject/${subject}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
