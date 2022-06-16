// 3 Jenis Component

// Class Component biasa nya digunakan ketika ingin membuat sebuah komponen besar dan juga bisa melakukan lifecycle component
// import React, { Component } from 'react'

// export default class Navbar extends Component {
//   render() {
//     return (
//       <div>Navbar</div>
//     )
//   }
// }

// Function Component
// import React from 'react'

// function Navbar() {
//   return (
//     <div>Navbar</div>
//   )
// }

// Arrow Function Component biasa nya digunakan ketika membuat component yang simple atau 
const Navbar = () => {
    return (
      <div>
        <h1>Navbar</h1>
      </div>
    );
}

export default Navbar;