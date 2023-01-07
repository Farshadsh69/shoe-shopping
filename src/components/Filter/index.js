import React from 'react'
import useStyles from './indexStyles'
import Title from './Title'
import Brands from './Brands'
import Category from './Category'
import Sort from './Sort'
import Price from './Price'
import Color from './Color'
import Size from './Size'

export default function Index() {
    const classes=useStyles()
    return (
        <div className={classes.root}>
            <Title />
            <Brands /> 
            <Sort />
            <Category />
            <Price />
            <Color />
            <Size />
        </div>
    )
}
