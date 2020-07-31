import React, { useState} from  'react';

import {AvForm, AvField} from 'availity-reactstrap-validation'
import { Button } from 'reactstrap';


import './style.css';

const Table = (props) => {

    const [cods, setCods] = useState([]);
    const [note, setNote] = useState({
        codigo: '',
        nome: ''
    });

    function handleChange(event) {
        const { name, value} = event.target;
        console.log(event.target.name)
        console.log(event.target.value)


        setNote( prevNote => {
           return {
               ...prevNote,
               [name] : value
           }
        });

    }
    
    function handleSubmit(event, values) {
        
        setCods(prevCods => {
            return [...prevCods, values]
        });
            

        setNote({
            codigo: '',
            nome: '',
        })
    }

    function handleDelete(event) {
        console.log(event.target.name)
        setCods(prevCods => {
            return prevCods.filter((codItem, index) => {
                return index !== Number(event.target.name);
            })
        })
    }
     
    return (
        <div>
            <AvForm
                onValidSubmit={handleSubmit}
                style={{width: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop:'30px'}}
            >
                <AvField
                    name="codigo"
                    placeholder="Novo código"
                    type="text"
                    style={{marginRight: '20px'}}
                    onChange={ (event) => { handleChange(event) }}
                    value={note.codigo}
                />
                <AvField
                    name="nome"
                    placeholder="Novo nome"
                    type="text"
                    style={{marginRight: '20px'}}
                    onChange={ (event) => { handleChange(event) }}
                    value={note.nome}
                />
                <Button 
                    type='submit'
                >
                    Submit
                </Button>
            </AvForm>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Código
                            </th>
                            <th>
                                Nome
                            </th>
                            <th>
                                Ação
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cods.map((cod, index) => {
                            return (
                                <tr id={index} key={index} >
                                    <td>
                                        {cod.codigo}
                                    </td>
                                    <td>
                                        {cod.nome}
                                    </td>
                                    <td>
                                        <Button size='sm' name={index} onClick={handleDelete}>Delete</Button>
                                    </td>
                                </tr>
                            );
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
    );
}


export default Table;