import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";
import React from "react"

let state={
  postsData:[
      {userId: 1, message:'It is my First post', likes:13, comments:12},
      {userId: 2, message:'It is my second post',likes:14, comments:8},
      {userId: 3, message:'It is my third post',likes:25, comments:17}
  ]
}

test('new post should be added', () => {
  let action =addPostActionCreator("test text")

  let state={
    postsData:[
        {userId: 1, message:'It is my First post', likes:13, comments:12},
        {userId: 2, message:'It is my second post',likes:14, comments:8},
        {userId: 3, message:'It is my third post',likes:25, comments:17}
    ]
  }

  let newState = profileReducer(state,action)

  expect(newState.postsData.length).toBe(4)
  expect(newState.postsData[3].message).toBe("test text")

});

test("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000)

  let newState = profileReducer(state,action)

  expect(newState.postsData.length).toBe(4)

});