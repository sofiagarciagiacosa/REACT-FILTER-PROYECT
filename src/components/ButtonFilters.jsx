import { useContext, useState } from "react"
import {precios} from "../untils"
import { ProductContext } from "../App";

const ButtonFilters = () => {
    const[tabActive, setTabActive] = useState(0);
    const {popularProducts,setFilteredProducts}= useContext(ProductContext);

    const handleClickFilter= (id) => {
        setTabActive(id);
        const filteredProducts= popularProducts.filter(product=>product.precio_ids.includes(id));
        if(id===0){
            setFilteredProducts(popularProducts);

        }
        else{
            setFilteredProducts(filteredProducts);
        }

    }


    return (
        <div className="button-wrapper">
            {precios.map(item =>(
                <button 
                key={item.id}
                className={tabActive===item.id ? "active" : undefined}
                onClick={()=> handleClickFilter(item.id)}
                >{item.name}</button>
            ))}
        </div>
    )
}

export default ButtonFilters