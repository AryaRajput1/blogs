import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import authService from "../appwrite/authService";
import {Container, PostCard} from '../components'
import Hero from '../components/Hero';

function Home() {
        return (
                <Hero/>
        )
    
}

export default Home