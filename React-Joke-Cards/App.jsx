import JokeList  from './components/JokeList.jsx';
import Navbar  from './components/Nav.jsx';

export default function App() {
    return (
        <>
            <Navbar text="Jokes App"/>
            <JokeList />                      
        </>
    )
}