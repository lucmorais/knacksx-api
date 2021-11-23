import React, { useState } from 'react';

interface ItensTabelaExperiencia {
    exps: any;
    children: any;
}

export function ItensTabelaExperiencia(props: ItensTabelaExperiencia) {
    return (
        <tr>
            <td>{props.exps.empresa}</td>
            <td>{props.exps.area}</td>
            <td>{props.exps.atividades}</td>
            {props.children}
        </tr>
    )
}