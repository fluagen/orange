import { fetchByGet, fetchByPost } from '../util/request';

// export const fetchTopics = handler =>
//   fetch('http://localhost:3001/public/api/topics')
//     .then(res => res.json())
//     .then(json => {
//       handler(json.data);
//     });

// export const fetchTopic = (tid, handler) => {
//   fetch('http://localhost:3001/public/api/topic/' + tid)
//     .then(res => res.json())
//     .then(json => {
//       handler(json.data);
//     });
// };

export const getTopics = fetchByGet('http://localhost:3001/public/api/topics');

// export const getTopic = tid => fetchByGet('http://localhost:3001/public/api/topic/' + tid);

// export const getTopic = (tid) => {
//   console.log(tid);
//
//   return fetchByGet('http://localhost:3001/public/api/topic/' + tid);
// };

export const getTopic = (tid)=> fetchByGet(`http://localhost:3001/public/api/topic/${tid}`);
