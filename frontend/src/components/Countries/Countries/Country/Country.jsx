import React from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'
import './index.css'
export const Country = () => {
   const [country, setCountry] = React.useState({})
   const idName = useLocation().pathname.slice(11)
   React.useEffect(() => {
       axios.get(`http://travel-test-backend.herokuapp.com/countries/${idName}`)
        .then((res) => setCountry(res.data))
   }, [])
   console.log(country)
   
    const makeCountries = () => {
            const {name, capital, img, info, sights} = country
            return(
                <>
                    <div className='header'>
                        <div className='title'>
                            <h2>{name}</h2>
                            <h3>{capital}</h3>
                        </div>
                        <div>
                            <p>{info}</p>
                        </div>
                        <div className='avatar'>
                            <img src={img} alt='country avatar' width='100%' height='100%'/>
                        </div>
                    </div>
                    {
                       !Array.isArray(sights) ? null : sights.map(item => {
                        return(
                         <div className='header'>
                             <div className='title'>
                                 <h2>{item.name}</h2>
                             </div>
                             <div>
                                 <p>{item.description}</p>
                             </div>
                             <div className='avatar'>
                                 <img src={item.img} alt='country avatar' width='100%' height='100%'/>
                             </div>
                             <div>
                                 <h4>Rates:</h4>
                                 {item.rates.map(r => {
                                     return(
                                         <h5>{`${r.user}: ${r.rate}`}</h5>
                                     )
                                 })}
                             </div>
                         </div>
                        )
                    })
                    }
                </>
            )
        
    }
    return (
        <div className='wrapper'>
           { makeCountries() } 
        </div>
    )
}