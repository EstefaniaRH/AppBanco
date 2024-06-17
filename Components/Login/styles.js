import { css } from "lit";

export const styles = [
    css`
    .containerLogin{
        display:block;
        flex-direction: column;
        background-color: #004491;
        height: 920px;
        width: 550px;
        color:white;
        font-family: Arial, Helvetica, sans-serif; 
    }
    .head{
        justify-content:center;
        background-image: url('https://w.wallhaven.cc/full/qz/wallhaven-qzee7r.jpg');
        display:flex;
        width: 100%;
        height: 350px;
        padding-top:20px;
        
        #logoMain{
        height: 30px;
        }
        
        .svg{
        width:30px;
        position: absolute;
        margin-left:180px;
        }
    }

    .perfil{
        width: 50px;
        height: 50px;
        border-radius:50%;
    }

    .center{
        align-items:center;
        display:flex;
        flex-direction: column;
        height: 600px;
        width:100%;
        padding-top:50px;
    }

    #foot{
        margin-top:150px
    }

    input{
        background-color:transparent;
        border:none;
        width: 400px;
        border-bottom:  1px solid #99c9ff;
        color: white;
        margin-bottom:50px;
        padding:15px;
    }

    input::placeholder{color:white; font-family: Arial Helvetica, sans-serif; font-size: 18px}

    .jala{
        margin-top:30px;
        font-size:15px;
        padding: 20px 60px;
        text-align: center;
        background-color: #5689c2;
        border:none;
        color:white;
        transition-duration: 0.4s;
        cursor: pointer;
    }
    
    .jala:hover{
        background-color: #bfbfbf;
    }

    `,
];