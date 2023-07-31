import { AuthPage } from "../Pages/AuthPage";
import { HomePage } from "../Pages/HomePage";
import { LinksPage } from "../Pages/LinksPage";


export const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/:id', element: <LinksPage /> },
  { path: '/auth', element: < AuthPage /> },
]