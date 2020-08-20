import React, {useState} from 'react';

import {Container, CardLeft, CenterDiv, CardRight, ProfileInfo,
LeftOptions, PostStyle, Divider, ButtonsPostDiv, FullDivider, CommentaryDiv, CommentDiv,
DivParticles,
ContainerLogin, CardCentral, CardCadastrar, CardDicas, ContainerCadastrar} from './styles/styles'
import {IoIosPerson, IoIosBook, IoIosPaper, IoIosPeople, IoIosSettings, IoIosExit,
IoIosMore, IoIosThumbsUp, IoIosText,IoMdSend}  from 'react-icons/io'
import Particles from 'react-particles-js';
import Axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

function App() {
  const [logado, setLogado] = useState(false);
  const [cardInicio, setCardInicio] = useState("validacao");
  const [snackBarState, setSnack] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState();
  const [severityMessage, setSeverityMessage] = useState();

  const openSnack = (message, severity) => {
    setSeverityMessage(severity);
    setSnackBarMessage(message);
    setSnack(true);
  }

  const closeSnack = () => {
    setSnack(false);
  }

  if(cardInicio === "validacao") {
    let token = localStorage.getItem('@social-network/session/token');
    let user = localStorage.getItem("@social-network/session/user");
    if(token !== "" && user !== "") {
      const obj = {
        "tokenSession" : token,
        "user" : user
      }
      Axios.post("http://localhost:8080/session/validate", obj).then(objResult => {
        console.log(objResult);
        setCardInicio("login");
        if(objResult.data) {
          setLogado(true);
        } else {
          logoff();
        }
      });
    } else {
      setCardInicio('login');
      setLogado(true);
    }
  }
  
  const login = () => {
    let user = document.getElementById("usuarioLogin").value;
    let password = document.getElementById("senhaLogin").value;
    const obj = {
      "user" : user,
      "password" : password
    }
    if(user !== "" && password !== "") {
      Axios.post('http://localhost:8080/login', obj).then(objResult => {
        console.log(objResult.data);
        if(objResult.data.success) {
          localStorage.setItem('@social-network/session/token', objResult.data.token);
          localStorage.setItem('@social-network/session/user', objResult.data.user);
          console.log(localStorage.getItem('@social-network/session/token'));
          console.log(localStorage.getItem('@social-network/session/user'));
          setLogado(true);
        } else {
          openSnack(objResult.data.message, "error");
        }
      })
    }
  }

  const cadastrar = () => {
    let user = document.getElementById("usuarioRegistro").value;
    let pass1 = document.getElementById("senha1Registro").value;
    let pass2 = document.getElementById("senha2Registro").value;
    if(pass1 === pass2) {
      const obj = {
        "user" : user,
        "password" : pass1
      }
      console.log(obj);
      Axios.post(`http://localhost:8080/register`,  obj ).then(res => {
        console.log(res.data);
        if(res.data.success) {
          setCardInicio("login");
          openSnack(res.data.message, "success");
        } else {
          openSnack(res.data.message, "error");
        }
      })
    }
  }

  const logoff = () => {
    const obj = {
      "tokenSession" : localStorage.getItem("@social-network/session/token"),
      "user" : localStorage.getItem("@social-network/session/user")
    }
    Axios.post("http://localhost:8080/session/invalidate", obj);
    
    localStorage.removeItem("@social-network/session/token");
    localStorage.removeItem("@social-network/session/user");
    setLogado(false);
  }

  const alterarDivCentral = () => {
    if(cardInicio === "login") setCardInicio("cadastrar");
    if(cardInicio === "cadastrar") setCardInicio("login");
  }


  const DivCardInicio = () => {
    if(cardInicio === "login") {
      return (
        <CardCentral>
          <h2 className="tituloInicio">Inicio de sessão</h2>
          <input className="usuario" id="usuarioLogin" type="text" placeholder="Usuário:"/>
          <input className="senha" id="senhaLogin" type="password" placeholder="Senha:"/>
          <button className="botaoLogin" onClick={() => {
            login();
          }}>Login</button>
          <p onClick={() => alterarDivCentral()}>Cadastre-se</p>
          
        </CardCentral>
      )
    } else if(cardInicio === "cadastrar") {
      return (
        <ContainerCadastrar>
          <CardCadastrar>
            <h2 className="tituloInicio">Cadastre-se</h2>
            <input className="usuarioRegistro" id='usuarioRegistro' type="text" placeholder="Usuário de registro:"/>
            <input className="senha1Registro" id="senha1Registro" type="password" placeholder="Senha:"/>
            <input className="senha2Registro" id="senha2Registro" type="password" placeholder="Repita a senha:"/>
            <button className="botaoCadastrar" onClick={() => {
              cadastrar();
            }}>Cadastrar</button>
            <p onClick={() => alterarDivCentral()}>Já tenho uma conta</p>
          </CardCadastrar>
          <CardDicas>
            <h3>Dicas:</h3>
            <p> - Não utilize caracteres especias no usuário de registro</p>
            <p> - Não utilize dados pessoais no cadastro</p>
          </CardDicas>
        </ContainerCadastrar>
      )
    } else if(cardInicio === "validacao") {
      return(
        <>

        </>
      )
    }
  }

  if(logado) {
    const Posts = () => {
      return (
        <>
          
          <PostStyle>
            <div className='titleDiv'>
              <div className='pictureDiv'>
                <img src='https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg' alt=' ' />
              </div>
              <div className='informationPost'>
                <span className='name'>Jucelio Delmondes</span>
                <span className='time'>Realizou uma publicação - 15 min</span>
              </div>
              <div className='optionsPostDiv'>
                <IoIosMore className='optionsPost'></IoIosMore>
              </div>
            </div>
            <div className='textPost'>
              <span>Abc</span>
            </div>
            <div className='imagesPost'>
              <img src='https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg' alt=' '/>
            </div>
            <Divider></Divider>
            <ButtonsPostDiv>
              <div className='likeDiv'>
                <IoIosThumbsUp className='likeImage'></IoIosThumbsUp>
                <span>Curtir</span>
              </div>
              <div className='commentaryDiv'>
                <IoIosText className='commentaryImage'></IoIosText>
                <span>Comentar</span>
              </div>
            </ButtonsPostDiv>
            <FullDivider></FullDivider>
            <CommentaryDiv>
              <div className='commentary'>
                <img src="https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg" alt=' '/>
                <div className='nameAndText'>
                  <span className='nameCommentary'>Jucelio Delmondes</span>
                  <span className='textCommentary'>Ak jashdkjhkl ajsdhj hjadsk hjkkdl dhjk hjashkj hkdj jhd dka sdasjkdh jaskjh kajs hd hjkashd h kj hj hjk h</span>
                </div>
                <div className="optionsCommentary">
                  <span className="informationCommentary">20/03/1998 às 14:30 - </span>
                  <span className="likeCommentary">Curtir</span>
                </div>
              </div>
            </CommentaryDiv>
            <CommentDiv>
              <img src="https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg" alt=' '/>
              <input type="text" placeholder="Escreva um comentário:"></input>
              <IoMdSend className="buttonSendCommentary"></IoMdSend>
            </CommentDiv>
          </PostStyle>
        </>
      )
    }

    return (
      <div className="App">
        <>
          <Container>
            <CardLeft>
              <DivParticles>
                <Particles className='particles'
                params=
                {
                  {
                    "particles": {
                      "number": {
                        "value": 300,
                        "density": {
                          "enable": true,
                          "value_area": 800
                        }
                      },
                      "color": {
                        "value": "#ffffff"
                      },
                      "shape": {
                        "type": "circle",
                        "stroke": {
                          "width": 0,
                          "color": "#000000"
                        },
                        "polygon": {
                          "nb_sides": 5
                        },
                        "image": {
                          "src": "img/github.svg",
                          "width": 100,
                          "height": 100
                        }
                      },
                      "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": {
                          "enable": true,
                          "speed": 1,
                          "opacity_min": 0,
                          "sync": false
                        }
                      },
                      "size": {
                        "value": 5,
                        "random": true,
                        "anim": {
                          "enable": false,
                          "speed": 4,
                          "size_min": 0.3,
                          "sync": false
                        }
                      },
                      "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                      },
                      "move": {
                        "enable": true,
                        "speed": 0.5,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false,
                        "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 600
                        }
                      }
                    },
                    "interactivity": {
                      "detect_on": "window",
                      "events": {
                        "onhover": {
                          "enable": false,
                          "mode": "bubble"
                        },
                        "onclick": {
                          "enable": false,
                          "mode": "repulse"
                        },
                        "resize": true
                      },
                      "modes": {
                        "grab": {
                          "distance": 400,
                          "line_linked": {
                            "opacity": 1
                          }
                        },
                        "bubble": {
                          "distance": 250,
                          "size": 0,
                          "duration": 2,
                          "opacity": 0,
                          "speed": 3
                        },
                        "repulse": {
                          "distance": 400,
                          "duration": 0.4
                        },
                        "push": {
                          "particles_nb": 4
                        },
                        "remove": {
                          "particles_nb": 2
                        }
                      }
                    },
                    "retina_detect": true
                  }
                }
                />
              </DivParticles>
              <ProfileInfo>
                <img src='https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg' alt=' '/>
                <span className="statusProfile">Disponível</span>
                <span className='nameProfile'>Jucelio Delmondes</span>
              </ProfileInfo>
              <LeftOptions>
                <div className='rowOption'>
                  <IoIosPerson className="imageOption"></IoIosPerson>
                  <span>Perfil</span>
                </div>
                <div className='rowOption'>
                  <IoIosBook className='imageOption'></IoIosBook>
                  <span>Feed</span>
                </div>
                <div className='rowOption'>
                  <IoIosPaper className="imageOption"></IoIosPaper>
                  <span>Mensagens</span>
                </div>
                <div className='rowOption'>
                  <IoIosPeople className='imageOption'></IoIosPeople>
                  <span>Seguidores</span>
                </div>
                <div className="rowOption">
                  <IoIosSettings className='imageOption'></IoIosSettings>
                  <span>Configurações</span>
                </div>
                <div className='rowOption'onClick={() => logoff()}>
                  <IoIosExit className='imageOption'></IoIosExit>
                  <span>Sair</span>
                </div>
              </LeftOptions>
            </CardLeft>
            <CenterDiv>
              <Posts></Posts>
            </CenterDiv>
            <CardRight>
              c
            </CardRight>
          </Container>

        </>
      </div>
    );
  } else return (
    <>
      
      <ContainerLogin>
        <DivParticles>
          <Particles className='particles'
            params=
            {
              {
                "particles": {
                  "number": {
                    "value": 80,
                    "density": {
                      "enable": true,
                      "value_area": 800
                    }
                  },
                  "color": {
                    "value": "#cabe98"
                  },
                  "shape": {
                    "type": "circle",
                    "stroke": {
                      "width": 0.5,
                      "color": "#d2c498"
                    },
                    "polygon": {
                      "nb_sides": 5
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 4,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                  },
                  "move": {
                    "enable": true,
                    "speed": 1,
                    "direction": "top-right",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                      "enable": true,
                      "rotateX": 10000,
                      "rotateY": 3447.335930860874
                    }
                  }
                },
                "interactivity": {
                  "detect_on": "canvas",
                  "events": {
                    "onhover": {
                      "enable": false,
                      "mode": "repulse"
                    },
                    "onclick": {
                      "enable": false,
                      "mode": "push"
                    },
                    "resize": true
                  },
                  "modes": {
                    "grab": {
                      "distance": 400,
                      "line_linked": {
                        "opacity": 1
                      }
                    },
                    "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true
              }
            }
          />
        </DivParticles>
        <DivCardInicio>

        </DivCardInicio>
      </ContainerLogin>
      
      <Snackbar open={snackBarState} onClose={closeSnack} autoHideDuration={6000}> 
        <Alert onClose={closeSnack} severity={severityMessage}>
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </>
  )
}

export default App;
