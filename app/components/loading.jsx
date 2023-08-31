"use client"
import React from 'react'
import {css} from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
display:block;
margin:0 auto;
border-color:red;`;
const Loadingl = () => {
  return (
    <div className="loading-container ">
    <ClipLoader color="#ffe2d" loading={true} css={override} size={50} />
  </div>
  )
};

export default Loadingl
