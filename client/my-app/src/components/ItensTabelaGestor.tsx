import React, { useEffect, useState } from 'react';
import { Button, CloseButton, ListGroup, Modal } from 'react-bootstrap';
import { ModalGestor } from './ModalGestor';
import { ModalGestorExperiencia } from './ModalGestorExperiencia';

interface ItensTabelaGestorProps {
    candidatos: any;
}

export function ItensTabelaGestor(props: ItensTabelaGestorProps) {
    const [showHabilidade, setShowHabilidade] = useState(false);
    const [showExperiencia, setShowExperiencia] = useState(false);
    const [habilidade, setHabilidade] = useState({});
    const [experiencia, setExperiencia] = useState({});

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
                                    setShowHabilidade(true);
                                    setHabilidade(_hab);
                                }}>
                                    {_hab.titulo}
                                </ListGroup.Item>
                                {showHabilidade &&
                                    <ModalGestor 
                                        habs={habilidade} 
                                        nome={props.candidatos.nome} 
                                        show={showHabilidade} 
                                        onHide={() => setShowHabilidade(false)}
                                    />
                                }
                            </>
                        )
                    })}
                </ListGroup>
            </td>
            <td>
                <ListGroup>
                    {props.candidatos.experiencias.map((_exp: any, _index: any) => {
                        return(
                            <>
                                <ListGroup.Item key={_index} action onClick={() => {
                                    setShowExperiencia(true);
                                    setExperiencia(_exp);
                                }}>
                                    {_exp.area}
                                </ListGroup.Item>
                                {showExperiencia &&
                                    <ModalGestorExperiencia 
                                        exps={experiencia} 
                                        nome={props.candidatos.nome} 
                                        show={showExperiencia} 
                                        onHide={() => setShowExperiencia(false)}
                                    />
                                }
                            </>
                        )
                    })}
                </ListGroup>
            </td>
        </tr>
    )
}