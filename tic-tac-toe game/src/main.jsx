import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import NewGameMenuPage from "./pages/NewGameMenuPage";
import GamePage from "./pages/GamePage";

const router = createBrowserRouter([
    {
        path: "/Tic-Tac-Toe-Game/",
        element: <NewGameMenuPage />,
    },
    {
        path: "game",
        element: <GamePage />,
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
