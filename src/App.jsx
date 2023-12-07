import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Body from "./component/Body"
import Head from "./component/Head"
import MainContainer from "./component/MainContainer"
import WatchPage from "./component/WatchPage"

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />
        },
        {
          path: "watch",
          element: <WatchPage />
        }
      ]

    }
  ])
  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default App