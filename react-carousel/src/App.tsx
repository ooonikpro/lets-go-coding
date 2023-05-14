import './App.scss';
import Carousel from './components/carousel/Carousel';

const SLIDES: string[] = [
  'https://cs11.pikabu.ru/post_img/2019/02/04/12/1549312329147951618.jpg',
  'https://scientificrussia.ru/images/b/teb-full.jpg',
  'https://avatars.dzeninfra.ru/get-zen_doc/4460346/pub_6085d3c1e2c7114111efc2a2_6085e4803b735b52f85124ce/scale_1200',
  'https://n1s1.elle.ru/48/7b/36/487b36300c62c5f0cb905da52aa874b4/728x486_1_30b570c2f6c0da65bb56095068e05768@940x627_0xc0a839a4_18087198581488362059.jpeg',
];

const App = () => {
  return (
    <div>
      <Carousel slides={SLIDES}/>
    </div>
  )
}

export default App;