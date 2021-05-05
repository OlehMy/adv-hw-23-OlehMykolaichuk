import React, {useState} from 'react';
import {newPost} from '../../store'
import {useDispatch} from "react-redux";
import RickPhoto from '../../img/rick.jpg'
import MortyPhoto from '../../img/morty.jpg'
import MrPoopybuttholePhoto from '../../img/mr-poopybutthole.jpg'

const rick = {
    authorPhoto: RickPhoto,
    authorName: 'Rick Sanches',
    authorNickname: '@rick_C-137',
};
const morty = {
    authorPhoto: MortyPhoto,
    authorName: 'Morty Smith',
    authorNickname: '@morty',
};
const mrPoopybutthole = {
    authorPhoto: MrPoopybuttholePhoto,
    authorName: 'Mr Poopybutthole',
    authorNickname: '@poopybutthole',
};

const Inputs = (props) => {
    const dispatch = useDispatch();

    const [authorPhoto, setAuthorPhoto] = useState();
    const [authorName, setAuthorName] = useState();
    const [authorNickname, setAuthorNickname] = useState();
    const [postText, setPostText] = useState();
    const [postImage, setPostImage] = useState();

    const addNewPost = (e) => {
        e.preventDefault();
        dispatch(newPost({
            authorPhoto: authorPhoto,
            authorName: authorName,
            authorNickname: authorNickname,
            postDate: new Date().toLocaleString("en-GB", {month: 'long', day: 'numeric'}),
            postText: postText,
            postImage: postImage,
            postComments: '',
            postReposts: '',
            postLikes: '',
        }));
    }

    const setPhotoAndNickname = (value) => {
        if(value==='Rick Sanches') {
            setAuthorPhoto(rick.authorPhoto)
            setAuthorNickname(rick.authorNickname);
        } else if (value==='Morty Smith') {
            setAuthorPhoto(morty.authorPhoto)
            setAuthorNickname(morty.authorNickname);
        } else if (value==='Mr Poopybutthole') {
            setAuthorPhoto(mrPoopybutthole.authorPhoto)
            setAuthorNickname(mrPoopybutthole.authorNickname);
        } else return null;
    }

    return (
        <form className = "inputs flex">
            <div className = "inputs__header flex">
                <h3>Create post</h3>
            </div>
            <div className = "inputs__text flex">
                <select className = "inputs__select-service" value={authorName} onChange={e => {setAuthorName(e.target.value); setPhotoAndNickname(e.target.value)}}>
                    <option selected disabled>Select author</option>
                    <option value={rick.name}>Rick Sanches</option>
                    <option value={morty.name}>Morty Smith</option>
                    <option value={mrPoopybutthole.name}>Mr Poopybutthole</option>
                </select>
                <input className = "inputs__image-url" type = "text" onChange = {e => setPostImage(e.target.value)} placeholder = "Image url*"/>
                <textarea className = "inputs__message" type = "text" onChange = {e => setPostText(e.target.value)} placeholder = "Message*"/>
            </div>
            <div className = "flex">
                <button className = "inputs__button" onClick = {addNewPost} disabled = {authorName && postText && postImage ? false : true}>add</button>                
            </div>
        </form>
    )
}

export default Inputs;