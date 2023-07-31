"use client";

import React from 'react'
import Image from 'next/image'
import { Button } from '@/types';

type Props = {}

const Button = ({ btnType, title, containerStyles, handleClick }: Button) => {
  return (
    <button
        disabled={false}
        type={btnType || "button"}
        className={`custom-btn ${containerStyles}`}
        onClick={handleClick}
    >
        <span className={`flex-1`}>
            {title}
        </span>
    </button>
  )
}

export default Button