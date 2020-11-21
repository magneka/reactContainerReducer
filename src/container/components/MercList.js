import React from "react";
import { Table, Button } from "react-bootstrap";

const MercList = (props) => {
  const mercsTableRows = () => {
    return props.mercs.map((merc, i) => (
      <tr key={i}>
        <td>{i}</td>
        <td>
          <Button
            variant="link"
            onClick={() => props.showProduct(merc.produktId)}
            disabled={merc.lager === 0}
          >
            {merc.produkt}
          </Button>
        </td>
        <td>{merc.farge}</td>
        <td>{merc.størrelse}</td>
        <td>{merc.lager}</td>
      </tr>
    ));
  };

  return (
    <>
      <h1>Oversikt over Merchandise</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Produkt</th>
            <th>Farge</th>
            <th>Størrelse</th>
            <th>Tilgjengelig</th>
          </tr>
        </thead>
        <tbody>{mercsTableRows()}</tbody>
      </Table>
    </>
  );
};

export default MercList;
