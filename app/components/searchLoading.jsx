"use client"
import { css } from '@emotion/react';
import { ClipLoader } from 'react-spinners';

const override = css`
  display: inline-block;
  vertical-align: middle;
`;

const SearchLoading = () => {
  return <ClipLoader color="#ffffff" loading={true} css={override} size={20} />;
};

export default SearchLoading;
