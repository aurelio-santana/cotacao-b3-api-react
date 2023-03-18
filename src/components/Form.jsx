import FormClass from 'react-bootstrap/Form';
import ButtonClass from 'react-bootstrap/Button';
import InputClass from 'react-bootstrap/InputGroup';
//import '../styles/darkStyle.css';
import Grid from './Grid';
import { useState } from 'react';
import StocksData from '../assets/stocksB3.json';
import PricesData from '../assets/priceB3.json';

var dataTable;
var importedFile

function Form({callback}) {

    testandoAPI();


    

    
    function handleDataTable(){
        //console.log("teste", getSelectedOption());
    
        callbackDataTable().then((datas) => {
            callback(datas)
        })
        console.log("passou aqui");
    }
    
    
    return (
        <>
        
            <div className="form-container">
                <h5 className='main-title'>Selecione o tipo de importação de dados desejado.</h5>
                <FormClass.Select id="form-file" aria-label="Default select example" onChange={showSelectedOption}>
                    <option value="0">Selecione a opção de dados</option>
                    <option value="1">Usar dados padrão</option>
                    <option value="2">Importar arquivo</option>
                    <option value="3">URL API</option>
                </FormClass.Select>

                

                <div className="form-option">

                    <div id="value-default">
                        <FormClass.Label>Arquivo default encontrado</FormClass.Label>
                        <InputClass.Text type="text" size="sm" disabled>stocksB3.json</InputClass.Text>

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
                                className='url-input-field'
                                onChange={(e) => handleInput(e.target.value)}
                                isInvalid
                                disabled
                                value="Descontinuado por bloqueio de CORS"
                            />
                        </InputClass>
                    </div>
                    
                    <div id="value-file">
                        <FormClass.Group controlId="formFileSm" className="mb-3">
                            <FormClass.Label>Selecione o arquivo</FormClass.Label>
                            <FormClass.Control type="file" size="sm"
                            className='file-input-field' onChange={setFile.bind(this)}

                            />
                        </FormClass.Group>
                    </div>    
                </div>
                <ButtonClass className="button-input" onClick={() => handleDataTable()}>Carregar</ButtonClass>
                {/* <ButtonClass onClick={console.log()}>Carregar</ButtonClass> */}
                
            </div>
        </>
    )

}

function setFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', function(){
        importedFile = JSON.parse(reader.result);
    })

    if(file) {
        reader.readAsText(file);      
    }     
}

/* function setFile(event) {
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
        
} */


//Style function, display/hide.
function showSelectedOption() {
    var value = document.getElementById("form-file").value

    value === "1" ? document.getElementById("value-default").style.display = "grid"
    : document.getElementById("value-default").style.display = "none";

    value === "2" ? document.getElementById("value-file").style.display = "block"
    : document.getElementById("value-file").style.display = "none";

    value === "3" ? document.getElementById("value-url").style.display = "block"
    : document.getElementById("value-url").style.display = "none";
}



function getSelectedOption(){
    return document.getElementById("form-file").value;
    
    
}

async function getUrlData(){
    const response = await fetch(document.querySelector('.url-input-field').value);

    /* https://sistemaswebb3-listados.b3.com.br/indexProxy/indexCall/GetPortfolioDay/
    eyJsYW5ndWFnZSI6ImVuLXVzIiwicGFnZU51bWJlciI6MSwicGFnZVNpemUiOjEyMCwiaW5kZXgiOiJJQk9WIiwic2VnbWVudCI6IjEifQ== */


    const data = await response.json();
    return data;
    //return data.results;
}

/* function handleDataTable(){
    console.log("teste", getSelectedOption());
    switch (getSelectedOption()) {
        case "0":
            console.log("Nenhuma opção foi selecionada");
            break;
        case "1":
            dataTable = StocksData.results;
            break;
        case "2":
            dataTable = this.importedFile;   
            break;
        case "3":
            dataTable = getUrlData();
            break;               
        default:
            console.log("Opção inexistente");
            break;
    }
    console.log("oi")
    console.log("oi", StocksData.results)
    // callback(dataTable);
    
} */



function handleInput(value){
    console.log(value);
}

const callbackDataTable = () => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject(new Error('deu error fi'))
        }

        switch (getSelectedOption()) {
            case "0":
                console.log("Nenhuma opção foi selecionada");
                break;
            case "1":
                dataTable = StocksData.results;
                break;
            case "2":
                dataTable = importedFile;   
                break;
            case "3":
                dataTable = getUrlData();
                break;               
            default:
                console.log("Opção inexistente");
                break;
        }           
        resolve(dataTable)
    })
}



async function testandoAPI(){
    //const response = await fetch(`https://cotacao.b3.com.br/mds/api/v1/instrumentQuotation/cmig3`);
    const response = await fetch(`https://statusinvest.com.br/home/mainsearchquery?q=cmig3`);

    const data = await response.json();

    console.log("teste api: ", data)

}



export default Form

/* ('#value-default').show(); */