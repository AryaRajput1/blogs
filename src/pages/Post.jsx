import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { Edit, Trash2 } from "lucide-react";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const [isAuthor,setIsAuthor] = useState(false);
    useEffect(()=>{
        setIsAuthor(post && (userData ? (post.userId === userData.$id) : false))
    })

    useEffect(() => {
        console.log(isAuthor)
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8">
            <Container>
                <h2 className="flex justify-center text-sm font-semibold text-gray-900 uppercase mb-3">Category</h2>
                <div className="w-full mb-6 text-center">
                    <h1 className="text-3xl font-bold capitalize mx-w-6xl">{post.title}</h1>
                    <span className="text-xs font-medium text-gray-400">5 Minute Read</span>
                </div>
                {isAuthor && (
                        <div className="flex items-center justify-center font-semibold gap-3">
                            <Link to={`/edit-post/${post.$id}`}>
                                <p className="flex text-xs">
                                    <Edit size={15}/> Edit
                                </p>
                            </Link>
                            <p className="flex text-sm items-center cursor-pointer" onClick={deletePost}>
                                <Trash2 size={15}/>
                                Delete
                            </p>
                        </div>
                    )}
                <div className="w-full flex justify-center mb-4 relative rounded-lg p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg lg:w-3/4"
                    />

                    
                </div>
                <div className="w-full flex justify-center text-gray-600">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}