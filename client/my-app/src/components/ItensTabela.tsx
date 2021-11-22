import React, { useState } from 'react';
import { http } from '../utils/http';
import { Icones } from './Icones';

interface ItensTabela {
    habs: any;
    children: any;
}

export function ItensTabela(props: ItensTabela) {
    return (
        <tr>
            <td>{props.habs.titulo}</td>
            <td>{props.habs.descricao}</td>
            <td>{props.habs.nivel}</td>
            {props.children}
        </tr>
    )
}