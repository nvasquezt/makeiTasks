/* eslint-disable react/react-in-jsx-scope */
import './UserProfile.scss';

function UserProfile() {
  return (
    <div className="container">
      <div className="container_userPanel">
        <button type="button" className="userProfileButton">Volver</button>
        <div className="container_imageContainer">
          <img
            className="container_imageContainer--userImage"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="profile"
          />
        </div>
        <button type="button" className="userProfileButton">Mis datos</button>
        <button type="button" className="userProfileButton">Historial de negocios</button>
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
export default UserProfile;
