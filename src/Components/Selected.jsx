
import { AiOutlineDelete } from "react-icons/ai";
const Selected = ({player,handleRemovePlayer}) => {
    return (
        
             <div className="flex justify-between items-center border p-3 my-5 rounded-md">
                <div className="flex gap-5 items-center">
             <div>
                            <img src={player.player_img} alt={player.name} className="w-20 h-20 object-cover rounded-md" />
                           
             </div>
             <div>
                <h2 className="text-3xl font-semibold">{player.name}</h2>
                <p className="text-gray-400 text-2xl ">{player.player_bat_style}</p>
             

             </div>
             </div>
             <div>
                <AiOutlineDelete onClick={()=>{handleRemovePlayer(player.player_id)}} className="text-3xl text-red-500 cursor-pointer"></AiOutlineDelete>
             </div>

             </div>

            
        
    );
};

export default Selected;