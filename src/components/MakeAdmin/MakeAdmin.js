import React, { useState } from 'react';

import swal from 'sweetalert';





const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    // const { user } = useAuth();
    // const history = useHistory()

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email }
        console.log(user);
        e.preventDefault()
        fetch('https://hidden-retreat-64560.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('idToken')}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    swal("Admin Added Successfully!", "You clicked Okay!", "success");
                }
            })
    }


    return (
        <div className="custom-height d-flex justify-content-center">
            <div className="container">
                <h3 className="mb-5 mt-3">Make an Admin</h3>
                <input onBlur={handleOnBlur} placeholder="Enter Email" className="rounded-3 me-2 mb-2 w-75 p-2" type="text" />
                <button className="regular-btn" onClick={handleAdminSubmit}>Make Admin</button>
            </div>
        </div >
    );
};

export default MakeAdmin;

// justify-content-center
// align-items-center