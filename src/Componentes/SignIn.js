import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import SingUp from './SignUp';
class SignIn extends Component {
  render() {
    return (
        <Card>
        <div className="FormCenter">
            <div className="FormField">
              <label className="FormField__Label" htmlFor="username">
                Nombre de Usuario
              </label>
              <br />
              <input
                type="text"
                id="username"
                className="FormField__Input"
                placeholder="Nombre de Ususario"
                name="username"
              />
            </div>
            <div className="FormField">
              <label className="FormField__Label" htmlFor="password">
                Contraseña
              </label>
              <br />
              <input
                type="text"
                id="paswword"
                className="FormField__Input"
                placeholder="Contraseña"
                name="password"
              />
            </div>
            <div className="FormField">
            <button className="FormFiel__Button mr-20">Iniciar Sesion</button>
            <br/>
              <a href="SingUp.js" className="FormField__Link">
                No tengo Cuenta
              </a>
            </div>
        </div>
        </Card>
    );
  }
}

export default SignIn;
