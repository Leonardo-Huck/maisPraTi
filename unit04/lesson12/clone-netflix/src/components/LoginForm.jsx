import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className='formContainer'>
            <form>
                <h1>Entrar</h1>
                <input type="text" placeholder="Email ou número de celular" className='inputForm' id='email' />
                <input type="password" placeholder="Senha" className='inputForm' />
                <button type='button' id='entrar'>Entrar</button>
                <label id='ou'>OU</label>
                <button type='button' id='codigo'>Usar um código de acesso</button>
                <a href="#" className='link'>Esqueceu a senha?</a>
            </form>
            <label htmlFor="lembre-se" id="label-lembrar">
                <input type="checkbox" name="lembre-se" id="lembrar" />
                Lembre-se de mim
            </label>
            <p>Novo por aqui? <a href="#" className='link'>Assine agora</a>.</p>
            <p id='saiba'>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. <a href="#">Saiba mais.</a></p>
        </div>
    )
}

export default LoginForm