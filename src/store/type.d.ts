import store from '../store'
interface IAction {
  type: string;
  payload: any;
  error: string;
}

// type DispatchType = (args: IAction) => IAction;

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type DispatchType = typeof store.dispatch;
