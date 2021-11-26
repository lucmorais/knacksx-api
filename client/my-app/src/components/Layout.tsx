import React from "react";
import styles from "../styles/Layout.module.css";
import { Col, Container, Row} from "react-bootstrap";
import { Navegacao} from "./Navegacao";

interface LayoutProps {
    children: any;
    func?: any;
    opcao: any;
    path: any;
}

export function Layout(props: LayoutProps) {
    return (
        <Container className="pb-5">
            <Navegacao func={props.func} opcao={props.opcao} path={props.path}/>
            <Row className={styles.formularioGestor}>
                {props.children}
            </Row>
        </Container>
    )
}