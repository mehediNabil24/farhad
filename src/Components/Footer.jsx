const Footer = () => {
    return (
        <div className="bg-black pb-3 mt-8">
            <div className="mx-14 pt-5 pb-3">
                <div className="flex justify-center">
                <img className="" src="/public/images/logo-footer.png" alt="" />
                </div>
                <div className="grid grid-cols-3">

                <div className="text-white space-y-3">
                    <p className="font-semibold">About us</p>
                    <p className="text-gray-300">We are a passionate team dedicated to <br /> providing the best services to our customers.</p>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold text-white">Quick Links</h3>
                    <ul className="text-gray-300">
                        <li>Home</li>
                        <li>Services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="space-y-3">
                    <h3 className="font-semibold text-white">Subscribe</h3>
                    <p className="text-gray-300">Subscribe to our newsletter for the latest updates.</p>
                    <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="p-2 border rounded-lg w-64 focus:outline-none"
                />
                <button className="border-none rounded-lg p-2 bg-orange-400 text-white hover:bg-orange-500 transition-colors">
                    Subscribe
                </button>
                    
                </div>
                </div>


            </div>
            <hr />
            <p className="text-gray-400 text-center">@2024 Your Company All Rights Reserved.</p>


            
        </div>
    );
};

export default Footer;