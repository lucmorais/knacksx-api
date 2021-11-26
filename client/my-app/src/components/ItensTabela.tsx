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
            <td className="align-middle">{props.habs.titulo}</td>
            <td className="align-middle">{props.habs.descricao}</td>
            <td className="align-middle">{props.habs.nivel}</td>
            {props.children}
        </tr>
    )
}