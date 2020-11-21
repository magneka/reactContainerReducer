import React from "react";
import { Spinner } from "react-bootstrap";

// Utfordring: Hvordan kan du vise forskjellig tekst i spinnerene som viser hva du venter på

export const SpinnerPage = (props) => {
  return (
    <>
      <h1>Nå gjelder det å være tålmodig..</h1>
      <Spinner animation="border" variant="primary" />
    </>
  );
};
