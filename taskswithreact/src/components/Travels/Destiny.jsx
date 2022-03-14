function Destiny() {
    const handleChange= (evt)=>{
        alert('Tu destino es viajar a '+evt.target.value)
    }
    return(
        <div>
            <select name="city" onChange={handleChange}>
                <option value="Buenos Aires">Buenos Aires</option>
                <option value="Sydney">Sydney</option>
                <option value="Praga">Praga</option>
                <option value="Boston">Boston</option>
                <option value="Tokio">Tokio</option>
            </select>
        </div>
    )
}

export default Destiny;