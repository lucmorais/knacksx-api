import React, { useState } from 'react';
import { http } from '../utils/http';
import { Icones } from './Icones';

interface ItensTabelaProps {
    habs: any;
    children: any;
}

export function ItensTabela(props: ItensTabelaProps) {
    return (
        <tr>
            <td>{props.habs.titulo}</td>
            <td>{props.habs.descricao}</td>
            <td>{props.habs.nivel}</td>
            {props.children}
        </tr>
    )
}