import { useEffect, useState } from "react";

const useProductBtn = () => {
  const [productBtns,setProductBtns]=useState([]);

    useEffect(() => {
        fetch("/categoryBtn.json")
          .then((res) => res.json())
          .then((data) => setProductBtns(data));
      }, []);

    return {productBtns}
};

export default useProductBtn;