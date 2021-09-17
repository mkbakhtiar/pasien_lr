import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class TambahPasien extends Component {
    constructor (props) {
        super(props)   
        this.state = {
            nama_pasien: '',
            no_hp: '',
            alamat: '',
            errors: []
            
        }   
        this.handleAddPasien = this.handleAddPasien.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }
    handleAddPasien (event) {
        event.preventDefault()
        const pasien = {
            nama_pasien: this.state.nama_pasien,
            no_hp: this.state.no_hp,
            alamat: this.state.alamat,
        }
        axios.post('/api/add-proses', pasien).then(response => { 
            var msg = response.data.success;
            var message = response.data.message;
            
            if(msg == true){
                this.props.history.push('/');
            }else{
                alert(message);
            }
        })
    }
    hasErrorFor (field) {
        return !!this.state.errors[field]
    }
 
    renderErrorFor (field) {
        if (this.hasErrorFor(field)) {
            return (
            <span className='invalid-feedback'>
                <strong>{this.state.errors[field][0]}</strong>
            </span>
            )
        }
    }
    handleFieldChange (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render () {
        
        return (
            <div className="card">
                <div className="card-header">Data Tambah Pasien</div>

                <div className="card-body">
                <form onSubmit={this.handleAddPasien}>
                    <div className='form-group'>
                        <label htmlFor='nama'>Nama</label>
                        <input
                          id='nama_pasien'
                          type='text'
                          className={`form-control ${this.hasErrorFor('nama_pasien') ? 'is-invalid' : ''}`}
                          name='nama_pasien'
                          value={this.state.nama_pasien}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('nama_pasien')}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='nama'>No HP</label>
                        <input
                          id='no_hp'
                          type='text'
                          className={`form-control ${this.hasErrorFor('no_hp') ? 'is-invalid' : ''}`}
                          name='no_hp'
                          value={this.state.no_hp}
                          onChange={this.handleFieldChange}
                        />
                        {this.renderErrorFor('no_hp')}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='nama'>Alamat</label>
                        <textarea
                          id='alamat'
                          className={`form-control ${this.hasErrorFor('alamat') ? 'is-invalid' : ''}`}
                          name='alamat'
                          onChange={this.handleFieldChange}
                        >{this.state.alamat}</textarea>
                        {this.renderErrorFor('alamat')}
                    </div>
                    <Link
                        className='btn btn-secondary'
                        to={`/`}
                        >Back
                      </Link> 
                    <button className='btn btn-primary' style={{marginLeft:'20px'}}>Simpan</button>
                </form>
                </div>
            </div>
        )
    }
}
export default TambahPasien