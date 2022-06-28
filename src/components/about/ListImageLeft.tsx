import React from 'react';
import 'twin.macro';
import tw from 'twin.macro';

type ListImageProps = {
  imageUrl: string;
};

const ListImageLeft = (props: ListImageProps) => {
  return (
    <ListImageRightWrapper>
      <BgRectRight />
      <ImageWrapper>
        <img
          src={props.imageUrl}
          alt="about-image"
          width="500px"
          height="281px"
          tw="object-cover"
        />
      </ImageWrapper>
    </ListImageRightWrapper>
  );
};

const ListImageRightWrapper = tw.div`
  relative -mt-7 w-[530px] h-[310px]
`;

const BgRectRight = tw.div`
  absolute top-0 left-0 w-[450px] h-[270px] bg-primary rounded-r
`;

const ImageWrapper = tw.div`
  absolute top-7 left-7 w-[500px] h-[281px] rounded overflow-hidden
`;

export default ListImageLeft;
