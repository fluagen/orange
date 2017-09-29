import Mock from "fetch-mock";

const topics = [
  {
    topic: {
      _id: "5989d572f634272f0547fbb1",
      title: "1313",
      group: {
        id: "qna",
        name: "问与答",
      },
      author: {
        loginId: "zhangsan",
        avatar_url:
          "//v2ex.assets.uxengine.net/avatar/05e1/0e4e/181515_large.png?m=1470621029"
      }
    },
    last_reply: {
      _id: "5989d572f634272f0547fbb1",
      create_at: "2017-08-08T15:14:58.400Z",
      author: {
        loginId: "zhangsan",
        avatar_url:
          "//v2ex.assets.uxengine.net/avatar/05e1/0e4e/181515_large.png?m=1470621029"
      }
    }
  }
];

Mock.get("/api/topics", topics);
