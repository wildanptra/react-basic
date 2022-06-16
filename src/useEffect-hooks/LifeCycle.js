import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: '', 
      }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                name: json.name,
            })
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: this.state.name,
            isUpdate: false,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {
            this.setState({
                isUpdate: true,
            })
        });
    }

    componentDidUpdate () {
        const { isUpdate } = this.state;

        if(isUpdate){
            alert('Nama Berhasil di Update');
            this.setState({
                isUpdate: false
            })
        }
    }

    componentWillUnmount() {
        console.log('Component di Copot');
    }

    render() {
        return (
            <div>
                <h6 className='mt-3'>Name : {this.state.name}</h6>
                <hr />
                <h6>Update Name :</h6>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input 
                    type="text"
                    placeholder="Change Name"
                    name="name"
                    onChange={(event) => this.setState({ name: event.target.value })} />
                    <button className="ms-2" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
