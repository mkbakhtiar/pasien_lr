import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Dashboard extends Component {
    constructor () {
        super()   
        this.state = {
            pasien: [],
        }

        this.getPasien();     
    }
    getPasien(){
        axios.get('/api/show-pasien').then(response => { 
            // console.log(response.data)
            this.setState({
                pasien: response.data,
            }) 
        })
    }
    render () {
        const { pasien } = this.state
        
        return (
            <div className="card">
                <div className="card-header">Data Antrian Pasien</div>

                <div className="card-body">
                    <Link to={`/add`} className='btn btn-primary'>Tambah Pasien</Link>
                    <table className="w-100" style={{marginTop:'20px'}}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Pasien</th>
                                <th>No Hp</th>
                                <th>Masuk Pukul</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pasien.map((pasienE, y) => (
                                <tr key={y}>
                                    <td>{pasienE.id}</td>
                                    <td>{pasienE.nama_pasien}</td>
                                    <td>{pasienE.no_hp}</td>
                                    <td>{pasienE.alamat}</td>
                                    <td>
                                        <Link to={`/ubah/${pasienE.id}`}>Ubah</Link> 
                                        <Button onClick={() => this.confirmDelete(user.id)}>Hapus</Button></td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Dashboard