import React from "react";
import styles from "../styles/Layout.module.css";
import { Col, Container, Row} from "react-bootstrap";
import { NavegacaoCandidato } from "./NavegacaoCandidato";

interface LayoutProps {
    nome: string;
    children: any;
}

export function Layout(props: LayoutProps) {
    return (
        <div className={"h-100"}>
            <Row className="h-100">
                {props.children}
            </Row>
        </div>
    )
}