/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import './Content.css';

function Content(props) {
  return (
    <div className="contentChildren">
      {props.children}
    </div>
  );
}

export default Content;
