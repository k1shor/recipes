import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Second, Third } from './First'
import NotFound from './NotFound'
import Layout from './components/layout/Layout'
import Homepage from './pages/Homepage'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Counter from './hooks/Counter'
import Room from './hooks/Room'
import Blogs from './pages/Blogs'
import DataFetch from './hooks/DataFetch'
import Post from './hooks/Post'
import Recipe from './hooks/Recipe'
import About from './pages/About'
import BlogDetails from './pages/BlogDetails'
import Gallery from './pages/Gallery'

const MyRoutes = () => {
    return (
        // <BrowserRouter>
            // {/* <Header/> */}
            <Routes >
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} ></Route>

                    <Route path='services' element={<Services />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='blogs' element={<Blogs />} />
                    <Route path='blog/:id' element={<BlogDetails />} />

                    {/* <Route path='/second' element={<Second />} />
                    <Route path='/third/:user' element={<Third />} /> */}
                    <Route path='*' element={<NotFound />} />
                    <Route path='recipes' element={<DataFetch />} />
                    <Route path='recipe/:id' element={<Recipe />} />
                    <Route path='about' element={<About />} />
                    <Route path='gallery' element = {<Gallery/>}/>


                    {/* Hooks */}
                    <Route path='counter' element={<Counter />} />
                    <Route path='room' element={<Room />} />
                    <Route path='post/:id' element={<Post />} />
                </Route>
            </Routes >

            // {/* <Footer/> */}
        // {/* </BrowserRouter> */}
    )
}

export default MyRoutes