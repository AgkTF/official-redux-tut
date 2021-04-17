import { createSlice, nanoid } from '@reduxjs/toolkit'
import { sub } from 'date-fns'

const initialState = [
  {
    id: 'l',
    title: 'First Post!',
    content: 'Hello!',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
  },
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
     *
     * Don't put class instances, functions, or other non-serializable values into Redux!.
     * Redux actions and state should only contain plain JS values like objects, arrays, and primitives.
     * That's why we're tracking the date as a string below.
     */
    postAdded: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            title,
            content,
            user: userId,
          },
        }
      },
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
