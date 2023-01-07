import React from 'react'
import {Switch,Route} from 'react-router-dom'
import Home from '../screens/home/index'
import  Search  from '../screens/Search'

export default function Index() {
    return (
<Switch>
    <Route exact path='' >
        <Home />
    </Route>
    <Route exact path='/search'>
        <Search />
    </Route>
</Switch>
    ) 
}
