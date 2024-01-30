import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { jwtDecode as jwt_decode} from "jwt-decode";
import useAxios from "../utils/useAxios";
import CustomerAddForm from "../components/CustomerAddForm";
import CustomerEditForm from "../components/CustomerEditForm";
import CustomerTile from "../components/CustomerTile";

const HomePage = () => {
    const {authToken, logoutUser} = useContext(AuthContext)
    const [customers, setCustomers] = useState([]);
    const [showAddCustomer, setShowAddCustomer] = useState(false)
    const [showEditCustomer, setShowEditCustomer] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [error, setError] = useState('')
    const api = useAxios()
    console.log("at homepage");

    console.log(customers);
    console.log(customers.count);
    console.log("access HomePage",jwt_decode(authToken?.access));

    const getCustomers = async(page) => {
        console.log("get Customers");
        const response = await api.get(`/api/customers/?page=${page}`);
        console.log("response : ",response);
        if(response.status === 200){
            setCustomers(response.data)
        }else{
            logoutUser();
        }
    }

    useEffect(() => {
        console.log("useEffect");
        getCustomers(currentPage)
    },[currentPage]);

    const handleNextPage = () => {
        setCurrentPage(currentPage + 1);
    };
    
    const handlePreviousPage = () => {
        setCurrentPage(currentPage - 1);
    };

    const handleAddCustomer = () =>{
        console.log("at handleAddCustomer");
        setShowAddCustomer(!showAddCustomer)
        getCustomers(currentPage)
    }
    const handleEditCustomer = (customer) =>{
        console.log("at handleAddCustomer");
        setShowEditCustomer(customer)
    }

    const OnSave = () => {
        console.log("at save");
        getCustomers(currentPage);
        setShowEditCustomer(null)
    };

    const handleCustomerCompletion = async (customerId, isCompleted) =>{
        try{
            const response = await api.patch(`/api/customers/${customerId}`,{
                is_completed : isCompleted,
            });
            console.log("complete: ",response);
            console.log("status: ",response.status);
            if (response.status === 200){
                console.log("200 status");
                getCustomers(currentPage)
            }
        }
        catch(error){
            setError('some error occured, try again !')
        }
    }

    const handleDeleteCustomer = async (customerId) =>{
        try{
            const response = await api.delete(`/api/customers/${customerId}`);
            console.log("complete: ",response);
            console.log("status: ",response.status);
            if (response.status === 204){
                console.log("200 status");
                getCustomers(currentPage);
            }
        }
        catch(error){
            setError('some error occured, try again !')
        }
    }

    const homeContext = {
        handleEditCustomer : handleEditCustomer,
        handleCustomerCompletion : handleCustomerCompletion,
        handleDeleteCustomer : handleDeleteCustomer,
    }


    return customers?.count ? (
        <div className="min-h-screen flex justify-around" style={{ background: `url('public_assets/dubai.jpg')`, backgroundSize: 'cover' }}>
            <div className="w-8/12 bg-opacity-70">
                <div className="sticky top-0 m-2 p-2 bg-cyan-900 rounded-md text-center bg-opacity-75">
                </div>   
                <ul className="m-2 p-2 shadow-2xl rounded-md">
                    { customers.results.map((customer) =>(<CustomerTile customer={customer}  {...homeContext} />))}
                    {/* {showEditCustomer && <CustomerEditForm OnSave={OnSave} customer={showEditCustomer}/>} */}
                    
                    {showEditCustomer && (
                        <div className="fixed inset-0 bg-gray-800 bg-opacity-75">
                        <div className="bg-cyan-500 m-8 p-8 rounded-lg">
                            <button
                            className="absolute top-5 right-5 text-white text-6xl hover:text-gray-900"
                              onClick={() => setShowEditCustomer(null)}
                            >
                            &times;
                            </button>
                            <h2 className="text-2xl font-bold mb-4">Edit Customer</h2>
                            <CustomerEditForm OnSave={OnSave} customer={showEditCustomer} />
                        </div>
                        </div>
                    )}


                </ul>
                <div className="grid grid-cols-2 p-2 m-2 font-bold text-white bg-cyan-900 rounded-md bg-opacity-70">
                    {customers.previous && <button onClick={handlePreviousPage}><span>&lt; &lt; Previous</span></button>}
                    {customers.next && <button onClick={handleNextPage}><span>Next &gt; &gt;</span></button>}
                </div>
            </div>
            
            <div className="w-3/12 p-2 m-2">
                <div className=" bg-cyan-900 rounded-md text-center bg-opacity-75">
                    {
                        showAddCustomer ? (
                                <>
                                <button className="hover:text-red-400 rounded-md p-2 mx-2 text-white w-full font-semibold" onClick={()=>handleAddCustomer()}>Close</button>
                                <CustomerAddForm handleAddCustomer={handleAddCustomer}/>
                                </>
                            ) : (
                                <button className="hover:text-yellow-200 rounded-md p-2 mx-2 text-white w-full font-semibold" onClick={()=>handleAddCustomer()}>Add Customer</button>
                            )
                    }
                </div>
            </div>
        </div>
    ) : (
        <>
        <p className="font-bold text-center">no customers present</p>
        {
            showAddCustomer ? (
                <>
                <button className="hover:text-red-400 rounded-md p-2 mx-2 text-white w-full font-semibold" onClick={()=>handleAddCustomer()}>Close</button>
                <CustomerAddForm handleAddCustomer={handleAddCustomer}/>
                </>
            ) : (
                <button className="hover:text-yellow-200 rounded-md p-2 mx-2 text-white w-full font-semibold" onClick={()=>handleAddCustomer()}>Add Customer</button>
            )
        }
        </>
        
    )
}

export default HomePage