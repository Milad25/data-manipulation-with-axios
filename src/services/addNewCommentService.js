import http from './httpService';
// import instance from "../components/axiosInstance";

export function addNewComment(data) {
  const token = 'Bearer SECURE_TOKEN';

  const header = {
    headers: {
      Authorization: token,
    },
  };

  return http.post('/comments/', data, header);
}
