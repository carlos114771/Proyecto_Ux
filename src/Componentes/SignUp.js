import React, { Component } from 'react';

class SignUp extends Component{
    constructor() {
        super();
        this.state = {
            name: "",
            lastname: '',
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        let lastname = target.lastname;
        let username = target.username;

        this.setState({
            [name]: value,
            [lastname]: value,
            [username]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Se ha creado la cuenta exitosamente");
        console.log(this.state);
    }

    render() {
        return(
            <div className="FormCenter">
                <form onSubmit={this.handleSubmit} className="FormFields">
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="name">Nombre</label>
                    <br/>
                    <input type="text" id="name" className="FormField__Input" placeholder="Nombre" name="name" 
                    value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="lastname">Apellido</label>
                    <br/>
                    <input type="text" id="lastname" className="FormField__Input" placeholder="Apellido" name="lastname"
                    value={this.state.lastname} onChange={this.handleChange}/>
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="username">Nombre de Usuario</label>
                    <br/>
                    <input type="text" id="username" className="FormField__Input" placeholder="Nombre de Ususario" name="username"
                    value={this.state.username} onChange={this.handleChange}/>
                </div>
                <div className="FormField">
                    <label className="FormField__Label" htmlFor="password">Contraseña</label>
                    <br/>
                    <input type="text" id="paswword" className="FormField__Input" placeholder="Contraseña" name="password"
                    value={this.state.password} onChange={this.handleChange}/>
                </div>
                <br/>
                <div className="FormField">
                    <button className="FormFiel__Button mr-20">Crear Cuenta</button> 
                    <br/>
                    <a href="#" className="FormField__Link">Ya tengo cuenta</a> 
                </div>
                </form>
            </div>
        );
    }
}

export default SignUp;