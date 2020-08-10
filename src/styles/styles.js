import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    height:100vh;
    background-color:green;
`;

//Top bar
export const TopBar = styled.div`
    display:flex;
    background-color:yellow;
    height:65px;
    background-color:#1a237e;
`;

//Info profile and status
export const CardLeft = styled.div`
    display:flex;
    flex-direction:column;
    background-color:#0097a7;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.18);
    z-index:50;
    min-width:185px;
    &:hover {
        .particles {
            filter:blur(0px);
        }
    }
    
`;

//Image, Name
export const ProfileInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    z-index:50;
    img{
        transition: all .5s cubic-bezier(0, 0.8, 0.81, 0.91);
        margin-top:20px;
        width: 80px;
        height:80px;
        border-radius:100%;
        object-fit:contain;
        border-style:solid;
        border-color:green;
        border-width:3px;
        cursor:pointer;
        box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.3);
        &:hover{
            transition: all .1s linear;
            box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.7);
            width:90px;
            height:90px;
        }
    }
    .nameProfile{
        margin-top:3px;
        font-family:inherit;
        font-weight:600;
        font-size:1rem;
        cursor:pointer;
        color:white;
        
        &:hover{
            color:black;
        }
    }
    .statusProfile{
        margin-top:5px;
        font-family:inherit;
        font-weight:600;
        font-size:x-small;
        cursor:pointer;
        color:white;
        &:hover{
            color:black;
        }
    }
`;

export const LeftOptions = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    height:100%;
    justify-content:center;
    z-index:50;
    .rowOption {
        font-weight:600;
        color:white;
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-bottom:20px;
        &:hover {
            cursor:pointer;
            background-color:#00acc155;
            .imageOption {
                transition: all .1s linear;
                width:40px;
                height:40px;
            }
        }
        .imageOption {
            color:white;
            border-style:solid;
            border-radius:100%;
            border-width:1px;
            transition: all .1s linear;
            width:30px;
            height:30px;
            margin-left: 15px;
            padding:2px;
        }

        span {
            margin-left:10px;
        }
    }

`;

//Center div for posts and sidebar
export const CenterDiv = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    background-color:#f7f8fa;
    min-width:400px;
    align-items:center;
    z-index:50;
`;

export const CardRight = styled.div`
    display:flex;
    flex-direction:column;
    width:23%;
    background-color:gray;
    min-width:200px;
`;

export const PostStyle = styled.div`
    display: flex;
    flex-direction:column;
    background-color:white;
    margin-top:20px;
    width:500px;
    border-style:solid;
    border-width:1px;
    border-radius:3px;
    background-color:white;
    border-color:#eeeeee;
    .titleDiv {
        width:100%;
        display:flex;
        flex-direction:row;
                margin-top: 20px;
        .pictureDiv {
            img {
                width:50px;
                height:50px;
                margin-left: 20px;
                margin-bottom: 20px;
                border-radius:100%;
                border-style:solid;
                border-color:green;
                border-width:2px;
                cursor:pointer;
            }
        }

        .informationPost {
            display:flex;
            flex-direction:column;
            width:100%;
            text-align:left;
            margin-top:4px;
            margin-left: 4px;
            .name {
                font-weight:600;
                cursor:pointer;
                width:max-content;
                color:#00acc1;
            }
            .time {
                font-weight:600; 
                color:#8c8c8c;
                font-size:13px;
                width:max-content;
            } 
        }

        .optionsPostDiv {
            display:flex;
            flex-direction:row;
            float:right;
            margin-top:7px;
            margin-right:10px;
            .optionsPost {
                cursor:pointer;
            }
        }
    }
    .textPost {
        text-align:left;
        margin-bottom:20px;
        span {
            margin-left:25px;
            font-weight:600;
            font-size:15px;
        }
    }
    .imagesPost {
        display:flex;
        justify-content:center;
        img {
            width:100%;
            object-fit:contain;
            object-position:center;
            cursor:pointer;
            transition: all .5s linear;
                border-radius:2px;

            &:hover {
                transition: all .15s linear;
                width:102%;
                box-shadow: 0px 2px 10px #000000;
            }
        }
    }
`;

export const Divider = styled.div`
    width:75%;
    background-color:blue;
    border-bottom-style:solid;
    border-color:#e2e2e2;
    margin-top: 10px;
    margin-bottom: 10px;
    border-width:1px;
    align-self:center;
`;

export const FullDivider = styled.div`
    width:100%;
    background-color:blue;
    border-bottom-style:solid;
    border-color:#e2e2e2;
    margin-bottom: 10px;
    border-width:1px;
    align-self:center;
`;

export const ButtonsPostDiv = styled.div`
    display:flex;
    flex-direction:row;
    .likeDiv{
        display:flex;
        flex-direction:row;
        width:50%;
        align-items: center;
        justify-content:center;
        margin-bottom:10px;
        .likeImage {
            color:#0097a7;
            &:hover{
                cursor:pointer;
            }
        }
        span{
            font-weight:600;
            margin-left:3px;
            &:hover{
                cursor:pointer;
            }
        }
    }
    .commentaryDiv{
        display:flex;
        flex-direction:row;
        width:50%;
        align-items: center;
        justify-content:center;
        margin-bottom:10px;
        .commentaryImage{
            color:#0097a7;
            &:hover {
                cursor:pointer;
            }
        }
        span{
            font-weight:600;
            margin-left:3px;
            &:hover {
                cursor:pointer;
            }
        }
    }
`;

//Div for all comments on any post
export const CommentaryDiv = styled.div`
    .commentary{
        text-align:left;
        margin-right:10px;
        margin-bottom:10px;
        img {
            width:40px;
            height:40px;
            border-radius:100%;
            margin:10px;
        }
        .nameAndText{
            margin-top:-55px;
            margin-left:55px;
            .nameCommentary{
                font-weight:600;
                font-size:12px;
                background-color:#f5f5f5;
                border-radius:20px;
                padding:5px;
                color:#00acc1;
                &:hover {
                    cursor:pointer;
                }
            }

            .textCommentary {
                font-weight:600;
                font-size:12px;
                margin-left: 7px;
            }
        }

        .optionsCommentary {
            .informationCommentary {
                font-weight:600;
                font-size:12px;
                margin-left:55px;
                color:#8c8c8c;
            }

            .likeCommentary {
                font-weight:600;
                font-size:12px;
                color:#00acc1;
                &:hover {
                    cursor:pointer;
                }
            }
        }
    }
`;

export const CommentDiv = styled.div`
    display:flex;
    flex-direction:row;
    margin-bottom:10px;
    img {
        width: 30px;
        height:30px;
        border-radius:100%;
        margin:5px;
    }
    input {
        width:100%;
        outline:0;
        border-color:#eeeeee;
        border-style:solid;
        border-width:1px;
        font-weight:600;
        font-size:12px;
        border-radius:20px;
        padding-left:10px;
    }
    .buttonSendCommentary{
        width:30px;
        height:30px;
        margin:5px;
        color:#0097a7;
        cursor:pointer;
    }
`;

export const DivParticles = styled.div`
    height:100%;
    width:100%;
    position:absolute;
    z-index:0;
    .particles {
        
    }
`;

//Estilo para login =========================================================================
export const ContainerLogin = styled.div`
    background-color:#00acc1;
    display:flex;
    height:100vh;
    align-items:center;
    justify-content:center;
    
`;

export const CardCentral = styled.div`
    background-color:white;
    width:360px;
    height:400px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    z-index:1;
    h1 {
        text-align:center;
    }

    .usuario, .senha {
        align-self:center;
        outline: 0;
        border-style:none;
        border-bottom-style:solid;
        margin-top:30px;
        margin-bottom:30px;
        width:80%;
        font-size:large;
        transition: border-bottom-color .5s linear;
        border-bottom-color:gray;
        color:gray;
        &:focus {
            transition: border-bottom-color .5s linear;
            border-bottom-color:#00acc1;
        }
    }

    button {
        align-self:center;
        width:50%;
        margin-top:40px;
        background-color:#00acc1;
        border-style:none;
        border-radius:3px;
        color:white;
        height:35px;
        outline:0;
        cursor:pointer;
        font-size:medium;
        font-weight:600;
    }

    p {
        font-size:small;
        text-align:center;
        font-weight:600;
        cursor:pointer;
    }
`;

export const CardCadastrar = styled.div`
    background-color:white;
    width:360px;
    height:400px;
    display:flex;
    flex-direction:column;
    border-radius:10px;
    z-index:1;
    h1 {
        text-align:center;
    }

    .usuario {
        align-self:center;
        outline: 0;
        border-style:none;
        border-bottom-style:solid;
        margin-top:20px;
        margin-bottom:20px;
        width:80%;
        font-size:large;
        transition: border-bottom-color .5s linear;
        border-bottom-color:gray;
        color:gray;
        &:focus {
            transition: border-bottom-color .5s linear;
            border-bottom-color:#00acc1;
        }
    }

    .senha1 {
        
        align-self:center;
        outline: 0;
        border-style:none;
        border-bottom-style:solid;
        margin-top:20px;
        margin-bottom:20px;
        width:80%;
        font-size:large;
        transition: border-bottom-color .5s linear;
        border-bottom-color:gray;
        color:gray;
        &:focus {
            transition: border-bottom-color .5s linear;
            border-bottom-color:#00acc1;
        }
    }

    .senha2 {
        
        align-self:center;
        outline: 0;
        border-style:none;
        border-bottom-style:solid;
        margin-top:20px;
        margin-bottom:20px;
        width:80%;
        font-size:large;
        transition: border-bottom-color .5s linear;
        border-bottom-color:gray;
        color:gray;
        &:focus {
            transition: border-bottom-color .5s linear;
            border-bottom-color:#00acc1;
        }
    }

    button {
        align-self:center;
        width:50%;
        margin-top:40px;
        background-color:#00acc1;
        border-style:none;
        border-radius:3px;
        color:white;
        height:35px;
        outline:0;
        cursor:pointer;
        font-size:medium;
        font-weight:600;
    }

    p {
        font-size:small;
        text-align:center;
        font-weight:600;
        cursor:pointer;
    }
`;