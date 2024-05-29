import './App.css';
import Logo from './components/Logo'
import perfil from './Images/perfil.svg'
import sacola from './Images/sacola.svg'

const textoOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MAIS VENDIDOS']
const icones = [perfil, sacola]

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
       <Logo></Logo>
       <ul className='opcoes'>
        {textoOpcoes.map((texto)=>(
          <li className='opcao'><p>{texto}</p></li>
        ))}
       </ul>

       <ul className='icones'>
          {icones.map((icone)=>(
            <li className='icone'><img src={icone}></img></li>
          ))}
       </ul>
       
      </header>
    </div>
  );
}

export default App;
