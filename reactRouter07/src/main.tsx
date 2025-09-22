import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Home/home.tsx'
import About from "./About/about.tsx"
import Blog from './Blog/blog.tsx'
import Contact from './Contact/contact.tsx'
import User from './User/User'
import Github, { githubLoader } from './Github/Github.tsx'

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path: "/about",
//         element: <About />
//       },
//       {
//         path: "/blog",
//         element: <Blog />
//       },
//       {
//         path: "/contact",
//         element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path='/User/:username' element={<User />}></Route>
      <Route loader={githubLoader} path='Github' element={<Github />}></Route>
    </Route>
  )
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
