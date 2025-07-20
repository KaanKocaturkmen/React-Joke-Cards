import { Jokes } from '../jokes';
import Joke from './Joke';

export default function JokeList () {
  return (
    <>
      {Jokes.map((joke, index) => (
        <Joke 
          key={index}
          header={joke.Setup}
          content={joke.Punchline}
          point = {joke.JokePoint}
        />
      ))}
    </>
  );
};