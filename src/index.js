import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./Login";
import Register from "./Register";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import Members from "./Users/Member/Members";
import AddMember from "./Users/Member/AddMember";
import EditMember from "./Users/Member/EditMember";
import View from "./Users/Member/View";
import ViewAsset from "./Products/Assets/ViewAsset";
import AddAsset from "./Products/Assets/AddAsset";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/login" , element: <Login />},
  { path: "/register" , element: <Register />},
  { path: "/dashboard" , element: <Dashboard />},
  { path: "/members" , element: <Members />},
  { path: "/addMembers" , element: <AddMember />},
  { path: "/editMembers/:id" , element: <EditMember />},
  { path: "/viewMembers/:id" , element: <View />},
  { path: "/ViewAssets" , element: <ViewAsset />},
  { path: "/AddAssets" , element: <AddAsset />},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
