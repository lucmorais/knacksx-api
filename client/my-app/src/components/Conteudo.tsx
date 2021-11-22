import { ObjectEncodingOptions } from "fs";
import React, { useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { http } from "../utils/http";

interface ConteudoProps {
    habilidade: any;
}

export function Conteudo(props: ConteudoProps) {
    const [titulo] = useState([
        'Habilidades', 
        'Experiencia',
        'Formacao Academica',
        'Formacao Complementar'
    ]);

    return (
        <Container>
            <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>{titulo[idx]}</Card.Title>
                            <ListGroup  variant="flush">
                                <ListGroup.Item></ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                                <ListGroup.Item></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
            </Row>
        </Container>
    )
}