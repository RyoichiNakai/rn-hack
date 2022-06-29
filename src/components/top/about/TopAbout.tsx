/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import tw from 'twin.macro';
import ReactMarkdown from "react-markdown";

import ProfileImage from '../../utils/ProfileImage';
import { AboutConfig } from '../../../../pages/about';

const TopAbout = () => {
  return (
    <TopAboutWrapper>
      <Container>
        <div css={title}>
          <h2>ABOUT ME</h2>
        </div>

        <AboutContent>
          <ProfileImage />
          <TextWrapper>
            <ReactMarkdown>
              {AboutConfig.profile.markdown}
            </ReactMarkdown>
          </TextWrapper>
        </AboutContent>
      </Container>
    </TopAboutWrapper>
  );
};

const TopAboutWrapper = tw.div`
  flex justify-center
`;

const Container = tw.div`
  w-[75%] max-w-[960px] relative
`;

const AboutContent = tw.div`
  mt-20 mb-12 flex
`;

const title = css`
  ${tw`relative text-4xl`}
  &::after {
    ${tw`bg-primary`}
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 2px;
  }
`;

const TextWrapper = tw.div`
  flex flex-1 justify-center items-center
`;

export default TopAbout;
