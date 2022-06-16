import React, { Component } from 'react'
// import LifeCycle from './LifeCycle'
import LifeCycleFunc from './LifeCycleFunc'

export default class BelajarUseEffect extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isHide: false
      }
    }

    render() {
        const { isHide } = this.state
        return (
        <div className='container mt-3'>
            <header>
                <h2>Contoh Lifecycle Component & Use Effect</h2>
            </header>
            <hr />
            <button onClick={() => this.setState({ isHide: !isHide })}>
                {isHide ? "Tampilkan" : "Sembunyikan"}
            </button>
            
            {/* { !isHide && <LifeCycle /> } */}
            { !isHide && <LifeCycleFunc /> }
            

            <hr /> 
            <footer>
                <p>Created By Wildan Pratama</p>
            </footer>
        </div>
        )
    }
}
