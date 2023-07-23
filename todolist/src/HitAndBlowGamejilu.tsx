import React, { useState } from "react";

interface Guess {
    number : string;
    hit: number;
    blow: number;
}

const getRandomNumber = () : string => {
    const nums: number[] = [];
    while(nums.length < 4) {
        const num = Math.floor(Math.random() * 9) + 1;
        if(!nums.includes(num)) {
            nums.push(num);
        }
    }
    return nums.join('');
}

const HitAndBlowGame2 : React.FC = () => {
    const [targetNumber] = useState<string>(getRandomNumber());

    const [guessNumber, setGuessNumber] = useState<string>('');

    const [guessHistory, setGuessHistory] = useState<Guess[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if(guessNumber.length !== 4) {
            alert("please input 4桁 number");
            return;
        }

        const hits = [];
        const blows = [];
        for (let i = 0; i < 4; i++) {
            if(guessNumber[i] === targetNumber[i]) {
                hits.push(guessNumber[i]);
            } else if(targetNumber.includes (guessNumber[i])) {
                blows.push(guessNumber[i]);
            }
        }

        const guess : Guess = {
            number : guessNumber,
            hit: hits.length,
            blow:blows.length,
        };

        setGuessHistory((prevHistory) => [...prevHistory, guess]);
        setGuessNumber('');
    }

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setGuessNumber(event.target.value);
    }
    
    return (<>
        <form onSubmit={handleSubmit} >
            <input type="text" value={guessNumber} onChange={handleInputChange} />
            <button type="submit">Guess</button>
        </form>

        <div>
            {guessHistory.map((guess, index) =>(
                <div key={index}>
                    <p>guess number: {guess.number} </p>
                    <p>Hit: {guess.hit} </p>
                    <p>Blow: {guess.blow} </p>
                </div>
            ))}
        </div>
    </>)
}

export default HitAndBlowGame2;