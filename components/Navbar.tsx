'use-client'  
import Link from 'next/link'  
import { SignInButton , SignUpButton , UserButton , SignOutButton , SignedIn , SignedOut , useAuth } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export function Navbar() {
    const { userId } = useAuth()
    const [isMenuOpen , setIsMenuOpen] = useState(false) 
    const [isScrolled , setIsScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 0){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll' , handleScroll)
        return () => window.removeEventListener('scroll' , handleScroll)
    })

}