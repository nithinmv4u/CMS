import { format } from 'date-fns';

const CustomerDetailView = ({customer}) => {
    const formattedCreatedAt = format(new Date(customer.created_at), 'MMMM d, yyyy HH:mm:ss');
    const formattedUpdatedAt = format(new Date(customer.updated_at), 'MMMM d, yyyy HH:mm:ss');
    return(
        <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">{`${customer.first_name} ${customer.last_name}`}</h2>
        <div>
          <p>Email: {customer.email}</p>
          <p>Phone Number: {customer.phone_number}</p>
          <p>Address Line 1: {customer.address_line_1}</p>
          <p>Address Line 2: {customer.address_line_2}</p>
          <p>City: {customer.city}</p>
          <p>State: {customer.state}</p>
          <p>Postal Code: {customer.postal_code}</p>
          <p>Date of Birth: {customer.date_of_birth}</p>
          <p>Created At: {formattedUpdatedAt}</p>
          <p>Updated At: {formattedUpdatedAt}</p>
          <p>User ID: {customer.user}</p>
        </div>
      </div>
    )
}

export default CustomerDetailView