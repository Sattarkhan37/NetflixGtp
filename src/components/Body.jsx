import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Loginn from "./Loginn";
function Body() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Loginn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default Body;
