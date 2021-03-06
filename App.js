import React, {Component} from 'react';
import foto from './views/foto.jpg'
import './App.css';
import './css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect, Switch,
  withRouter
} from "react-router-dom";

import Home from './views/home';

class App extends Component{
  constructor(){
    super()
    this.state = {
      isAuth : false
    }
  }

  render(){
    const LoginButton = withRouter(({history}) => (
      <button
        className='btn btn-primary'
        onClick={() => {
          this.setState({isAuth: true});
          history.push("/profile");
        }}>
        Login
      </button>
    ));
    const LogoutButton = withRouter(({history}) => (
      <button
        className='btn btn-secondary'
        onClick={() => {
          this.setState({isAuth: false});
          history.push("/login");
        }}>
        Logout
      </button>
    ))

      const routes = [
        {
          path : "/",
          exact : true,
          render : () => (
            <div className ='text-center container h3 text-primary'><br />Home</div>
          ),
        },
        {
          path : "/login",
          render : ()=>(
            <div className='container text-center'>
              <h2>Login</h2>
              <table className='table table-borderless text-start'>
              <tbody>
                <tr>
                <td>Username / ID : </td>
                <td>
                  <input className='border border-dark-w-50'
                  type ='text'
                  placeholder = 'Username / ID' />
                </td>
                </tr>
                <tr>
                  <td>Password : </td>
                  <td><input className='border border-dark-w-50'
                  type = 'text'
                  placeholder='Password' /></td>
                </tr>
                <tr>
                  <td><LoginButton /></td>
                <td></td>
                <td></td>
                <td></td>
                </tr>
              </tbody>
              </table>
            </div>
          ),
        },
        {
          path : "/profile",
          render : ()=>
          this.state.isAuth ? (
            <div className = 'container text-center'>
              <h3 className = 'fw-bold'>Profile Mahasiswa</h3>
              <table className ='table table-borderless text-start'>

              <img src={foto} className='foto'  /><br  /><br />

              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td>Steven Obert</td>
                </tr>
                <tr>
                  <td>NIM</td>
                  <td>:</td>
                  <td>192110070</td>
                </tr>
                <tr>
                  <td>Tempat dan tanggal lahir</td>
                  <td>:</td>
                  <td>Medan, 2 Oktober 2001</td>
                </tr>
                <tr>
                  <td>Jenis Kelamin</td>
                  <td>:</td>
                  <td>Laki-laki</td>
                </tr>
                <tr>
                  <td>Program Studi</td>
                  <td>:</td>
                  <td>Sistem Informasi</td>
                </tr>
                <tr>
                  <td>Agama</td>
                  <td>:</td>
                  <td>Buddha</td>
                </tr>
                <tr>
                  <td>Status Mahasiswa</td>
                  <td>:</td>
                  <td>Aktif</td>
                </tr>
                <tr>
                  <td><LogoutButton /></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
              </table>
              <br />
            </div>
          ) : (
            <Redirect to = '/login' />
          ),
        },
      ];
      return (
        <Router>
          <div className='container-fluid'>
            <nav className= 'navbar navbar-expand-lg'>
              <div className='container-fluid'>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                  <ul className='navbar-nav'>
                    <li className='nav-item'>
                      <NavLink exact className = 'nav-link text-light' to='/'>
                        Home
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink to ='/profile'
                      className ='nav-link text-light' activezClassName ='active'>
                        Profile
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Switch>
              {routes.map((item,index) =>(
              <Route path={item.path} exact={item.exact} render={item.render} />
              ))}
            </Switch>
          </div>
        </Router>
      );

      }}  

export default App;
     