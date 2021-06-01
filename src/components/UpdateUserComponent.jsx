import React, { Component } from "react";
import UserService from "../services/UserService";
import "../assets/css/styles.css";

class UpdateUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // step 2
      id: this.props.match.params.id,
      firstName: "",
      lastName: "",
      emailId: "",
      login: "",
      senha: "",
      dataUltAlt: "",
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    this.changeLoginHandler = this.changeLoginHandler.bind(this);
    this.changeSenhaHandler = this.changeSenhaHandler.bind(this);
    this.changeDataUltAltHandler = this.changeDataUltAltHandler.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  componentDidMount() {
      UserService.getUserById(this.state.id).then((res) => {
        let user = res.data;
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName,
          emailId: user.emailId,
          login: user.login,
          senha: user.senha,
          dataUltAlt: user.dataUltAlt
        });
      });
  }
  saveUser = (e) => {
    e.preventDefault();
    let user = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailId: this.state.emailId,
      login: this.state.login,
      senha: this.state.senha,
      dataUltAlt: this.state.dataUltAlt,
    };
    console.log("user => " + JSON.stringify(user));

      UserService.updateUser(user, this.state.id).then((res) => {
        this.props.history.push("/users");
      });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailIdHandler = (event) => {
    this.setState({ emailId: event.target.value });
  };
  changeLoginHandler = (event) => {
    this.setState({ login: event.target.value });
  };
  changeSenhaHandler = (event) => {
    this.setState({ senha: event.target.value });
  };
  changeDataUltAltHandler = (event) => {
    this.setState({ dataUltAlt: event.target.value });
  };

  cancel() {
    this.props.history.push("/users");
  }

  formataData = (data) =>{
    const dataformatada = data.substr(8,2) + "-" + data.substr(5,3) + data.substr(0,4); 
    console.log('=====>> ', dataformatada);
    return dataformatada;
  }

  // getTitle() {
  //   if (this.state.id === "_add") {
  //     return <h2 className="text-center">Adicionar Novo Usuário</h2>;
  //   } else {
  //     return <h2 className="text-center">Atualizar Dados Usuário</h2>;
  //   }
  // }



  // getDate() {
  //   if (this.state.id !== "_add") {
  //     return (
  //     <div>
  //       <label> Data Ult Alt: </label>
  //       <input type="date" name="dataultalt"
  //         className="form-control"
  //         value={this.state.dataUltAlt}/>
  //     </div>
  //   )}
  // }

  render() {
    return (
      <div>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="card card-tit col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">Atualizar Dados Usuário</h2>
              {/* {this.getTitle()} */}
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label> Nome: </label>
                    <input
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Sobrenome: </label>
                    <input
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Email: </label>
                    <input
                      type="email"
                      placeholder="Email xxxxxxxx@xxxx.xxx.xx"
                      name="emailId"
                      className="form-control"
                      value={this.state.emailId}
                      onChange={this.changeEmailIdHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Login: </label>
                    <input
                      name="login"
                      className="form-control"
                      value={this.state.login}
                      onChange={this.changeLoginHandler}
                    />
                  </div>
                  <div className="form-group">
                    <label> Senha: </label>
                    <input
                      type="password"
                      name="senha"
                      className="form-control"
                      value={this.state.senha}
                      onChange={this.changeSenhaHandler}
                    />
                  </div>
                  <div>
                    <label> Data Ult Alt: </label>
                    <input type="text" name="dataultalt"
                      className="form-control"
                      disabled
                      value={this.formataData(this.state.dataUltAlt)}
                      onChange={this.changeDataUltAltHandler}/>
                  </div>
                  {/* {this.getDate()} */}
                  <button
                    className="btn btn-success"
                    id="btn-save-create"
                    onClick={this.saveUser}
                  >
                    Salvar
                  </button>
                  <button
                    className="btn btn-danger"
                    id="btn-cancel-create"
                    onClick={this.cancel.bind(this)}
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateUserComponent;
