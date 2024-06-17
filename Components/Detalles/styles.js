import { css } from "lit";

export const styles = [
    css`
    .containerDetalles{
        display:flex;
        flex-direction: column;
        background:#004491;
        height: 920px;
        width: 550px;
        justify-content: center;
        align-items:center;
        
        font-family: Arial, Helvetica, sans-serif; 
    }

    .center{
        background-color:white;
        width: 480px;
        display:flex;
        flex-direction: column;

        heigh:600px;
    }

    .head{
        margin:20px 50px 20px 50px
    }

    .idks{
        flex-direction: column;
        display:flex;
        align-items:center;
        margin:30px
    }

    button{
        margin-top:30px;
        font-size:15px;
        padding: 20px 60px;
        text-align: center;
        background-color: #004491;
        border:none;
        color:white;
    }


`];



