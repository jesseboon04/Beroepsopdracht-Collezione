import React, { useState, useEffect} from "react";
import axios from "axios";
import Loader from "./Loader";
import ProductCard from "./productCard";
import Navigation from "../Homepage/Navigation/Navigation";
import Footer from "../Components/Footer/Footer";
import "./Home.css";

function Home() {
    const url = 'https://645aa7f265bd868e932175b4.mockapi.io/api/vi/products'; // replace with a valid URL
    const [products, setProducts] = useState({
        loading: false,
        data: null,
        error: false
    })

    useEffect(() => {
        setProducts({
            loading:true,
            data: null,
            error: false
        })
        axios.get(url)
        .then(response => {
            setProducts({
                loading: false,
                data: response.data,
                error: false
            })
        })
        .catch(() => {
            setProducts({
                loading: false,
                data: null, 
                error: true
            })
        })
    },[url])

    let content = null

    if(products.error){
        content = <p>
            er is een error
        </p>
    }
    if(products.loading){
        content = <Loader></Loader>
    }

    if(products.data){
        content = products.data.map((product, key) =>
            <div key={key}>
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }
    
    return (
        <section>
        <Navigation />
        
        <div>
            <h1 className="titel-producten">Collectie:</h1>
       </div>
       <div className="content-products">{content}</div>
        <div><Footer /></div>
        </section>
    )
}

export default Home;
