import React from 'react'

const foods = [
    {
        name  : 'Rendang',
        price : 18000
    },
    {
        name  : 'Mie Ayam',
        price : 7000
    },
    {
        name  : 'Nasi Goreng',
        price : 14000
    },
    {
        name  : 'Lontong Sayur',
        price : 10000
    }
]; 

// Reduce (untuk membuat total jumlah)
const total_paid = foods.reduce((total_price, food) => total_price+food.price , 0);

const Map = () => {
    return (
        <div>
            {/* Map untuk melakukan looping array */}
            <h2>Map Sederhana</h2>
            <ul>
                {foods.map((food, index) => (
                    <li>{index+1}. { food.name } - Harga {food.price}</li>
                ))}
            </ul>

            {/* Filter untuk melakukan filter terlebih dan dilakukan sebelum looping */}
            <h2>Map Filter Harga yang lebih dari 10.000</h2>
            <ul>
                {foods
                .filter((food) => food.price > 10000)
                .map((food, index) => (
                    <li>{index+1}. { food.name } - Harga {food.price}</li>
                ))}
            </ul>
                
            {/* Total dari hasil looping Reduce */}
            <h3>Total Harga : {total_paid}</h3>
        </div>
    )
}

export default Map