import './Content.css'
const Content = (props)=>{
    return(
        <div className='contentChildren'>
            {props.children}
        </div>
    );
}

export default Content;