import router from "next/router";
import React from "react";
import { Card, Button } from "react-bootstrap";

interface NavegacaoCandidatoProps {
    opcao: string;
    path: string;
    id: number;
}

export function NavegacaoCandidato(props: NavegacaoCandidatoProps) {
    return (
        <div>
            <Button onClick={() => router.push(`/${props.path}`)}>
                <Card
                    bg="info"
                    text="dark"
                    style={{ width: '18rem' }}
                    className="mb-2"
                >
                    <Card.Header>{props.opcao}</Card.Header>
                    <Card.Body>
                        <Card.Title>{props.opcao}</Card.Title>
                    </Card.Body>
                </Card>
            </Button>
        </div>
    )
}