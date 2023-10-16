import { BsFillEyeFill } from "react-icons/bs";
import { MdModeEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, name, price, taste, photo } = coffee;

    const handledelete = _id => {
        console.log(_id);
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
                fetch(`http://localhost:5000/coffees/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining =coffees.filter (cof => cof._id !== _id)
                            setCoffees(remaining);
                        }

                    })
            }
        })
    }
    return (
        <div className="bg-[#F5F4F1] flex items-center justify-between gap-16 px-12">
            <div className="flex items-center gap-8">
                <img className="w-[190px] h-[239px]" src={photo} />
                <div>
                    <h1><span className="font-bold text-xl">Name:</span> {name}</h1>
                    <p><span className="font-bold text-xl">Taste:</span> {taste}</p>
                    <p><span className="font-bold text-xl">Price:</span> {price}</p>
                </div>
            </div>
            <div className="flex flex-col">
                <button className="h-10 w-10 rounded bg-[#D2B48C] text-white"><BsFillEyeFill className="text-xl mx-auto"></BsFillEyeFill></button>
                <button className="h-10 w-10 rounded bg-[#3C393B] text-white my-4"><MdModeEdit className="text-xl mx-auto"></MdModeEdit></button>
                <button onClick={() => handledelete(_id)} className="h-10 w-10 rounded bg-[#EA4744] hover:bg-red-700 text-white"><MdDelete className="text-xl mx-auto"></MdDelete></button>
            </div>
        </div>
    );
};

export default CoffeeCard;