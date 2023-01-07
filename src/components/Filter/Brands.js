import React from 'react'
import useStyles from './BrandsStyles'
import BrandItem from './BrandItem'
export default function Brands() {
    const brand=['آدیداس','نایکی','پوما','تنتاک']
    const classes=useStyles()
    return (
        <div className={classes.root}>
            {brand.map((brand)=> <BrandItem brand={brand}/>)}
        </div>
    )
}
