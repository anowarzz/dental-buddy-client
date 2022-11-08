import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../components/Pages/Home/Home'
import Login from '../components/Pages/Login/Login'
import Blog from '../components/Pages/Blog/Blog'
import Register from '../components/Pages/Register/Register'
import Services from '../components/Pages/Services/Services'
import ErrorPage from '../components/ErrorPage/ErrorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            
        ]
    }
])
