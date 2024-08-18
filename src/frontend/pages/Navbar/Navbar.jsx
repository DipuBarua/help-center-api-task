
const Navbar = () => {
    return (
        <div className="navbar fixed rounded-t-md mt-2 container mx-auto bg-black text-white md:px-24">
            <div className="md:flex-1">
                <a className=" text-xl">Abstract | Help Center</a>
            </div>
            <div className=" md:flex-none">
                <button className="btn btn-ghost border-white">
                    Submit a request
                </button>
            </div>
        </div>
    );
};

export default Navbar;