import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Container, CardLeft, CenterDiv, CardRight, ProfileInfo,
TopBar, LeftOptions, PostStyle, Divider, ButtonsPostDiv, FullDivider, CommentsDiv} from './styles/styles'
import {IoIosPerson, IoIosBook, IoIosPaper, IoIosPeople, IoIosSettings, IoIosExit,
IoIosMore, IoIosThumbsUp, IoIosText}  from 'react-icons/io'

function App() {

  const Posts = () => {
    return (
      <>
        <PostStyle>
          <div className='titleDiv'>
            <div className='pictureDiv'>
              <img src='https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg'></img>
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
            <img src='https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg'></img>
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
          <CommentsDiv>
            <div className='commentary'>
              <img src="https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg"/>
              <div className='nameAndText'>
                <span className='nameCommentary'>Jucelio Delmondes</span>
                <span className='textCommentary'>Ak jashdkjhkl ajsdhj hjadsk hjkkdl dhjk hjashkj hkdj jhd dka sdasjkdh jaskjh kajs hd hjkashd h kj hj hjk h</span>
              </div>
              <div className="optionsCommentary">
                <span className="informationCommentary">20/03/1998 às 14:30 - </span>
                <span className="likeCommentary">Curtir</span>
              </div>
            </div>
          </CommentsDiv>
        </PostStyle>
      </>
    )
  }

  return (
    <div className="App">
      <>
        <TopBar>
        </TopBar>
        <Container>
          <CardLeft>
            <ProfileInfo>
              <img src='https://pm1.narvii.com/6417/e314d0359bb026aa6a4b4029842eb787a25428af_hq.jpg'></img>
              <span className="statusProfile">Disponível</span>
              <span className='nameProfile'>Jucelio Delmondes</span>
            </ProfileInfo>
            <LeftOptions>
              <div className='rowOption'>
                <IoIosPerson className="imageOptions"></IoIosPerson>
                <span>Perfil</span>
              </div>
              <div className='rowOption'>
                <IoIosBook className='imageOptions'></IoIosBook>
                <span>Feed</span>
              </div>
              <div className='rowOption'>
                <IoIosPaper className="imageOptions"></IoIosPaper>
                <span>Mensagens</span>
              </div>
              <div className='rowOption'>
                <IoIosPeople className='imageOptions'></IoIosPeople>
                <span>Seguidores</span>
              </div>
              <div className="rowOption">
                <IoIosSettings className='imageOptions'></IoIosSettings>
                <span>Configurações</span>
              </div>
              <div className='rowOption'>
                <IoIosExit className='imageOptions'></IoIosExit>
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
