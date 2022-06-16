import React, { Component } from 'react'
import Hitung from '../components/Hitung'

export default class Home extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <header>
            <h2>Aplikasi Penghitung Jumlah Pengunjung Mall Matahari</h2>
        </header>

        <hr />

        <Hitung />
        
        <hr /> 

        <footer>
            <p>Created By Wildan Pratama</p>
        </footer>
      </div>
    )
  }
}
