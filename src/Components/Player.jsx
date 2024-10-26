
import { IoIosFlag } from "react-icons/io";
const Player = ({player, handleCoin, coinReward, isSelected, handleSelectedList}) => {
    const {player_id,player_img,name,nationality,player_bat_style, player_type, price,rating } = player;

    const handleChoosePlayer = () => {
        if (coinReward>=price){
        
        const deductionAmount = -price; 
        handleCoin(deductionAmount); 
        handleSelectedList(player)
        
}
        
        else {
            alert('Insufficent Balance , can not add this player');
             }
    };
        
        

        
    
    return (
        <div className={`border w-[350px] p-5 space-y-2 mb-8 rounded-lg ${isSelected ? "bg-green-200" : ""}`}>
            <div>
                <img className="w-[300px] h-[250px] object-cover rounded-lg" src={player_img} alt={name} />
            </div>
            <div>
                <h2 className="text-2xl font-semibold">{name}</h2>
            </div>

            <div className="flex justify-between">
                <div className="flex items-center gap-1">
                    <IoIosFlag className="text-2xl" />
                    <p className="text-gray-400 text-xl">{nationality}</p>
                </div>
                <h2>{player_type}</h2>
            </div>

            <hr />
            <h3 className="text-xl font-semibold">Rating: {rating}</h3>
            <p className="font-semibold">Batting Style: <span className="text-gray-400">{player_bat_style}</span></p>

            <div className="flex justify-between items-center">
                <p className="font-semibold">Price: ${price}</p>
                <button
                    onClick={handleChoosePlayer}
                    className={`border px-2 py-1 rounded-md ${isSelected ? "bg-gray-500 text-white" : ""}`}
                >
                    {isSelected ? "Selected" : "Choose Player"}
                </button>
            </div>
        </div>
    );
};

export default Player;