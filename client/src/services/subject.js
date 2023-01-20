import api from "./apiConfig";

export const getBookBySubject = async (subject, index) => {
  try {
    const res = await api.get(`/subject/${subject}/${index}`);
    return res.data;
  } catch (err) {
    throw err;
  }
};

export const getBooks = async (input) => {
  try {
    const query = input.split(" ").join("%20");
    console.log(query);
    const res = await api.get(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    return res.data;
  } catch (e) {
    throw e;
  }
};
