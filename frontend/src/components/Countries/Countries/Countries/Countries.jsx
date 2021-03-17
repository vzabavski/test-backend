import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import './index.css'
export const Countries = () => {
   const [countries, setCountries] = React.useState([])
   React.useEffect(() => {
       axios.get('http://travel-test-backend.herokuapp.com/countries/')
        .then((res) => setCountries(res.data))
   }, [])
   console.log(countries)
    const makeCountries = () => {
        return countries.map((c, idx) => {
            const {name, capital, img, _id} = c
            return(
                <div>
                    <div className='title'>
                        <Link to={`countries/${_id}`}>
                            <h2>{name}</h2>
                        </Link>
                        <h3>{capital}</h3>
                    </div>
                    <div className='avatar'>
                        <img src={img} alt='country avatar' width='100%' height='100%'/>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className='wrapper'>
           { makeCountries() } 
        </div>
    )
}