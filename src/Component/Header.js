import React,{Component} from 'react';
import './header.css';
import {Link,withRouter} from 'react-router-dom';

const url = "http://3.17.216.66:5000/api/auth/userinfo"
class  Header extends Component{
    constructor(){
        super()

        this.state={
            userData:'',

        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        sessionStorage.removeItem('userInfo')
        sessionStorage.setItem('loginStatus','loggedOut');
        this.setState({
            userData:''
        })
        this.props.history.push('/')
    }
    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            sessionStorage.setItem('userInfo',JSON.stringify(data));
              sessionStorage.setItem('loginStatus','loggedIn');
              return(
                <>
                     <Link to="/" className="btn btn-success">
                     
                            <span className="glyphicon glyphicon-user"></span>Hi {data.name}
                        </Link> &nbsp;
                        <button onClick={this.handleLogout} className="btn btn-danger">
                            <span className="glyphicon glyphicon-log-out"></span> LogOut
                     </button>
                </>
              )

        }else{
            return(
                <>
                     <Link to="/login" className="btn btn-success">
                     
                            <span className="glyphicon glyphicon-log-in"></span> LogIn
                        </Link> &nbsp;
                        <Link to='/register' className="btn btn-danger">
                            <span className="glyphicon glyphicon-user"></span> SignUp
                     </Link>
                </>
              )
        }
    }
    render(){
        return(
            <>
                
                <header>
                    <div id="brand">
                        Tushar Funnel &nbsp; <Link to='/' className='btn btn-info'>Home</Link>
                    </div>
                    <div id="social">
                    {this.conditionalHeader()}
                       
                    </div>
                </header>
             
            </>
        )
    }

        //on page load
        componentDidMount(){
            fetch(url,{
                method:'GET',
                headers:{
                    'x-access-token':sessionStorage.getItem('ltk')
                }
            })
            .then((res) =>  res.json())
            .then((data) => {
                this.setState({
                    userData:data
                })
            })
        }

};

export default withRouter(Header);