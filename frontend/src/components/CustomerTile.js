import React, { useState } from "react"
import CustomerDetailView from "./CustomerDetailView";

const CustomerTile = ({ customer, handleEditCustomer, handleCustomerCompletion, handleDeleteCustomer }) =>{
    const parsedDate = new Date(customer.date_of_birth);
    const date = parsedDate.toISOString().slice(0, 10);
    const time = parsedDate.toISOString().slice(11, 16);

    const [showDetailView, setShowDetailView] = useState(false)
    return(
        <div className="bg-cyan-600 text-white rounded-lg p-2 m-2 bg-opacity-80">
        <li key={customer?.id} className="flex justify-around p-2">
            <div className="w-2/4">
                <h3 className="text-lg font-semibold mb-2">{customer?.first_name} {customer?.last_name}</h3>
                <p className="text-sm mb-2">Email: {customer?.email}</p>
                <p className="text-sm mb-2">Phone Number: {customer?.phone_number}</p>
                <p className="text-sm">DOB: {date} Time: {time}</p>
            </div>
            
            <div className="flex flex-col w-1/4 items-center">
                <label className="flex items-center">
                </label>
                <button
                    onClick={() => handleEditCustomer(customer)}
                    className="hover:shadow-md hover:shadow-green-500 text-white px-3 py-1 rounded-full"
                >
                    Edit
                </button>
                <button
                    onClick={() => handleDeleteCustomer(customer.id)}
                    className="hover:shadow-md hover:shadow-red-700 text-white px-3 py-1 rounded-full "
                >
                    Delete
                </button>
                <button
                    onClick={() => setShowDetailView(true)}
                    className="hover:shadow-md hover:shadow-indigo-700 text-white px-3 py-1 rounded-full "
                >
                    Detailed View
                </button>
                {showDetailView && (
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                    <div className="bg-cyan-500 m-8 p-8 rounded-lg">
                        <button
                        className="absolute top-5 right-5 text-white text-6xl hover:text-gray-900"
                            onClick={() => setShowDetailView(false)}
                        >
                        &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Detail View of Customer</h2>
                        <CustomerDetailView customer={customer} />
                    </div>
                    </div>
                )}
            </div>
        </li>
        </div>

    )
}

export default CustomerTile;