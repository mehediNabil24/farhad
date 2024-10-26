const NewsLetter = () => {
    return (
        <div className="mt-20 mx-14 p-10 bg-[url('/images/bg-shadow.png')] bg-cover bg-center rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="mb-6 text-gray-700">Get the latest updates and news right in your inbox!</p>
            <div className="flex justify-center gap-4">
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
    );
};

export default NewsLetter;