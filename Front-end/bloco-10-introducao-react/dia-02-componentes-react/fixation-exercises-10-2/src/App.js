import './App.css';
import Image from '../src/Image'

function App() {
  const image = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
  return (
    <div>
        <Image source={image} alternativeText='Cute cat staring'/>
    </div>
  );
}

export default App;
