import { createBrowserRouter } from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../components/Pages/Home/Home'
import Login from '../components/Pages/Login/Login'
import Blog from '../components/Pages/Blog/Blog'
import Register from '../components/Pages/Register/Register'
import Services from '../components/Pages/Services/Services'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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




 
        
        // // {
        // //     path:'/login',
        // //     element: <Login />
        // // },
        // {
        //     path:'/register',
        //     element: <Register />
        // },
        // {
        //     path:'/services',
        //     element: <Services />
        // },
        // {
        //     path:'/blog',
        //     element: <Blog />
        // },
        // {
        //     path:'/about',
        //     element: <About />
        // },

 

