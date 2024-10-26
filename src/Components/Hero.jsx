

const Hero = ({handleCoin}) => {
    return (
        <div>
        <div className="bg-[#131313] stroke-[1px] py-10 mx-14 rounded-2xl flex flex-col justify-center items-center space-y-5">
            <div>
                <img src="/public/images/banner-main.png" alt="" />
            </div>
            <h1 className="text-white text-4xl">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h3 className="text-gray-300 text-2xl">Beyond Boundaries Beyond Limits</h3>
            <button onClick={()=>{handleCoin(2000000)}} className=" border-2 p-2 bg-orange-400 text-black rounded-lg font-bold">Claim Free Credit</button>
        </div>
        </div>
    );
};

export default Hero;