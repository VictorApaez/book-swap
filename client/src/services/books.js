import api from "./apiConfig";

export const getBookBySubject = async (subject, index) => {
  try {
    const res = await api.get(`/subject/${subject}/${index}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getBooksByAny = async (input, index = 0) => {
  try {
    const query = input.split(" ").join("%20");
    const res = await api.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=12&startIndex=${index}`
    );
    return res.data;
  } catch (e) {
    throw e;
  }
};
