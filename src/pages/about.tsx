/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import 'twin.macro';
import tw from 'twin.macro';

import Layout from '../layouts/Layout';
import Title from '../components/utils/article/Title';
import ButtomButton from '../components/utils/article/ButtomButton';
import ProfileImage from '../components/utils/ProfileImage';
import BgRectLeft from '../components/utils/bgRect/Left';
import ListImageRight from '../components/about/ListImageRight';
import ListImageLeft from '../components/about/ListImageLeft';
import AboutText from '../components/about/text';

import { AboutConfig } from '../../pages/about';

const About = () => {
  const aboutList = AboutConfig.list.map((config, index) => {
    return (
      <div tw="mt-40 first:mt-32">
        {index % 2 === 0 ? (
          <div tw="flex">
            <AboutText title={config.title} markdown={config.markdown} />
            <ListImageRight imageUrl={config.image} />
          </div>
        ) : (
          <div tw="flex">
            <ListImageLeft imageUrl={config.image} />
            <AboutText title={config.title} markdown={config.markdown} />
          </div>
        )}
      </div>
    );
  });

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
            <AboutText title={AboutConfig.profile.title} markdown={AboutConfig.profile.markdown} />
          </div>

          <div>{aboutList}</div>

          <div tw="mt-28 mb-10">
            <ButtomButton text="Home" />
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
