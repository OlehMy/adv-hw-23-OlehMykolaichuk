import React from 'react';
import DropDownArrow from "./assets/icons/drop-down-arrow.png";
import Comment from "./assets/icons/comment.png";
import Like from "./assets/icons/like.png";
import Repost from "./assets/icons/repost.png";
import Tick from "./assets/icons/tick.png";
import Upload from "./assets/icons/upload.png";
import { useSelector } from "react-redux";

const Posts = (props) => {
    const posts = useSelector((state) => state.posts);
    console.log('posts2: ', posts);

    return (
        <>
        {posts.map((post) => (
        <article className = "post flex">
            <div className = "post__author-photo flex">
                <img src = {post.authorPhoto} alt = {"authorphoto"} />
            </div>
            <div className = "post__wrapper flex">
                <div className = "post__inner flex">                
                    <div className="post__data flex">
                        <div className = "post__data-author flex">
                            <h3>{post.authorName}</h3>
                            <img src = {Tick} alt = {"img"}/>
                            <p>{post.authorNickname}</p>
                            <p> &#183; {post.postDate}</p>
                        </div>
                        <h4>{post.postText}</h4>
                    </div>
                </div>
                <img src = {post.postImage} alt = {"img"}/>
                <div className = "post__reactions flex">
                    <div className = "post__reaction-comments flex">
                        <img src = {Comment} alt = {"img"} className = "bounce" />
                        <p>{post.postComments==='' ? '0' : post.postComments}</p>
                    </div>
                    <div className = "post__reaction-reposts flex">
                        <img src = {Repost} alt = {"img"} className = "bounce" />
                        <p>{post.postReposts==='' ? '0' : post.postReposts}</p>
                    </div>
                    <div className = "post__reaction-likes flex">
                        <img src = {Like} alt = {"img"} className = "bounce" />
                        <p>{post.postLikes==='' ? '0' : post.postLikes}</p>
                    </div>
                    <div className = "post__reaction-uploads flex">                    
                        <img src = {Upload} alt = {"img"} className = "bounce" />
                    </div>
                </div>
            </div>
            <div className = "post__drop-down flex">
                <img  src = {DropDownArrow} alt = {"img"} className = "scale" />
            </div>            
        </article>
        ))}
        </>
    );
}

export default Posts