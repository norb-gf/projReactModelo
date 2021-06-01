import React, { Component } from "react";
import UserService from "../services/UserService";

class DeleteUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.cancelUser = this.cancelUser.bind(this);
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }

  deleteUser = (e) => {
    UserService.deleteUser(this.state.id).then((res) => {
      this.props.history.push("/users");
    });
  };

  cancelUser() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div className="container">
        <div className="card col-md-6 offset-md-3">
          <form className="form-del">
            <h3 className="h3-text-center"> Confirma a exclusão do Usuário?</h3>
            <div className="info-del">
              <div>
                <label> Nome: </label>
                <input value={this.state.user.firstName} readOnly />
              </div>
              <div>
                <label> Sobrenome: </label>
                <input value={this.state.user.lastName} readOnly />
              </div>
              <div>
                <label> Email: </label>
                <input value={this.state.user.emailId} readOnly />
              </div>
              <div>
                <label> Login: </label>
                <input value={this.state.user.login} readOnly />
              </div>
              <div>
                <label> DataUltAlt: </label>
                <input value={this.state.user.dataUltAlt} readOnly />
              </div>
            </div>
          </form>
          <div>
            <button
              className="btn btn-danger"
              id="btn-save-delete"
              onClick={this.deleteUser}
            >
              Sim{" "}
            </button>
            <button
              className="btn btn-warning"
              id="btn-cancel-delete"
              onClick={this.cancelUser}
            >
              Não{" "}
            </button>
          </div>
        </div>
        <div className="div-clear"></div>
      </div>
    );
  }
}

export default DeleteUserComponent;
