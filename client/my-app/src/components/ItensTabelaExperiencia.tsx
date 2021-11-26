import React, { useState } from 'react';

interface ItensTabelaExperiencia {
    exps: any;
    children: any;
}

export function ItensTabelaExperiencia(props: ItensTabelaExperiencia) {
    return (
        <tr>
            <td className="align-middle">{props.exps.empresa}</td>
            <td className="align-middle">{props.exps.area}</td>
            <td className="align-middle">{props.exps.atividades}</td>
            {props.children}
        </tr>
    )
}