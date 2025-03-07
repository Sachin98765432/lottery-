import React, { useState, useEffect } from 'react';

function Lottery() {
    const [numbers, setNumbers] = useState([]); // Use an empty array
    const [message, setMessage] = useState("");

    useEffect(() => {
      if (message === "🎉 Congratulations! 🎉") {
        document.body.style.backgroundColor = "red";
      } else if (message === "❌ Try again.") {
        document.body.style.backgroundColor = "blue";
      }
    }, [message]);

    const generateNumber = () => {
        const randomNums = [
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1,
            Math.floor(Math.random() * 10) + 1
        ];
        setNumbers(randomNums);

        const sum = randomNums.reduce((acc, num) => acc + num, 0); // Fixed reduce function

        if (sum === 15) {
            setMessage("🎉 Congratulations! 🎉");
        } else {
            setMessage("❌ Try again.");
        }
    };

    return (
        <div className="Cards">
            <h1><u><i>Welcome to the Lottery Game</i></u></h1>
            <button onClick={generateNumber}>Generate Numbers</button>

            {numbers.length > 0 && ( // Ensures numbers exist before rendering
                <>
                    <div className="number-cards" style={{ display: 'flex', justifyContent: 'center' }}>
                        {numbers.map((num, index) => (
                            <div key={index} className="card" style={{ margin: '0 10px', padding: '10px', border: '1px solid #000' }}>
                                <h2>Card {index + 1}</h2>
                                <p>Number: {num}</p>
                            </div>
                        ))}
                    </div>
                    <div className="sum-card" style={{ 
                        marginTop: '20px', 
                        padding: '10px', 
                        border: '1px solid #000',
                        backgroundColor: message === "🎉 Congratulations! 🎉" ? "#FFD700" : " lightgreen"
                    }}>
                        <h3>Sum: {numbers.reduce((acc, num) => acc + num, 0)}</h3>
                        <h1>{message}</h1>
                    </div>
                </>
            )}
        </div>
    );
}

export default Lottery;
