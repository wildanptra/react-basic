import React from "react";
import { Container, Table } from "react-bootstrap";

const Tabel = ({makanans,  editData, hapusData}) => {

  return (
    <div>
      <Container>
        <h2>CRUD React Js</h2>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Nama Makanan</th>
                <th>Harga</th>
                <th>Deskripsi</th>
                <th>Aksi</th>
            </tr>
            </thead>
            <tbody>
              {makanans.map((makanan, index) => {
                return(
                  <tr key={index}>
                    <td>{index+1}</td>
                    <td>{makanan.nama}</td>
                    <td>{makanan.harga}</td>
                    <td>{makanan.deskripsi}</td>
                    <td>
                        <button className="btn btn-warning mx-1" onClick={() => editData(makanan.id)}><i className="fa fa-pencil text-light"></i></button>
                        <button className="btn btn-danger mx-1" onClick={() => hapusData(makanan.id)}><i className="fa fa-trash text-light"></i></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Tabel;
