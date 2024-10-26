import { useEffect, useState } from "react";
import Player from "./Player";
import Selected from "./Selected";

const Players = ({ handleCoin, coinReward }) => {
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true);

    const handleSelectedList = (player) => {
        const isAlreadySelected = selectedPlayers.some(p => p.player_id === player.player_id);
        
        if (isAlreadySelected) {
            alert(`${player.name} is already selected!`);
            return;
        }

        if (selectedPlayers.length >= 6) {
            alert("You can only select up to 6 players!");
            return;
        }

        setSelectedPlayers([...selectedPlayers, player]);
    };

    const handleRemovePlayer = (playerId) => {
        setSelectedPlayers(selectedPlayers.filter(p => p.player_id !== playerId));
    };

    useEffect(() => {
        fetch('players.json')
            .then(res => res.json())
            .then(data => setPlayers(data));
    }, []);

    return (
        <div className="m-14">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl my-8">
                    {showAvailable ? `Available Players: ${selectedPlayers.length}/6` : "Selected Players"}
                </h2>
                <div>
                    <button
                        onClick={() => setShowAvailable(true)}
                        className={`border p-2 font-semibold mr-2 rounded-md ${showAvailable ? "bg-blue-500 text-white" : ""}`}
                    >
                        Available
                    </button>
                    <button
                        onClick={() => setShowAvailable(false)}
                        className={`border p-2 font-semibold rounded-md ${!showAvailable ? "bg-blue-500 text-white" : ""}`}
                    >
                        Selected ({selectedPlayers.length})
                    </button>
                </div>
            </div>

            <div className={` ${showAvailable ? "grid grid-cols-3 border px-12 py-8 rounded-lg" : ""}`}>
                {showAvailable ? (
                    players.map(player => (
                        <Player
                            key={player.player_id}
                            player={player}
                            handleCoin={handleCoin}
                            coinReward={coinReward}
                            isSelected={selectedPlayers.some(p => p.player_id === player.player_id)}
                            handleSelectedList={handleSelectedList}
                        ></Player>
                    ))
                ) : (
                    selectedPlayers.map(player => (
                        <Selected
                            key={player.player_id}
                            player={player}
                            handleRemovePlayer={handleRemovePlayer}
                        ></Selected>
                    ))
                )}
            </div>
        </div>
    );
};

export default Players;
