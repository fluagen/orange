

export const fetchTopicList = (handler) => ({
  fetch('http://localhost:3001/api/topics').then(res => res.json()).then(json => {
    handler(json.topics)
  })
})
