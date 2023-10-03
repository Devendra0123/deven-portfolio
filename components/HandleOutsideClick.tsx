"use client"
import React, { useEffect } from 'react'

const HandleOutsideClick = ({containerRef, handleFunc,parameter}:any) => {

    useEffect(() => {
        const handleClickOutside = (event: any) => {
          if (
            containerRef.current &&
            !containerRef.current.contains(event.target)
          ) {
            handleFunc()
          }
        };
    
        document.addEventListener("click", handleClickOutside);
    
        return () => {
          document.removeEventListener("click", handleClickOutside);
        };
      }, [parameter]);

  return null
}

export default HandleOutsideClick