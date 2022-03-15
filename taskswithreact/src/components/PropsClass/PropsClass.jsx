/* eslint-disable jsx-a11y/mouse-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-alert */
/* eslint-disable no-console */
import './PropsClass.css';
import Title from './Title';
import Content from './Content';

function PropsClass(props) {
  const handleClick = () => {
    alert('Hola');
  };
  const handleOnMouseOver = () => {
    console.log('Im over button');
  };
  const handleChange = (evt) => {
    console.log(evt.target.name, evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('Formulario Enviado');
  };
  return (
    <div className="propsClass">
      <Title titulo={props.title} />
      <Content>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus neque dolori
          bus exercitationem ipsum fugit ab assumenda itaque, facilis, rem dolor labori
          osam debitis eveniet, accusamus consequuntur suscipit? Cum provident soluta iure.

        </p>
        <img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800" alt="secondImage" />
      </Content>
      <hr />
      <Content>
        <h1>Other children content</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fuga vitae impedit,
          voluptates doloribus excepturi inventore repudiandae similique pariatur nisi
          consectetur rerum minus illo esse corporis dolores velit eius! Nulla?

        </p>
        <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="firstImage" />
        <ul>
          <li>Otra forma de hacer las cosas</li>
          <li>hay que practicar tanto</li>
          <li>Pero me alegra el intento</li>
          <li>Jajaja</li>
        </ul>
      </Content>
      <div className="reactEvents">
        <h1>Working in React Events</h1>
        <button type="button" onClick={handleClick} onMouseOver={handleOnMouseOver}>
          Mostrar más información
        </button>
        <br />
        <form onSubmit={handleSubmit}>
          <input type="text" name="user" onChange={handleChange} />
          {' '}
          <br />
          <input type="email" name="email" onChange={handleChange} />
          <br />
          <br />
          <textarea name="review" cols="30" rows="10" onChange={handleChange} />
          <br />
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PropsClass;
