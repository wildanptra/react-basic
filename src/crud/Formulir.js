import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const Formulir = ({ nama, harga, deskripsi, handleChange, handleSubmit, id }) => {
  return (
    <div className="mt-5">
      <Container>
        <Card>
          <Card.Body>
            <Row>
              <Col>
                <h4>{ id ? "Edit Data" : "Tambah Data" }</h4>
                <hr></hr>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="nama">
                    <Form.Label>Nama Makanan</Form.Label>
                    <Form.Control
                      type="text"
                      name="nama"
                      placeholder="Nama Makanan.."
                      value={nama}
                      onChange={(event) => handleChange(event)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="harga">
                    <Form.Label>Harga</Form.Label>
                    <Form.Control
                      type="number"
                      name="harga"
                      placeholder="Harga.."
                      value={harga}
                      onChange={(event) => handleChange(event)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="deskripsi">
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="deskripsi"
                      rows={3}
                      placeholder="Deskripsi.."
                      value={deskripsi}
                      onChange={(event) => handleChange(event)}
                      required
                    />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">
                      Kirim <i className="fa fa-save"></i>
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Formulir;
