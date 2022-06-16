import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Formulir from "./Formulir";
import NavbarComponent from "./NavbarComponent";
import Tabel from "./Tabel";

export default class Crud extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      makanans: [],
      id: "",
      nama: "",
      harga: 0,
      deskripsi: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state === ""){

      this.setState({
        makanans: [
          ...this.state.makanans,
          {
            id: this.state.makanans.length+1,
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
          }
        ]
      });

    }else{

      const makananYangSelainDiPilih = this.state.makanans
      .filter((makanan) => makanan.id !== this.state.id)
      .map((filterMakanan) => {
        return filterMakanan
      });

      this.setState({
        makanans: [
          ...makananYangSelainDiPilih,
          {
            id: this.state.makanans.length+1,
            nama: this.state.nama,
            harga: this.state.harga,
            deskripsi: this.state.deskripsi,
          }
        ]
      });
    }

    this.setState({
      id: "",
      nama: "",
      harga: 0,
      deskripsi: "",
    })
  }

  editData = (id) => {
    const makananYangDiPilih = this.state.makanans
    .filter((makanan) => makanan.id === id)
    .map((filterMakanan) => {
      return filterMakanan
    })

    this.setState({
      nama: makananYangDiPilih[0].nama,
      deskripsi: makananYangDiPilih[0].deskripsi,
      harga: makananYangDiPilih[0].harga,
      id: makananYangDiPilih[0].id,
    })
  }

  hapusData = (id) => {
    const makananBaru= this.state.makanans
    .filter((makanan) => makanan.id !== id)
    .map((filterMakanan) => {
      return filterMakanan
    })

    this.setState({
      makanans: makananBaru,
    })

  }

  render() {
    return (
      <div>
        <NavbarComponent />
        <Container className="container mt-5">
          <Tabel makanans={this.state.makanans} editData={this.editData} hapusData={this.hapusData} />
          <Formulir {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        </Container>
      </div>
    );
  }
}
