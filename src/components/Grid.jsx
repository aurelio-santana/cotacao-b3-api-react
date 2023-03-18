import TableClass from 'react-bootstrap/Table';
//import '../styles/darkStyle.css';
import StocksData from '../assets/stocksB3.json';
import PricesData from '../assets/priceB3.json';
import { ListItem } from '@mui/material';
import { useEffect, useMemo } from 'react';

var allPrices = [{cod: String , price: Number}];


function Grid(props) {


var dataTable;
console.log("props: ", props.dataTable)
if (props.dataTable == undefined)
    dataTable = [];
else
    dataTable = props.dataTable;


/* 
    console.log("grid1");

    if (data.length === undefined)
        dados = StocksData.results;
    else
        dados = data;

    console.log("data2: ", data);
    console.log("dados2: ", dados);
 
    var dataTeste = [];

    getPriceJson();
 */
    /* getData(); */
    var dataTeste = []
    

    return (

        <div className="container">
            <TableClass striped>
                <thead>
                    <tr>


                        <th>Ticker</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Último Preço</th>
                        {/* <th>Preço Médio</th>
                        <th>Total</th>
                        <th>Cotação atual</th>
                        <th>Lucro</th>
                        <th>Data</th>
                        <th>Editar/Remover</th> */}
                    </tr>
                </thead>

                <tbody>
                        {dataTable.map((item, i) => (     
                    <tr key={i}>
                        <td>{item.cod}</td>
                        <td>{item.asset}</td>
                        <td>{item.type}</td>
                        {/* <td>{console.log(getPriceAPI("CMIG4"))}</td> */}
                        <td>{getPriceJson(item.cod)}</td>
                    </tr>
                     ))}
                </tbody>
            </TableClass>     
        </div>
    );
}

function getPriceJson(ticker) {

    var result = null;
    PricesData.some(item => {

        if (item.cod === ticker){
            result = item.price}
            return
    })
    return result;
    
}



/* async function getData() {
    const getData = await (StocksData.results);
    dados = await getData;
    this.dados.forEach(getAllPrices)

} */


/* async function getAllPrices(item) {
    
    let price;
    try {
        const apiCall = await fetch(`https://cotacao.b3.com.br/mds/api/v1/instrumentQuotation/`+item.cod);
        const data = await apiCall.json();
        price = data.Trad[0].scty.SctyQtn.curPrc;

    } catch (error) {
        
        console.log(error.name);
        console.log(error.message);
        console.log("Ticker não encontrado")
        price = 0;
    }
    allPrices.push({"cod": item.cod, "price": price})
    

} */







/* async function getAllPrices(item) {
    
    const api_call = await fetch(`https://cotacao.b3.com.br/mds/api/v1/instrumentQuotation/`+ticker);
    const data = await api_call.json();
    //const price = data.Trad[0].scty.SctyQtn.curPrc;
    return data
} */

export default Grid
