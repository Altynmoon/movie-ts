import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { movies } from "./reducers/movies";
import { userTaskReducer } from "./reducers/userTaskReducer";
import { shopReducer } from "./reducers/shopReducer";

const rootReducer = combineReducers({
  user: userReducer,
  movie: movies,
  userTask: userTaskReducer,
  category: shopReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export type IState = ReturnType<typeof rootReducer>;
