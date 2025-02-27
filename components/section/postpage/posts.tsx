import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { postType } from '../../../src/types/postType';
import { loaderProp } from '../../../src/utils/loaderProp';

const Posts = ({ postData }: { postData: postType[] }) => {
  return (
    <PostWrap>
      {postData.map((item: postType) => {
        return (
          <PostBox key={item.id}>
            <Link href={item.link}>
              <LinkBox>
                <ThumnailContent>
                  <Thumnail
                    loader={loaderProp}
                    src={item.image}
                    alt="post_image"
                    unoptimized={true}
                    priority={true}
                    placeholder="blur"
                  />
                </ThumnailContent>
              </LinkBox>
            </Link>
            <ContentBox>
              <Link href={item.link}>
                <LinkBox>
                  <ContentH4 data-testid="post_title">{item.title}</ContentH4>
                  <ContentDescription>
                    <ContentDescriptionP data-testid="post_content">
                      {item.content}
                    </ContentDescriptionP>
                  </ContentDescription>
                </LinkBox>
              </Link>
              <SubInfo data-testid="post_date">
                <span>{item.date}</span>
              </SubInfo>
            </ContentBox>
          </PostBox>
        );
      })}
    </PostWrap>
  );
};

export default Posts;

const PostWrap = styled.div`
  padding: 2rem;
  background-color: #121212;
`;

const PostBox = styled.div`
  display: inline-block;
  width: 23%;
  background: #1e1e1e;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  flex-direction: column;
  vertical-align: top;
`;

const LinkBox = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

const ThumnailContent = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
`;

const Thumnail = styled(Image)`
  position: absolute;
  top: 0 !important;
  margin: 0 !important;
  min-height: 200px !important;
  object-fit: fill;
`;

const ContentBox = styled.div`
  padding: 1rem;
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
`;

const ContentH4 = styled.h4`
  font-size: 1rem;
  margin: 0px 0px 0.25rem;
  line-height: 1.5;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #ececec;
`;

const ContentDescription = styled.div`
  flex: 1 1 0%;
`;

const ContentDescriptionP = styled.p`
  margin: 0px 0px 1.5rem;
  word-break: break-word;
  overflow-wrap: break-word;
  font-size: 0.875rem;
  line-height: 1.5;
  height: 3.9375rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #d9d9d9;
`;

const SubInfo = styled.div`
  font-size: 0.75rem;
  line-height: 1.5;
  color: #acacac;
`;
