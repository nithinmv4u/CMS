import React, { useState } from "react";
import useAxios from "../utils/useAxios";

const CustomerAddForm = ({handleAddCustomer}) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [error, setError] = useState('')
    const api = useAxios()

    const handleSubmit = async () =>{
        try{
            const response = await api.post('/api/customers/',{
                first_name,
                last_name,
                email,
                phone_number: phoneNumber,
                address_line_1: addressLine1,
                address_line_2: addressLine2,
                city,
                state,
                postal_code: postalCode,
                date_of_birth: dateOfBirth,
            });
            console.log("create: ",response);
            console.log("status: ",response.status);
            if (response.status === 201){
                console.log("201 status");
                handleAddCustomer()
            }
        }
        catch(error){
            setError('some error occured, try again !')
        }
    }

    return (
        <div className="p-2 m-2 bg-cyan-600 rounded-md flex flex-col bg-opacity-75">
            <input
                className="p-1 rounded-sm m-1"
                type="text" placeholder="First Name"
                value={first_name}
                onChange={(e)=>setFirstName(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1"
                type="text"
                placeholder="First Name"
                value={last_name}
                onChange={(e)=>setLastName(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="Address Line 1"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="Address Line 2"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="State"
                value={state}
                onChange={(e) => setState(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="text"
                placeholder="Postal Code"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
            />
            <input
                className="p-1 rounded-sm m-1 h-20"
                type="date"
                placeholder="Date of Birth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <button className="text-white p-2 bg-cyan-700 m-2 rounded-sm hover:shadow-md hover:shadow-green-400" onClick={handleSubmit}>Add</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default CustomerAddForm;