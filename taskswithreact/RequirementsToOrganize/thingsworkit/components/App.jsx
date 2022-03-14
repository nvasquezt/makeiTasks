import userImage from './userMock.png';
import './userProfileStyle.css'


function App() {
  return (
  <div className="container">
  <div className="container_userPanel">
    <h2><a href="#">Volver</a></h2>
    <div className="container_imageContainer"><img className="container_imageContainer--userImage" 
    src={userImage} alt="profile" /></div>
  <br /><br /><h2><a href="#">Mis datos</a></h2><br /><br />
    <h2><a href="#">Historial de negocios</a></h2>
  </div>
  <div className="contentProfile">
    <table className="contentProfile_userProfileTable">
        <tr>
            <td><h2><strong>Nombre de Usuario:</strong></h2></td>
            <td>userTest1</td>
        </tr>
        <tr>
            <td><h2><strong>Nombres:</strong></h2></td>
            <td>Darwin</td>
        </tr>
        <tr>
            <td><h2><strong>Apellidos:</strong></h2></td>
            <td>Pedraza Carvajal</td>
        </tr>
        <tr>
            <td><h2><strong>Correo:</strong></h2></td>
            <td>usertest1@workit.com</td>
        </tr>
        <tr>
            <td><h2><strong>País:</strong></h2></td>
            <td>España</td>
        </tr>
        <tr>
            <td><h2>Ciudad:</h2></td>
            <td>Málaga</td>
        </tr>
        <tr>
            <td><h2>Dirección:</h2></td>
            <td>Avenida siempre viva # 123</td>
        </tr>
    </table>
  </div>
</div>
);
  }
export default App;
