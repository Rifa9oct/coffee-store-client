import img from "../assets/logo1.png"

const Root = () => {
    const bg = {
        backgroundImage: 'url("https://i.ibb.co/QCxs77r/15.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div>
            <div className="flex justify-center items-center" style={bg}>
                <img className="w-[75px] h-[90px]" src={img} alt="" />
                <h1 className="text-6xl text-white">Espresso Emporium</h1>
            </div>
        </div>
    );
};

export default Root;