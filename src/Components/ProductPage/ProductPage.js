import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"
import "font-awesome/css/font-awesome.min.css";

const ProductPage = () => {

    let product =
        {
            id: 1, 
            name: "Berlin Blouse", 
            artNr: "1644-000003-0001", 
            description: "Den här spetsblusen är transparent och har en fransig hög krage, trumpetärmar och en avklippt längd. NA-KD by YOU är en kollektion designad av vår community. Genom att rösta på Instagram bestämde våra kunder produkternas stil, färg och namn. Och vi älskar det!. Den här spetsblusen finns i vitt.", 
            price: 499, 
            image:"https://www.na-kd.com/globalassets/nakd_by_you_berlin_blouse_1644-000003-0001_01a.jpg?ref=B0EAB1D841&width=640",
            colors : [
                {id: 1, name: "Vit"},
                {id: 2, name: "Svart"},
                {id: 3, name: "Lila"}
            ],
            sizes : [
                {id: 1, name: "XS"},
                {id: 2, name: "S"},
                {id: 3, name: "M"},
                {id: 4, name: "L"},
                {id: 5, name: "XL"}
            ]
        }

    let recommenderProducts = [
        {id: 1, name: "Oversized Cable Knitted Sweater Beige", image: "https://www.na-kd.com/globalassets/nakd_oversized_cable_knitted_sweater_1100-002114-0140_01g.jpg?ref=A8AADA214D&width=640"},
        {id: 2, name: "V-Neck Back Overlap Knitted Sweater Rosa", image: "https://www.na-kd.com/globalassets/nakd_v_neck_overlap_knitted_sweater_1018-002134-0115_01b_r3.jpg?ref=953C74FC4D&width=640"},
        {id: 3, name: "Wrap Satin Blouse Svart", image: "https://www.na-kd.com/globalassets/wrap_satin_blouse_1100-002024-0002_01a.jpg?ref=6D745E3BA6&width=640"},
        {id: 4, name: "Sequin Belted Blazer Svart", image: "https://www.na-kd.com/globalassets/nakd_sequin_belted_blazer_1017-000635-0002_01a.jpg?ref=633F854A05&width=640"}
    ]

    return(
        <div>
            <ProductDetails product={product} />
            <RecommendedProducts recommenderProducts={recommenderProducts}/>
        </div>
    )
}

export default ProductPage;