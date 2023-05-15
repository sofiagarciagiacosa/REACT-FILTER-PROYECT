import { useContext } from "react";
import { ProductContext } from "../App";
import { motion } from "framer-motion";

const Productos=()=>{
    const{filteredProducts}= useContext(ProductContext);

    return filteredProducts.map(product => (
        <motion.div className="image-card" key={product.id}
            layout
            initial= {{opacity:0}}
            animate= {{opacity:1}}
            exit= {{opacity:0}}
            transition={{duration:0.5}}
        >
            <img src={`${product.image}`} alt={product.name}/>

            <h2>{product.name}</h2>
            <h3>${product.price}</h3>
        </motion.div>
    ))
} 

export default Productos;