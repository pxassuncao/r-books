import './estilo.css'
import logo from '../../Images/logo.svg'

function Logo(){
    return( 
    <div className='logo'>
        <img src={logo} alt='logo da empresa' className='logo-img'></img>
        <p><strong>Norte Space</strong> Books</p>
   </div>)
}


export default Logo