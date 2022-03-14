import './PropsClass.css'
import Title from './Title'
import Content from './Content';


const PropsClass=(props)=>{
    return(
        <div className='propsClass'>
            <Title titulo={props.title}/>
            <Content>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus neque doloribus exercitationem ipsum fugit ab assumenda itaque, facilis, rem dolor laboriosam debitis eveniet, accusamus consequuntur suscipit? Cum provident soluta iure.</p>
                <img src="https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800" alt="image" />
            </Content>
            <hr />
            <Content>
                <h1>Other children content</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde fuga vitae impedit, voluptates doloribus excepturi inventore repudiandae similique pariatur nisi consectetur rerum minus illo esse corporis dolores velit eius! Nulla?</p>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="image" />
                <ul>
                    <li>Otra forma de hacer las cosas</li>
                    <li>hay que practicar tanto</li>
                    <li>Pero me alegra el intento</li>
                    <li>Jajaja</li>
                </ul>
            </Content>
        </div>
    );
}

export default PropsClass