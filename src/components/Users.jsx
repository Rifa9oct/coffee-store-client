const Users = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className="text-3xl font-bold text-blue-500">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="font-bold text-xl">
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;