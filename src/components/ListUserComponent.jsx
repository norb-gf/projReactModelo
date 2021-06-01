import React, { Component } from "react";
import UserService from "../services/UserService";
import "../assets/css/styles.css";
class ListUserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      pesqFirstName: "",
    };
    this.addUser = this.addUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.pesqFirstNameHandler = this.pesqFirstNameHandler.bind(this);
    this.pesqClearHandler = this.pesqClearHandler.bind(this);
  }

  addUser() {
    this.props.history.push("/add-user/_add");
  }
  editUser(id) {
    this.props.history.push(`/edit-user/${id}`);
  }
  deleteUser(id) {
    this.props.history.push(`/del-user/${id}`);
  }
  viewUser(id) {
    this.props.history.push(`/view-user/${id}`);
  }

  componentDidMount = () => {
    console.log("di mount");
    let wn = "";
    console.log('did  ',wn);
    this.verificaPesq(wn);
  };

  pesqFirstNameHandler = (e) => {
    e.preventDefault();
    console.log('passei pesqFirstHandler',this.state.pesqFirstName);
    this.wn = this.state.pesqFirstName;
    this.verificaPesq(this.wn);
  };

  pesqClearHandler = (e) => {
    console.log("==============", this.state.pesqFirstName);
    this.setState({ pesqFirstName: '' });
    console.log("aqui 1", this.state.pesqFirstName);
    this.wn = "";
    this.verificaPesq(this.wn);
    console.log("aqui 1a");
  };

  verificaPesq = (ws) => {
    console.log("nome= ", this.wn);
    if (ws === "") {
      console.log("pesq vazio", this.wn);
      UserService.getUsers().then((res) => {
        console.log('retorno...getUsers')
        this.setState({ users: res.data });
      });
    } else {
      console.log("aqui 3", ws);
      UserService.getUsersByFirstName(ws).then((res) => {
        console.log('retorno...getByName')
        this.setState({ users: res.data });
      });
    }
    console.log('termino verificaPesq')
  };

  changepesqFirstName = (event) => {
    this.setState({ pesqFirstName: event.target.value });
    console.log("ok change.....", this.state.pesqFirstName);
  };

  formataData = (data) =>{
    const dataformatada = data.substr(8,2) + "-" + data.substr(5,3) + data.substr(0,4); 
    return dataformatada;
  }


  render() {
    return (
      <section>
        <div className="grid" id="grid">
          <h1 className="wh1">Lista de Usuários</h1>
          <label className="lbl-pesq">Pesquisar por Nome:</label>
          <input
            className="input-pesq"
            value={this.state.pesqFirstName}
            onChange={this.changepesqFirstName}
          />
          <button
            className="btn btn-info btn-search"
            onClick={this.pesqFirstNameHandler}
          >
            Pesquisar
          </button>
          <button
            className="btn btn-warning btn-clear"
            onClick={this.pesqClearHandler}
          >
            Limpar
          </button>
          <button
            className="btn btn-primary btn-add"
            onClick={this.addUser}
          >
            {" "}
            Adicionar Novo Usuário
          </button>
        </div>

        <div className="row">
          <table className="table table-striped table-bordered table-sm">
            <thead>
              <tr>
                <th> Nome</th>
                <th> Sobrenome</th>
                <th> Email</th>
                <th> Login</th>
                <th data-type="date"> Ult Alt</th>
                <th> Ações</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map((user) => (
                <tr key={user.id}>
                  <td> {user.firstName} </td>
                  <td> {user.lastName}</td>
                  <td> {user.emailId}</td>
                  <td> {user.login}</td>
                  <td> {this.formataData(user.dataUltAlt)}</td>
                  <td>
                    <button
                      onClick={() => this.editUser(user.id)}
                      className="btn btn-warning" id="btn-table-list-update"
                    >
                      Atualizar{" "}
                    </button>
                    <button id="btn-table-list-delete"
                      onClick={() => this.deleteUser(user.id)}
                      className="btn btn-danger"
                    >
                      Deletar{" "}
                    </button>
                    <button id="btn-table-list-ler"
                      onClick={() => this.viewUser(user.id)}
                      className="btn btn-info"
                    >
                      Ler{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default ListUserComponent;
