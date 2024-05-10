import React, {useEffect, useRef, useState} from 'react'
import useFetch from '../hook/useFetch'
import ProdCard from '../components/homePage/ProdCard';
import './style/homePage.css'
import FilterPrice from '../components/homePage/FilterPrice';
import FilterCategory from '../components/homePage/FilterCategory';

const body = document.querySelector('body')

const HomePages = () => {

    const [prodCategory, setProdCategory] = useState('')
    const [prodPrice, setProdPrice] = useState({
        from:0,
        to: Infinity
    });
    const [prodName, setProdName] = useState('');
    const [products, getProducts] = useFetch();
    
    useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
        getProducts(url)
    }, [])

    // console.log(products);
    
    const textInput = useRef()

    const handleChange = () => {
        setProdName(textInput.current.value.toLowerCase().trim());

    }
    const prodFilters = (prod) =>{
        const perName = prod.title.toLowerCase().includes(prodName);
            
        const perPrice = +prod.price <= +prodPrice.to && +prod.price >= +prodPrice.from;

        const perCategory = prodCategory ? prod.categoryId === +prodCategory : prod;

        return perName && perPrice && perCategory;
    }

    const handleDark = ()=> {
        //este body es el nombre de la funcion de arriaba y el metod .toggle() hace que sino existe la clase que nombra en los parametros la crea y si existe la quita
        body.classList.toggle('dark')
    }

  return (
    <div className='homepage'>
        <div className='homepage__filters'>
            <div className='homepage__filtersname'>

            <input ref={textInput} onChange={handleChange} type="text"/>
            <button>🧿</button>
            </div>

            <FilterPrice
                setProdPrice={setProdPrice}
            />
            <FilterCategory
            setProdCategory={setProdCategory}
            />
            <button className='homepage__btn' onClick={handleDark}> Mode</button>
        </div>
        <div className='homepage__container'>
            {
                products?.filter(prodFilters).map((prod) => (
                    <ProdCard
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default HomePages