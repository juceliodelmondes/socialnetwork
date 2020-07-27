import React from 'react';

import {Container, CardLeft, CenterDiv, CardRight, ProfileInfo,
LeftOptions, PostStyle, Divider, ButtonsPostDiv, FullDivider, CommentaryDiv, CommentDiv,
DivParticles} from './styles/styles'
import {IoIosPerson, IoIosBook, IoIosPaper, IoIosPeople, IoIosSettings, IoIosExit,
IoIosMore, IoIosThumbsUp, IoIosText,IoMdSend}  from 'react-icons/io'
import Particles from 'react-particles-js';
function App() {

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
            <IoMdSend class="buttonSendCommentary"></IoMdSend>
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
              <Particles
              params=
              {
                {
                  "particles": {
                    "number": {
                      "value": 200,
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
                      "value": 0.5,
                      "random": false,
                      "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                      }
                    },
                    "size": {
                      "value": 1.5,
                      "random": true,
                      "anim": {
                        "enable": false,
                        "speed": 4.872463273808071,
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
                      "speed": 0.7,
                      "direction": "top-left",
                      "random": false,
                      "straight": false,
                      "out_mode": "out",
                      "bounce": false,
                      "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
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
                  "retina_detect": false
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
              <div className='rowOption'>
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
}

export default App;
