import React from "react";
import ProductDetails from "../ProductDetails/ProductDetails";
import RecommendedProducts from "../RecommendedProducts/RecommendedProducts"
import "font-awesome/css/font-awesome.min.css";

const ProductPage = (props) => {

    let products = [
        {
            id: 1, 
            name: "Berlin Blouse", 
            artNr: "1644-000003-0001", 
            description: "Den här spetsblusen är transparent och har en fransig hög krage, trumpetärmar och en avklippt längd. NA-KD by YOU är en kollektion designad av vår community. Genom att rösta på Instagram bestämde våra kunder produkternas stil, färg och namn. Och vi älskar det!. Den här spetsblusen finns i vitt.", 
            price: 499, 
            image:"https://www.na-kd.com/globalassets/nakd_by_you_berlin_blouse_1644-000003-0001_01a.jpg?ref=B0EAB1D841&width=640",
            color : [
                {id: 1, name: "Vit"},
                {id: 2, name: "Svart"},
                {id: 3, name: "Lila"}
            ],
            size : [
                {id: 1, name: "XS"},
                {id: 2, name: "S"},
                {id: 3, name: "M"},
                {id: 3, name: "L"},
                {id: 3, name: "XL"}
            ]
        }
      ];
      
    return(
        <div>
            <ProductDetails products={products} />
            <RecommendedProducts />
        </div>
    )
}

export default ProductPage;