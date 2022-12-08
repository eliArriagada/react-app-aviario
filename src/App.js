import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Card  from './ Card';
import Footer from './Footer';
function App() {
  return (
    <div className="App">
      <Header />
    
    
      <Card url="https://cdn.pixabay.com/photo/2022/11/28/20/52/bird-7623166_1280.jpg" nombre="Larosterna" descripcion="El charrán inca, también conocido como zarcillo o gaviotín monja, es una especie de ave Charadriiforme de la familia Sternidae. Es una ave marina que habita en América del Sur. Se encuentra en las costas de Perú y Chile." />
      <Card url="https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_1280.jpg" nombre="Alcedininae" descripcion="Los martines pescadores de río o martines pescadores pigmeos, subfamilia Alcedininae, son una de las tres subfamilias de martines pescadores" />
      <Card url="https://cdn.pixabay.com/photo/2022/11/07/06/23/european-crested-tit-7575701_1280.jpg" nombre="Lophophanes cristatus" descripcion="El herrerillo capuchino es una especie de ave paseriforme de la familia Paridae. Es una especie muy difundida y común en los bosques de coníferas del centro y el norte de Europa y en los bosques de hoja caduca de Francia y de la península ibérica" />

      <Footer/>
    </div>
  );
}

export default App;
