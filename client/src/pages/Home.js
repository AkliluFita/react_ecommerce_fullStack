import React from 'react'
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slidbar from '../components/Slidbar';
import Catagories from '../components/Catagories';
import Products from '../components/Products';
import NewsLetters from '../components/NewsLetters';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Slidbar/>
            <Catagories/>
            <Products/>
            <NewsLetters/>
            <Footer/>
        </div>
    )
}
