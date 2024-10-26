

const Navbar = ({coinReward}) => {
    return (
        <div className=" flex m-14 justify-between">
            <div>
                <img src="/public/images/logo.png" alt="" />
            </div>
            <div className="space-x-7">
                <button className="">Home</button>
                <button>Fixture</button>
                <button>Team</button>
                <button>Schedules</button>
                <button className="">{coinReward} Coin</button>

            

            </div>
            
        </div>
    );
};

export default Navbar;