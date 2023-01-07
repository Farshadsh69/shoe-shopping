import React ,{useState}from 'react'
import useStyles from './ColorItemStyles'
export default function ColorItem({backgroundColor}) {
    const classes=useStyles()
    const [active,setActive]=useState(false)
    return (
        <div
        onClick={()=>setActive(!active)}
        className={classes.root} style={{backgroundColor:backgroundColor,boxShadow:active?'0px 0px 20px 0px #40c4ff':''}}>
             
        </div>
    )
}
