export const fetchTopicList = handler =>
  fetch('http://localhost:3001/public/api/topics')
    .then(res => res.json())
    .then(json => {
      handler(json.data);
    });

export const fetchTopic = (tid, handler) => {
  fetch('http://localhost:3001/public/api/topic/' + tid)
    .then(res => res.json())
    .then(json => {
      handler(json.data);
    });
};
