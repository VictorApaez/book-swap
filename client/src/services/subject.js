import api from "./apiConfig";

export const getBookBySubject = async (subject, index) => {
  try {
    const res = await api.get(`/subject/${subject}/${index}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};
