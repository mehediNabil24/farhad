import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import { useEffect, useState } from 'react';
import Players from './Components/Players';
import NewsLetter from './Components/NewsLetter';
import Footer from './Components/Footer';

function App ()  {
    const [pageTitle, setPageTitle] = useState("Home Page");

    useEffect(() => {
      
      document.title = pageTitle;
    }, [pageTitle]); 

    const [coinReward, setCoinReward] =useState(0)

const handleCoin = coin=>{
    const newCoin = coinReward+ coin;
    setCoinReward(newCoin)
}


    return (
        <div>
            <Navbar coinReward={coinReward}></Navbar>
            <Hero handleCoin={handleCoin}></Hero>
            <Players  handleCoin={handleCoin} coinReward={coinReward}></Players>
            <NewsLetter></NewsLetter>
            <Footer></Footer>

            
        </div>
    );

}

export default App;