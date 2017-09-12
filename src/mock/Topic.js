import Mock from 'fetch-mock';

const topics = [];

topics.push({
  id: '1213',
  title: '想问一下小米发布的 15 寸 pro 怎么样？',
  author: {
    avatar_url: '',
    name: 'zhangsan'
  }
});
topics.push({
  id: '4444',
  title: '关于安卓抓包',
  author: {
    avatar_url: '',
    name: 'zhangsan'
  }
});
topics.push({
  id: '555',
  title: 'js 党可以吐槽一下 Python 吗',
  author: {
    avatar_url: '',
    name: 'zhangsan'
  }
});

Mock.get("/api/topics", topics);
