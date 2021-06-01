import React, { Component } from "react";
import UserService from "../services/UserService";

class ViewUserComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      user: {},
    };
  }

  componentDidMount() {
    UserService.getUserById(this.state.id).then((res) => {
      this.setState({ user: res.data });
    });
  }
  voltar() {
    this.props.history.push("/users");
  }

  render() {
    return (
      <div className="view-container">
          <div className=" view-c view-it1">
            <h3 className="text-center"> Dados do Usuário</h3>
          </div>
          <div className="view-it2">
            <label>Nome:</label>
          </div>
          <div className="view-d view-it3">
            <label> {this.state.user.firstName} </label>
          </div>
          <div className="view-it4">
            <label>Sobrenome:</label>
          </div>
          <div className="view-d view-it5">
            <label> {this.state.user.lastName} </label>
          </div>
          <div className="view-it6">
            <label>Email:</label>
          </div>
          <div className="view-d view-it7">
            <label> {this.state.user.emailId} </label>
          </div>
          <div className="view-it8">
            <label>Login:</label>
          </div>
          <div className="view-d view-it9">
            <label> {this.state.user.login} </label>
          </div>
          <div className="view-it10">
            <label>Senha:</label>
          </div>
          <div className="view-d view-it11">
            <label> {this.state.user.senha} </label>
          </div>
          <div className="view-it12">
            <label>Dt Ult Alt:</label>
          </div>
          <div className="view-d view-it13">
            <label>
              {" "}
              {this.state.user.dataUltAlt}{" "}
            </label>
          </div>
          <div className="view-it14">
            <button className="btn" id="btn-view-voltar"
              onClick={this.voltar.bind(this)}>
              Voltar
            </button>
          </div>
        </div>
    );
  }
}

export default ViewUserComponent;
