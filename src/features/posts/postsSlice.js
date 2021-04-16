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
  },
})

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer
