/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import tw from 'twin.macro';

import ProfileImage from '../../utils/ProfileImage';

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
            <div tw="text-base">
              <p>新卒1年目のバックエンドエンジニア。絶賛お勉強中。</p>
              <p>
                ガジェット・インテリア等、様々な「もの」にこだわるのが大好き。
              </p>
              <p>
                このブログでは、開発でのアウトプットや好きな「もの」を共有します。
              </p>
            </div>
          </TextWrapper>
        </AboutContent>
      </Container>
    </TopAboutWrapper>
  );
};

const TopAboutWrapper = tw.div`
  mt-20 flex justify-center
`;

const Container = tw.div`
  w-[75%] max-w-[960px] relative
`;

const AboutContent = tw.div`
  mt-20 mb-12 flex
`;

const title = css`
  ${tw`relative text-5xl`}
  &::after {
    ${tw`bg-secondary`}
    content: '';
    height: 2px;
    width: 100%;
    position: absolute;
    bottom: 2px;
  }
`;

const TextWrapper = tw.div`
  flex flex-1 justify-center items-center
`;

export default TopAbout;
