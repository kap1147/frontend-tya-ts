import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import type * as CSS from "csstype";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const style: CSS.Properties = {
  color: "green",
  margin: "1em",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h3 style={style}>Hello World</h3>
      </div>
    ),
  },
  {
    path: "/home",
    element: (
      <div>
        <h3 style={style}>Home Page</h3>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

root.render(<App />);
