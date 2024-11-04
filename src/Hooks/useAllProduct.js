import { useEffect, useState } from "react";

const useAllProduct = () => {
    const [products,setProducts]=useState([]);

    useEffect(() => {
        fetch("/productData.json")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setProducts(data);
          });
      }, []);

    return {products}
};

export default useAllProduct;