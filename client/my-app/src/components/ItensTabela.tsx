import React from 'react';
import { Icones } from './Icones';

interface ItensTabela {
    habs: any;
}

export function ItensTabela(props: ItensTabela) {
    return (
        <tr>
            <td>{props.habs.titulo}</td>
            <td>{props.habs.descricao}</td>
            <td>{props.habs.nivel}</td>
            <td>
                <a><Icones/></a>
            </td>
        </tr>
    )
}