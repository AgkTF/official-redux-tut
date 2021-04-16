import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 'l', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    /**
     * this state argument below is the array of posts only
     * and not the entire redux store.
     * Because the posts slice only knows about the data its
     * responsible for.
     */
    postAdded(state, action) {
      state.push(action.payload)
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions

export default postsSlice.reducer
