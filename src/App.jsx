import { createContext, useEffect, useState } from "react";
import ButtonFilters from "./components/ButtonFilters";
import Productos from "./components/Productos";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const ProductContext = createContext();
function App() {
  const [popularProducts, setPopularProducts]= useState([]);
  const [filteredProducts, setFilteredProducts]= useState([]);

  const products= [
                {
                    id: "5",
                    name: "MESA REDONDA BLANCA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "28000",
                    precio_ids:[0, 105],
                    image:"../assets/82878398_004_dliving1.webp",
                    
                },
                {
                    id: "1",
                    name: "RACK ROSA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "11950",
                    precio_ids:[0, 103],
                    image: "../assets/d04f9e1cf3dc7d8a4522828dbfe2893c.jpg" ,
                },
                {
                    id: "2",
                    name: "LAMPARA A CUADROS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "3120",
                    precio_ids:[0, 101],
                    image:"../assets/ddbf02c3860b9e77fb7ad17ea476f6a1.jpg",
                },
                {
                    id: "3",
                    name: "PUFF BLANCO",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "18392",
                    precio_ids:[0, 104],
                    image:"../assets/f83259bd913b67879bdc165bb09cc176.jpg",

                },
                {
                    id: "4",
                    name: "MESA REDONDA NEGRA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "28000",
                    precio_ids:[0, 105],
                    image:"../assets/82177999_001_dliving2.webp",

                },
                {
                    id: "6",
                    name: "MESA RECTANGULAR NEGRA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "37899",
                    precio_ids:[0, 106],
                    image:"../assets/81602765_001_dliving3.webp",
                },
                {
                    id: "7",
                    name: "SOFA BLANCO",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "80259",
                    precio_ids:[0, 106],
                    image:"../assets/83006395_010_dliving4.webp",
                },
    
                {
                    id: "8",
                    name: "SOFA GRIS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "142490",
                    precio_ids:[0, 106],
                    image:"../assets/82097635_003_dliving5.webp",
                },
                {
                    id: "9",
                    name: "ESPEJO BLANCO",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5020",
                    precio_ids:[0, 102],
                    image:"../assets/78069929_010_dliving6.webp",
                },
                {
                    id: "10",
                    name: "SET DE PLATOS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "23996",
                    precio_ids:[0, 105],
                    image:
                        "../assets/cocina1.webp",

                },
                {
                    id: "11",
                    name: "SET DE TAZAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "11173",
                    precio_ids:[0, 103],
                    image:
                        "../assets/cocina2.webp",

                },
                {
                    id: "12",
                    name: "CONTENEDOR A CUADROS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2054",
                    precio_ids:[0, 101],
                    image:
                        "../assets/cocina3.webp",

                },
                {
                    id: "13",
                    name: "ORGANIZADOR DE TAZAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5000",
                    precio_ids:[0, 102],
                    image:
                        "../assets/cocina4.webp",

                },
                {
                    id: "14",
                    name: "FRUTERA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5500",
                    precio_ids:[0, 102],
                    image:
                        "../assets/cocina5.webp",

                },
                {
                    id: "15",
                    name: "TAZA NUDE",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2500",
                    precio_ids:[0, 101],
                    image:
                        "../assets/cocina11.webp",

                },
                {
                    id: "16",
                    name: "SET POSAVASOS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2336",
                    precio_ids:[0, 101],
                    image:
                        "../assets/cocina7.webp",

                },
                {
                    id: "17",
                    name: "TAZA NUDE GRANDE",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "3170",
                    precio_ids:[0, 101],
                    image:
                        "../assets/cocina8.webp",

                },
                {
                    id: "18",
                    name: "SET DE BOWLS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "11499",
                    precio_ids:[0, 103],
                    image:
                        "../assets/cocina9.webp",

                },
                {
                    id: "19",
                    name: "CONTENEDOR NUDE",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2054",
                    precio_ids:[0, 101],
                    image:
                        "../assets/cocina10.webp",

                },
                {
                    id: "20",
                    name: "CUBRECAMA SET BLANCO",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "20000",
                    precio_ids:[0, 105],
                    image:
                        "../assets/dormi1.webp",

                },
                {
                    id: "21",
                    name: "SET DE ALMOHADONES",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "8000",
                    precio_ids:[0, 102],
                    image:
                        "../assets/dormi5.webp",

                },
                {
                    id: "22",
                    name: "CUBRECAMA SET ROSA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "20000",
                    precio_ids:[0, 105],
                    image:
                        "../assets/dormi3.webp",

                },
                {
                    id: "23",
                    name: "FRAZADA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5672",
                    precio_ids:[0, 102],
                    image:
                        "../assets/dormi7.webp",

                },
                {
                    id: "24",
                    name: "FRAZADA LILA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5672",
                    precio_ids:[0, 102],
                    image:
                        "../assets/dormi9.webp",

                },
                {
                    id: "25",
                    name: "SET DE SABANAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "7877",
                    precio_ids:[0, 102],
                    image:
                        "../assets/dormi2.webp",

                },
                {
                    id: "26",
                    name: "CUBRECAMA SET VERDE",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "16485",
                    precio_ids:[0, 104],
                    image:
                        "../assets/dormi4.webp",

                },
                {
                    id: "27",
                    name: "ALMOHADON",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2500",
                    precio_ids:[0, 101],
                    image:
                        "../assets/dormi6.webp",

                },
                {
                    id: "28",
                    name: "SET DE FRAZADAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "16789",
                    precio_ids:[0, 104],
                    image:
                        "../assets/dormi8.webp",

                },
                {
                    id: "29",
                    name: "ALMOHADON A CUADROS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2500",
                    precio_ids:[0, 101],
                    image:
                        "../assets/dormi10.webp",
                },
                {
                    id: "30",
                    name: "TOALLAS CARITAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5400",
                    precio_ids:[0, 102],
                    image:
                        "../assets/bano1.webp",

                },
                {
                    id: "31",
                    name: "ORGANIZADOR DUCHA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "9588",
                    precio_ids:[0, 102],
                    image:
                        "../assets/bano3.webp",

                },
                {
                    id: "32",
                    name: "ALFOMBRA GET NAKED",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "3560",
                    precio_ids:[0, 101],
                    image:
                        "../assets/bano5.webp",

                },
                {
                    id: "33",
                    name: "ORGANIZADOR DE MAQUILLAJE",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "6499",
                    precio_ids:[0, 102],
                    image:
                        "../assets/bano12.webp",

                },
                {
                    id: "34",
                    name: "ALFOMBRA CUADRITOS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "3560",
                    precio_ids:[0, 101],
                    image:
                        "../assets/bano9.webp",

                },
                {
                    id: "35",
                    name: "TOALLAS ESTAMPADAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "5400",
                    precio_ids:[0, 102],
                    image:
                        "../assets/bano2.webp",

                },
                {
                    id: "36",
                    name: "ORGANIZADOR DUCHA MADERA",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "9588",
                    precio_ids:[0, 102],
                    image:
                        "../assets/bano4.webp",

                },
                {
                    id: "37",
                    name: "ALFOMBRA FLORCITAS",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "3560",
                    precio_ids:[0, 101],
                    image:
                        "../assets/bano6.webp",

                },
                {
                    id: "38",
                    name: "CORTINA FLORES",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "4640",
                    precio_ids:[0, 101],
                    image:
                        "../assets/bano8.webp",

                },
                {
                    id: "39",
                    name: "TOALLA CABELLO",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisci elit.",
                    price: "2272",
                    precio_ids:[0, 101],
                    image:
                        "../assets/bano10.webp",

                },
    

  ]
  
  

  useEffect (()=>{
    setPopularProducts(products);
    setFilteredProducts(products);
  },[]);

  const value= {
    popularProducts,
    filteredProducts,
    setFilteredProducts,

  };

  return (
    <ProductContext.Provider value={value}>
        <Header/>
      <div className='app'>
        <ButtonFilters />
        <div className="image-container">
          <AnimatePresence>
            <Productos />
          </AnimatePresence>
          
        </div>
      </div>
      <Footer/>

    </ProductContext.Provider>
    
  );
}

export default App;
