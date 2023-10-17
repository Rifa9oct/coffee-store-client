import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const lodedUser = useLoaderData();
    const [users,setUsers] = useState(lodedUser);
    console.log(users);

    const handleDelete = _id =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-gzz93wejl-kohinur-akthers-projects.vercel.app/users/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your information has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(user => user._id !== _id)
                            setUsers(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead className="text-3xl font-bold text-blue-500">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold text-xl">
                        {
                            users.map(user => <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.createdAt}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn btn-error">X</button>
                                </td>
                            </tr> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;