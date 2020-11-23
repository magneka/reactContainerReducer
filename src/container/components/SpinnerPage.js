import React from "react";
import { Spinner } from "react-bootstrap";

// Utfordring: Hvordan kan du vise forskjellig tekst i spinnerene som viser hva du venter på

export const SpinnerPage = (props) => {
  return (
    <>
      <h1>Vi henter, Du venter..</h1>
      <Spinner animation="border" variant="primary" />
    </>
  );
};
