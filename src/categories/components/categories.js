import React from 'react'
import Category from './category'
import Search from '../containers/search'
import './categories.css'

function Categories(props) {

    const { categories, handleOpenModal } = props

    return (
        <div className="Categories">
        <Search />
            {
                categories.map(item => {
                    return (
                        <Category key={item.id}  {...item} handleOpenModal={handleOpenModal}/>
                    )
                })
            }
        </div>
    )
}

export default Categories