import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { AuthLayout } from './components/index.js'
import conf from './conf'

import AddPost from "./pages/AddPost";
import Signup from './pages/Signup'
import EditPost from "./pages/EditPost";

import Post from "./pages/Post";

import AllPosts from "./pages/AllPosts";
import Login from './pages/Login.jsx'
import { ClerkProvider, RedirectToSignIn, SignIn, SignedIn, SignedOut } from '@clerk/clerk-react'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: (<>
                    <SignedIn>
                    <SignIn routing="path" path="/login" />
                    </SignedIn>
                    <SignedOut>
                        <RedirectToSignIn />
                    </SignedOut>
                </>
                ),
            },
            {
                path: "/signup",
                element: (
                    <>
                        <SignedIn>
                        <SignIn routing="path" path="/signup" />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                ),
            },
            {
                path: "/all-posts",
                element: (
                    <>
                        <SignedIn>
                            <AllPosts />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                ),
            },
            {
                path: "/add-post",
                element: (
                    <>
                        <SignedIn>
                            <AddPost />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                ),
            },
            {
                path: "/edit-post/:slug",
                element: (
                    <>
                        <SignedIn>
                            <EditPost />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                ),
            },
            {
                path: "/post/:slug",
                element: (
                    <>
                        <SignedIn>
                            <Post />
                        </SignedIn>
                        <SignedOut>
                            <RedirectToSignIn />
                        </SignedOut>
                    </>
                ),
            },
        ],
    },
])


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ClerkProvider publishableKey={conf.clerkKey}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </ClerkProvider>
    </React.StrictMode>,
)