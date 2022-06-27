/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import 'twin.macro';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';

import Layout from '../layouts/Layout';
import Title from '../components/utils/article/Title';
import ProfileImage from '../components/utils/ProfileImage';
import BgRectLeft from '../components/utils/bgRect/Left';

import { AboutConfig } from '../../pages/about';

const About = () => {
  return (
    <Layout>
      <AboutWrapper>
        <BgRectLeft />

        <Content>
          <Title
            title="ABOUT"
            underLineWidth="250"
          />

          <div tw="flex mt-20">
            <div tw="ml-16">
              <ProfileImage />
            </div>

            <div tw="flex flex-1 justify-center items-center">
              <div>
                <h2 tw="text-3xl text-primary leading-10">
                  {AboutConfig.profile.title}
                </h2>
                <ReactMarkdown>{AboutConfig.profile.markdown}</ReactMarkdown>
              </div>
            </div>
          </div>

          <div tw="flex mt-32">
            <div tw="flex flex-1 justify-center items-center">
              <div>
                <h2 tw="text-3xl text-primary leading-10">
                  {AboutConfig.list.skills.title}
                </h2>
                <ReactMarkdown>
                  {AboutConfig.list.skills.markdown}
                </ReactMarkdown>
              </div>
            </div>

            {/* <div tw="relative -mt-6 w-[424px] h-[248px]">
              <div tw="absolute top-0 right-0 w-[360px] h-[216px] bg-primary rounded-l">
              </div>
              <div tw="absolute top-6 right-6 w-[400px] h-[225px] bg-secondary">
              </div>
            </div> */}

            <div tw="relative -mt-7 w-[530px] h-[310px]">
              <div tw="absolute top-0 right-0 w-[450px] h-[270px] bg-primary rounded-l"></div>
              <div tw="absolute top-7 right-7 w-[500px] h-[281px] rounded overflow-hidden">
                <img
                  src={AboutConfig.list.skills.image}
                  alt="about-image"
                  width="500px"
                  height="281px"
                  tw="object-cover"
                />
              </div>
            </div>
          </div>

          <div tw="flex mt-40">
            {/* <div tw="relative -mt-6 w-[424px] h-[248px]">
              <div tw="absolute top-0 left-0 w-[360px] h-[216px] bg-primary rounded-r">
              </div>
              <div tw="absolute top-6 left-6 w-[400px] h-[225px] bg-secondary">
              </div>
            </div> */}

            <div tw="relative -mt-7 w-[530px] h-[310px]">
              <div tw="absolute top-0 left-0 w-[450px] h-[270px] bg-primary rounded-r"></div>
              <div tw="absolute top-6 left-6 w-[500px] h-[281px] rounded overflow-hidden">
                <img
                  src={AboutConfig.list.architecture.image}
                  alt="about-image"
                  width="500px"
                  height="281px"
                  tw="object-cover"
                />
              </div>
            </div>

            <div tw="flex flex-1 justify-center items-center">
              <div>
                <h2 tw="text-3xl text-primary leading-10">
                  {AboutConfig.list.architecture.title}
                </h2>
                <ReactMarkdown>
                  {AboutConfig.list.architecture.markdown}
                </ReactMarkdown>
              </div>
            </div>
          </div>

          <div tw="mt-32">
            
          </div>
        </Content>
      </AboutWrapper>
    </Layout>
  );
};

const AboutWrapper = tw.div`
  flex justify-center relative
`;

// TODO:レスポンシブ対応
const Content = tw.div`
  w-full max-w-[1024px] bg-accent rounded z-10 mx-20 my-20
`;

export default About;
