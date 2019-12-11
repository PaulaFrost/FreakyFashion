import React from "react";
import Hero from "../Hero/Hero";
import SmallSpots from "../SmallSpots/SmallSpots";
import LargeSpots from "../LargeSpots/LargeSpots";
import "font-awesome/css/font-awesome.min.css";
import "./Home.css"

const Home = () => {

    let spotImageList = [
        {id: 1, name: "leppard sweater", href:"https://www.na-kd.com/globalassets/nakd_leo_knitted_sweater_1018-001855-0810_01a_r1.jpg?ref=FD207E4C58&width=640"},
        {id: 2, name: "blue sweater", href:"https://www.na-kd.com/globalassets/nakd_multi_color_baloon_sleeve_knitted_dress_1100-001991-0003_04g_r.jpg?ref=89EA26AE13&width=640"},
        {id: 3, name: "purple sweater", href:"https://www.na-kd.com/globalassets/nakd_balloon_sleeve_knitted_sweater_1100-000253-0212_01a_r.jpg?ref=C3BD4EC22A&width=640"}
      ];
      
    let largeSpotList = [
        {id: 1, name: "Sexy shorta", href:"https://www.na-kd.com/siteassets/campaigns/2019/august/campaign-images/btr-campaign.jpg?ref=B42E404763&width=1550"},
        {id: 2, name: "Black eveningdress", href:"https://www.na-kd.com/siteassets/campaigns/2019/april/campaign-images/template_occasiondresses.jpg?ref=85D4A8E716&width=1550"}
      ]
       
    let heroCollection = {id: 1, name: "leppard sweater", titel:"Reflections of deaths", link:"", description:"Adorable Caro's new collection is a true reflection of her style. I'ts feminine, figure-hugging and fresh. Just the way she likes it!", href:"https://www.na-kd.com/siteassets/campaigns/2019/november/pamela/desktop/pamela-reborn-desk-06-01.jpg?ref=35ED65F826&width=2630&maxheight=1200"}
      
    return(
        <div>
            <Hero heroCollection={heroCollection}/>

            <SmallSpots spotImage={spotImageList} />

            <LargeSpots largeSpotImage={largeSpotList} />
        </div>
    )
}

export default Home;