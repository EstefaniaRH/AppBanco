import { css } from "lit";

export const styles = [
    css`
    .containerDatos{
        display:flex;
        flex-direction: column;
        background: linear-gradient(#004491, #e6f1ff);
        height: 920px;
        width: 550px;
        
        font-family: Arial, Helvetica, sans-serif; 
    }

    .head{
        justify-content:space-between;
        display:flex;
        margin:15px 30px 0px 30px;
        padding:10px 0px;
        align-items:center;
        color:white;

        .svg{
            width:30px;
            
        }
    }
 
    .svglog{
        width:25px;
        margin-top: 15px;
        
    }

    .logos{
        width:100%;
        display:flex;
        justify-content: space-around;
    }

    .logosBot{
        width:100%;
        height: 70px;
        display:flex;
        justify-content: space-around;
        background-color: #004491;
        align-items:center;
        margin-top:30px;
    }
    .svglogbot{
        width:30px;
    }

    .minilog{
        width:15px;
    }

    .center{
        display:flex;
        flex-direction: column;
    }

    .datos, .debito, .credito, .movimientos{
        margin:10px 25px;
        width:500px;
        background-color:white;
        border-radius: 10px;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    }

    .datos{
        height:150px;
    }

    .debito{
        height:120px;

        .debitosub{
            display:flex;
            flex-direction: row;
            justify-content:space-between;
            padding:1px 10px
        }
    }


    .credito{
        display:flex;
        flex-direction: column;
        height:170px;

        .creditosub{
            display:flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }

    .movimientos{
        height:160px;
        

        .movimientosub{
            width: 100%;
            display:flex;
            flex-direction: column;
            justify-content: center;
        }
    }

    p{
        margin: 10px;
    }

    button{
        font-size:20px;
        padding: 5px 90px;
        border: none;
        background-color: transparent;
        border-bottom:  1px solid #a0a4ab;
    }

    button:hover {
        background-color: #004491; /* Green */
        color: white;
    }

    .title-section{
        color: #6b707b;
    }

    img{
        width:25px;
    }


`];



