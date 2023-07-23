import React, { useReducer, useState } from 'react';

const generateRandomNumber = (): string => {
  const numbers = '0123456789';
  let result = '';
  while (result.length < 4) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    const digit = numbers[randomIndex];
    if (!result.includes(digit)) {
      result += digit;
    }
  }
  return result;
};

interface GuessInput {
    guessIndex : number,
    number: string
}

const GuessInputDate =  {
    guessIndex : 0,
    number: ""
}

const reduceFunc = (sss: GuessInput, acts: string) => {
    return {
        guessIndex : 1,
        number : "1",
    }
}

const HitAndBlowGame: React.FC = () => {
  const [targetNumber, setTargetNumber] = useState<string>(generateRandomNumber());
  const [guess, setGuess] = useState<string>('');
  const [result, setResult] = useState<string>('');


  const [inputs, setInputs] = useReducer(reduceFunc, GuessInputDate);

  const handleGuessChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (guess.length !== 4 || !/^\d+$/.test(guess)) {
      setResult('Please enter a valid 4-digit number.');
      return;
    }

    let hits = 0;
    let blows = 0;

    for (let i = 0; i < 4; i++) {
      if (guess[i] === targetNumber[i]) {
        hits++;
      } else if (targetNumber.includes(guess[i])) {
        blows++;
      }
    }

    if (hits === 4) {
      setResult('Congratulations! You guessed the number!');
    } else {
      setResult(`Hits: ${hits}, Blows: ${blows}`);
    }

    setGuess('');
  
  };

  return (
    <div>
      <h1>Hit and Blow Game</h1>
      <p>Try to guess the 4-digit number!</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="text"
          value={guess}
          onChange={handleGuessChange}
          maxLength={4}
        />
        <button type="submit">Guess</button>
      </form>
      {result && <p>{result}</p>}
      <p>Target Number: {targetNumber}</p>
    </div>
  );
};

export default HitAndBlowGame;
