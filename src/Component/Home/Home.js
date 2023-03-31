import React from "react";
import QuickSearch from "./QuickSearch";
import Search from './Search';
import Header from '../Header';


const Home = () => {
    return (
        <div>
        <Header/>
            <Search/>
            <QuickSearch/>
        </div>
    )
}

export default Home;