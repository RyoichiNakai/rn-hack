import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';
import ReactMarkdown from 'react-markdown';

type AboutTextProps = {
  title: string;
  markdown: string;
};

const AboutText = (props: AboutTextProps) => {
  return (
    <AboutTextWrapper>
      <div tw="mx-6">
        <h2 tw={aboutTextCss}>{props.title}</h2>
        <ReactMarkdown>{props.markdown}</ReactMarkdown>
      </div>
    </AboutTextWrapper>
  );
};

const AboutTextWrapper = tw.div`
  flex flex-1 justify-center items-center
`;

const aboutTextCss = `
  text-3xl text-primary leading-10
`;

export default AboutText;
