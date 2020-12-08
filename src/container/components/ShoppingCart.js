import React from "react";
import { Table, Button } from "react-bootstrap";

const MercList = (props) => {

    const mercsTableRows = () => {
        return props.shoppingCart.map((merc, i) => (
            <tr key={i}>
                <td>{i}</td>                              
                <td>{merc.produktId}</td>
                <td>{merc.produkt}</td>                
                <td>{merc.antall}</td>
            </tr>
        ));
    };

    return (
        <>
            <h1>Du har følgende i handlekurven din</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        
                        <th>#</th>
                        <th>ProduktId</th>
                        <th>Produkt</th>                        
                        <th>Bestillt antall</th>
                    </tr>
                </thead>
                <tbody>{mercsTableRows()}</tbody>
            </Table>
        </>
    );
};

export default MercList;
