import {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.png';
import {AuthContext} from "../../contexts/auth";


function SignUp() {
    const [nome, setNome] =  useState('');
    const [email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const{signUp, LoadingAuth} = useContext(AuthContext);

    
    function handleSubmit(e) {
        e.preventDefault();
            if (nome !== '' && email !== '' && password !== ''){
                signUp(nome, email, password);
            }
            
    }

    return (
        <div className='container-center'>
            <div className= 'login'>
                <div className='login-area'>
                    <img src= {logo} alt="Sistema de login"/>
                </div>
                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar</h1>
                    <input type= "text" placeholder= "Digite o seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input type= "text" placeholder= "email@email.com" value={email} onChange= {(e) => setEmail(e.target.value)} />
                    <input type= "password" placeholder= "********" value={password} onChange= {(e) => setPassword(e.target.value)} />
                    <button type= "submit">
                        {LoadingAuth ? 'Cadastrando...' : 'Cadastrar'}
                    </button>
                </form>
                <Link to= "/">Possui uma conta Clique aqui</Link> 
            </div>
        </div>
    );
}

export default SignUp;  