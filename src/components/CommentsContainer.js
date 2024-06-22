import React from "react";

const commentData = [
  {
    name: "KB",
    text: "Hello Comment",
    replies: [
      {
        name: "KB",
        text: "Hello Comment",
        replies: [],
      },
      {
        name: "KB",
        text: "Hello Comment",
        replies: [
          {
            name: "KB",
            text: "Hello Comment",
            replies: [
              {
                name: "KB",
                text: "Hello Comment",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "KB",
    text: "Hello Comment",
    replies: [],
  },
  {
    name: "KB",
    text: "Hello Comment",
    replies: [],
  },
  {
    name: "KB",
    text: "Hello Comment",
    replies: [
      {
        name: "KB",
        text: "Hello Comment",
        replies: [
          {
            name: "KB",
            text: "Hello Comment",
            replies: [
              {
                name: "KB",
                text: "Hello Comment",
                replies: [
                  {
                    name: "KB",
                    text: "Hello Comment",
                    replies: [
                      {
                        name: "KB",
                        text: "Hello Comment",
                        replies: [],
                      },
                      {
                        name: "KB",
                        text: "Hello Comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "KB",
            text: "Hello Comment",
            replies: [
              {
                name: "KB",
                text: "Hello Comment",
                replies: [
                  {
                    name: "KB",
                    text: "Hello Comment",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            name: "KB",
            text: "Hello Comment",
            replies: [
              {
                name: "KB",
                text: "Hello Comment",
                replies: [
                  {
                    name: "KB",
                    text: "Hello Comment",
                    replies: [
                      {
                        name: "KB",
                        text: "Hello Comment",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "KB",
        text: "Hello Comment",
        replies: [],
      },
    ],
  },
  {
    name: "KB",
    text: "Hello Comment",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 rounded-md p-2 my-2">
      <img
        className="w-7 h-7"
        src=" https://cdn-icons-png.flaticon.com/512/666/666201.png"
        alt="user"
      />
      <div className="px-3">
        <p className="font-bold">{name} </p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  return comment.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentList comment={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments : </h1>
      {/* <Comment data={commentData[0]} /> */}
      <CommentList comment={commentData} />
    </div>
  );
};

export default CommentsContainer;
