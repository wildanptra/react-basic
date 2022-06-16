import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component { 
    
    /* 
        Perbedaan State dan Props : 
        state
        1. bisa di ganti ganti asynchronus
        2. state bisa di ubah menggunakan this.State

        props
        1. props itu readonly atau hanya bisa dilihat saja
        2. props tidak dapat di ubah
    */

    constructor(props){
        super(props);
        this.state = {
            makanan : "Bakso"
        }
    }

    gantiMakanan = (makanan_baru) => {
        this.setState({
            makanan: makanan_baru,
        })
    }

    render() {
        return (
            <div>
                <h2>{ this.state.makanan }</h2>
                <button onClick={() => this.gantiMakanan("Soto")}>Ganti Makanan</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}
