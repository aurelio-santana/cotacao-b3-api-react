import FormClass from 'react-bootstrap/Form';
import ButtonClass from 'react-bootstrap/Button';
import InputClass from 'react-bootstrap/InputGroup';
import '../styles/Style.css';
import Grid from './Grid';

function Form() {

    

    return (
        <>
        
            <div className="form-container">
                <h5 className='main-title'>Selecione o tipo de importação de dados desejado.</h5>
                <FormClass.Select id="form-file" aria-label="Default select example" onChange={selectOption}>
                    <option>Selecione a opção de dados</option>
                    <option value="1">Usar dados padrão</option>
                    <option value="2">Importar arquivo</option>
                    <option value="3">URL API</option>
                </FormClass.Select>

                

                <div className="form-option">

                    <div id="value-default">
                        <FormClass.Label>Arquivo default encontrado</FormClass.Label>
                        <InputClass.Text type="text" size="sm" disabled>apiB3.json</InputClass.Text>

                        {/* <FormClass.Group controlId="formFileSm" className="mb-3">
                            <FormClass.Label>Arquivo default</FormClass.Label>
                            <FormClass.Control type="file" size="sm" disabled="true"/>
                        </FormClass.Group> */}
                    </div>
                    

                    <div id="value-url" className='input'>
                    <FormClass.Label>Insira a URL da API desejada</FormClass.Label>
                        <InputClass size="sm" className="mb-3">
                            
                            <InputClass.Text id="inputGroup-sizing-sm">URL</InputClass.Text>
                            <FormClass.Control
                                aria-label="Small"
                                aria-describedby="inputGroup-sizing-sm"
                            />
                        </InputClass>
                    </div>
                    
                    <div id="value-file">
                        <FormClass.Group controlId="formFileSm" className="mb-3">
                            <FormClass.Label>Selecione o arquivo</FormClass.Label>
                            <FormClass.Control type="file" size="sm"
                            className='input-field' onChange={setFile.bind(this)}

                            />
                        </FormClass.Group>
                    </div>    
                </div>
                <ButtonClass className="button-input">Carregar</ButtonClass>
                
            </div>
        </>
    )

}

function setFile(event) {
    //console.log(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();
    let ready;
    
    reader.addEventListener('load', function(){
        ready = JSON.parse(reader.result);
        console.log("ready: ", ready);
        Grid(ready);
    })

    if(file) {
        reader.readAsText(file);      
    }

    
                        
    /* console.log(event.target.files[0]) */
}

function selectOption() {
    var value = document.getElementById("form-file").value

    value === "1" ? document.getElementById("value-default").style.display = "grid"
    : document.getElementById("value-default").style.display = "none";

    value === "2" ? document.getElementById("value-file").style.display = "block"
    : document.getElementById("value-file").style.display = "none";

    value === "3" ? document.getElementById("value-url").style.display = "block"
    : document.getElementById("value-url").style.display = "none";


}

export default Form

/* ('#value-default').show(); */