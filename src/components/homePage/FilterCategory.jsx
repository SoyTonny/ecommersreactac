import React, { useEffect, useRef } from 'react'
import useFetch from '../../hook/useFetch'

const FilterCategory = ({setProdCategory}) => {
    const [categories, getCategories] = useFetch()

    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories'
     getCategories(url)
    }, [])

    const selectOption = useRef()

    const handleChange = () => {
        setProdCategory(selectOption.current.value)
    }
    
  return (
    <select ref={selectOption} onChange={handleChange}>
        <option value="">Todas las categorias</option>
        {
            categories?.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
            ))
        }
    </select>
  )
}

export default FilterCategory