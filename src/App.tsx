import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"

// Pages
import Home from "./pages/Home"
import RootLayout from "./components/RootLayout"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<RootLayout />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="shop" element={<p>shop</p>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="orders" element={<p>order</p>} />
        </Route>
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
