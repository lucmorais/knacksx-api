import router from "next/router";
import styles from '../styles/SideBar.module.css';
import React from "react";
import { Card, Button, ListGroup } from "react-bootstrap";
import { ProSidebar, MenuItem, SubMenu, Menu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

interface NavegacaoGestorProps {
    items: string[];
    paths: string[];
}

export function NavegacaoGestor(props: NavegacaoGestorProps) {
    return (
        <ProSidebar className="mr-0">
            <Menu iconShape="square">
                {props.items.map((it, index) => {
                    return (
                        <MenuItem 
                            key={index} 
                            className="border-0 bg-dark text-light" 
                            onClick={() => router.push(`/${props.paths[index]}`)}
                        >
                            {it}
                        </MenuItem>
                    )
                })}
            </Menu>
        </ProSidebar>
    )
}