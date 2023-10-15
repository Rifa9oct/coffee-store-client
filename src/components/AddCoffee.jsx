import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddUser = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffees ={name,price,supplier,taste,category,details,photo};
        console.log(coffees);

        fetch(`http://localhost:5000/coffees`,{
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffees)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                  title: 'Good job!',
                  text: 'Coffee added successfully.',
                  icon: 'success',
                  confirmButtonText: 'OK'
                })
                form.reset();
              }
        })
    }

    return (
        <div className="bg-[#F4F3F0] py-20 max-w-[1320px] mx-auto my-20">
            <h1 className="text-center text-5xl text-amber-900 font-semibold">Add New Coffee</h1>
            <form onSubmit={handleAddUser}>
                {/* name and chef group */}
                <div className="flex gap-6 justify-center mb-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter coffee name" className="input input-bordered w-[536px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Enter coffee price" className="input input-bordered w-[536px]" required />
                    </div>
                </div>

                {/* Supplier and Taste group */}
                <div className="flex gap-6 justify-center mb-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="input input-bordered w-[536px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Taste</span>
                        </label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="input input-bordered w-[536px]" required />
                    </div>
                </div>

                {/* Category and Details group */}
                <div className="flex gap-6 justify-center mb-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Enter coffee category" className="input input-bordered w-[536px]" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="input input-bordered w-[536px]" required />
                    </div>
                </div>
                {/* Photo */}
                <div className="flex justify-center mb-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-xl">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-[1096px]" required />
                    </div>
                </div>
                <div className="flex justify-center">
                    <input className="btn btn-block bg-[#D2B48C] hover:bg-amber-900 hover:text-white text-[#331A15] w-[1096px]" type="submit" value="Add Coffee" />
                </div>
            </form>
        </div>
    );
};

export default AddCoffee;