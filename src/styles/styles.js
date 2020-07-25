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
    background-color:white;
`;

//Info profile and status
export const CardLeft = styled.div`
    display:flex;
    flex-direction:column;
    width:23%;
    background-color:#f2f2f4;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.18);
    z-index:1;
    min-width:230px;
`;

//Image, Name
export const ProfileInfo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
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
        color:#929292;
        
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
        color:green;
        &:hover{
            color:black;
        }
    }
`;

export const LeftOptions = styled.div`
    display:flex;
    flex-direction:column;
    height:70%;
    justify-content:center;
    .rowOption {
        display:flex;
        flex-direction:row;
        justify-content: left;
        margin-left: 50px;
        margin-bottom:10px;
        height:50px;
        transition: background-color .1s linear;
        border-top-left-radius:70px;
        border-bottom-left-radius:70px;
        background-color:#f2f2f4;
        span {
            font-family:inherit;
            font-weight:600;
            font-size:1rem;
            align-self:center;
            cursor:pointer;
            color:#929292;
            margin-left:10px;
        }
        .imageOptions {
            transition: all .5s cubic-bezier(0, 0.8, 0.81, 0.91);
            width:23px;
            height:23px;
            align-self:center;
            color:#555555;
            padding:3px;
            border-style:solid;
            border-radius:100%;
            border-width:1px;
            border-color:#dddddd;
            box-shadow: 3px 0px 15px rgba(0, 0, 0, 0.3);
        }

        &:hover{
            background-color:#f7f8fa;
            cursor:pointer;
            .imageOptions {
                transition: all .05s linear;
                width:30px;
                height:30px;
                box-shadow: 3px 0px 10px rgba(0, 0, 0, 0.7);
            }
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
                color:#38a3e2;
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
export const CommentsDiv = styled.div`
    .commentary{
        text-align:left;
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
                color:#38a3e2;
            }

            .textCommentary {
                font-weight:600;
                font-size:12px;
                margin-left: 7px;
            }
        }
    }
`;