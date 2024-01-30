import React, { useState } from "react";
import useAxios from "../utils/useAxios";

const CustomerEditForm = ({OnSave, customer}) => {
    const [first_name, setFirstName] = useState(customer.first_name);
    const [last_name, setLastName] = useState(customer.last_name);
    const [email, setEmail] = useState(customer.email);
    const [phoneNumber, setPhoneNumber] = useState(customer.phone_number);
    const [addressLine1, setAddressLine1] = useState(customer.address_line_1);
    const [addressLine2, setAddressLine2] = useState(customer.address_line_2);
    const [city, setCity] = useState(customer.city);
    const [state, setState] = useState(customer.state);
    const [postalCode, setPostalCode] = useState(customer.postal_code);
    const [dateOfBirth, setDateOfBirth] = useState(customer.date_of_birth);
    const [error, setError] = useState('')
    const api = useAxios()

    const handleSubmit = async () =>{
        try{
            const response = await api.patch(`/api/customers/${customer.id}`,{
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
            if (response.status === 200){
                console.log("200 status");
                OnSave()
            }
        }
        catch(error){
            setError('some error occured, try again !')
        }
    }

    return (
        <div className="flex">
            <div className="flex flex-col w-1/2 px-4">
                <div className="flex justify-around py-3">
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        First Name:
                    </label>
                    <input
                        className="p-1 rounded-sm m-1"
                        type="text" placeholder="First Name"
                        value={first_name}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                    </div>
                    <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Last Name:
                    </label>
                    <input
                        className="p-1 rounded-sm m-1"
                        type="text"
                        placeholder="Last Name"
                        value={last_name}
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                    </div>
                </div>
                <label className="block text-sm font-medium text-gray-700 pt-3">
                        Email:
                </label>
                <input
                    className="p-1 rounded-sm m-1"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="block text-sm font-medium text-gray-700 pt-3">
                        Phone Number:
                </label>
                <input
                    className="p-1 rounded-sm m-1"
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <label className="block text-sm font-medium text-gray-700 pt-3">
                        Address Line 1:
                </label>
                <input
                    className="p-1 rounded-sm m-1 "
                    type="text"
                    placeholder="Address Line 1"
                    value={addressLine1}
                    onChange={(e) => setAddressLine1(e.target.value)}
                />
                <label className="block text-sm font-medium text-gray-700 pt-3">
                    Address Line 2:
                </label>
                <input
                    className="p-1 rounded-sm m-1 "
                    type="text"
                    placeholder="Address Line 2"
                    value={addressLine2}
                    onChange={(e) => setAddressLine2(e.target.value)}
                />
            </div>
            <div className="flex flex-col w-1/2 px-4">
                <label className="block text-sm font-medium text-gray-700">
                        City:
                </label>
                <input
                    className="p-1 rounded-sm m-1 "
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
                <label className="block text-sm font-medium text-gray-700 pt-3">
                        State:
                </label>
                <input
                    className="p-1 rounded-sm m-1 "
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
                <label className="block text-sm font-medium text-gray-700 pt-3">
                        Postal Code:
                </label>
                <input
                    className="p-1 rounded-sm m-1 "
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                />
                <label className="block text-sm font-medium text-gray-700 pt-3">
                        Date of Birth:
                </label>
                <input
                    className="p-1 rounded-sm m-1 "
                    type="date"
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <button  className="bg-blue-500 text-white p-2 rounded-sm hover:bg-blue-700 mt-3" onClick={handleSubmit}>Update</button>
                {error && <p>{error}</p>}
            </div>
        </div>
        
    )
}

export default CustomerEditForm;