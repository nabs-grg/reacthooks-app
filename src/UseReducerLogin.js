import React, { useReducer } from "react";
import { login } from "./login";

function loginReducer(state, action) {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "login": {
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    }
    case "success": {
      return {
        ...state,
        loggedIn: true,
        isLoading: false,
        username: "",
        password: "",
      };
    }
    case "error": {
      return {
        ...state,
        error: true,
        isLoading: false,
      };
    }
    case "logout": {
      return {
        ...state,
        loggedIn: false,
        username: "",
        password: "",
      };
    }
    default:
      break;
  }
  return state;
}

const initialState = {
  username: "",
  password: "",
  isLoading: false,
  error: false,
  loggedIn: false,
};

export const UseReducerLogin = () => {
  const [state, dispatch] = useReducer(loginReducer, initialState);

  const { username, password, isLoading, error, loggedIn } = state;

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: "login" });

    try {
      await login({ username, password });
      dispatch({ type: "success" });
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="App">
      {loggedIn ? (
        <>
          <h1>Welcome to dashboard</h1>
          <button onClick={() => dispatch({ type: "logout" })}>Log out</button>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "username",
                value: e.target.value,
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "field",
                field: "password",
                value: e.target.value,
              })
            }
          />
          {error && <p>Invalid credentials</p>}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "logging user" : "Log in"}
          </button>
        </form>
      )}
    </div>
  );
};
