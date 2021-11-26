import React, { useEffect, useState } from 'react';
import { Button, CloseButton, ListGroup, Modal } from 'react-bootstrap';
import { http } from '../utils/http';
import { Alerta } from './Alerta';
import { Icones } from './Icones';
import { ModalGestor } from './ModalGestor';
import { ModalGestorExperiencia } from './ModalGestorExperiencia';

interface ItensTabelaGestorProps {
    candidatos: any;
    func: any;
}

export function ItensTabelaGestor(props: ItensTabelaGestorProps) {
    const [showHabilidade, setShowHabilidade] = useState(false);
    const [showExperiencia, setShowExperiencia] = useState(false);
    const [habilidade, setHabilidade] = useState({});
    const [experiencia, setExperiencia] = useState({});

    async function deletarCandidato(id: any) {
        const { data } = await http.delete(`usuarios/${id}`);
        setTimeout(() => {
            props.func();
        },1000);
    }

    return (
        <tr>
            <td className="align-middle">{props.candidatos.nome}</td>
            <td className="align-middle">{props.candidatos.email}</td>
            <td className="align-middle">{props.candidatos.telefone}</td>
            <td className="text-center align-middle">
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
            <td className="text-center align-middle">
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
            <td className="align-middle">
                <Button onClick={() => deletarCandidato(props.candidatos.id)}>
                    <Icones/>
                </Button>
            </td>
        </tr>
    )
}