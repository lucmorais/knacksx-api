import React, { useState } from 'react';
import { Button, CloseButton, ListGroup, Modal } from 'react-bootstrap';
import { ModalGestor } from './ModalGestor';

interface ItensTabelaGestorProps {
    candidatos: any;
}

export function ItensTabelaGestor(props: ItensTabelaGestorProps) {
    const [show, setShow] = useState(false);
    const [habilidade, setHabilidade] = useState({});
    console.log(props.candidatos.habilidades);
    console.log(props.candidatos);

    return (
        <tr>
            <td>{props.candidatos.nome}</td>
            <td>{props.candidatos.email}</td>
            <td>
                <ListGroup>
                    {props.candidatos.habilidades.map((_hab: any, _index: any) => {
                        return(
                            <>
                                <ListGroup.Item key={_index} action onClick={() => {
                                    setShow(true);
                                    setHabilidade(_hab);
                                }}>
                                    {_hab.titulo}
                                </ListGroup.Item>
                                {show &&
                                    <ModalGestor habs={habilidade} nome={props.candidatos.nome} show={show} onHide={() => setShow(false)}/>
                                }
                            </>
                        )
                    })}
                </ListGroup>
            </td>
        </tr>
    )
}