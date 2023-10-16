import { useLoaderData } from "react-router-dom";
import img from "../assets/logo1.png"
import { useState } from "react";
import CoffeeCard from "../components/CoffeeCard";

const Root = () => {
    const bg = {
        backgroundImage: 'url("https://i.ibb.co/QCxs77r/15.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }

    const lodedCoffee = useLoaderData();
    const [coffees, setCoffees] = useState(lodedCoffee);
    console.log(lodedCoffee)
    return (
        <div>
            <div className="flex justify-center items-center" style={bg}>
                <img className="w-[75px] h-[90px]" src={img} alt="" />
                <h1 className="text-6xl text-white">Espresso Emporium</h1>
            </div>
            <div className="my-32 max-w-[1320px] mx-auto">
                <h1 className="text-center text-5xl text-amber-900 font-semibold">Our Popular Products</h1>
                <div className="mt-16 grid grid-cols-2 juystify-center items-center gap-6">
                    {
                        coffees.map(coffee => <CoffeeCard 
                        key={coffee._id}
                        coffee={coffee}
                        coffees={coffees}
                        setCoffees={setCoffees}></CoffeeCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Root;