import React, { useEffect, useState } from 'react'
import Restaurantcard from './Restaurantcard';


function Home() {
    //state to hold datas
    const [restaurants, setrestaurants] = useState([])

    //api to access all restaurants from restaurants.json
    const fetchRestaurant = async () => {
        var result = await fetch('/restaurants.json')

        //convert to js
        result.json().then(data => setrestaurants(data.restaurants))

    }
    console.log(restaurants);
    useEffect(() => {
        fetchRestaurant()
    }, [])
    return (
        <div>
            <Restaurantcard data={restaurants}></Restaurantcard>
        </div>
    )
}

export default Home