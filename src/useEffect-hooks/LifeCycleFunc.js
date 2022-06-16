import React, { useEffect, useState } from 'react'

export default function LifeCycleFunc() {
    const [name, setName] = useState("");
    const [isUpdate, setUpdate] = useState(false);

    // component did mount
    useEffect(() =>{

        fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((json) => {
            setName(json.name)
        });

    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://jsonplaceholder.typicode.com/users/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            name: name,
            isUpdate: false,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then((json) => {
            setUpdate(true);
        });
    }

    // component did update
    useEffect(() => {
        if(isUpdate){
            alert('Nama Berhasil di Update');
            setUpdate(false);
        }
    }, [isUpdate])

    // component will unmount

    useEffect(() => {

        return () => {
            console.log("component di copot");
        }

    }, [])
    
    return (
        <div>
            <h6 className='mt-3'>Name : {name}</h6>
            <hr />
            <h6>Update Name :</h6>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input 
                type="text"
                placeholder="Change Name"
                name="name"
                onChange={(event) => setName(event.target.value)} />
                <button className="ms-2" type="submit">Submit</button>
            </form>
        </div>
    )
}
