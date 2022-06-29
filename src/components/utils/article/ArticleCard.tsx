/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { navigate } from 'gatsby';
import 'twin.macro';
import tw from 'twin.macro';

type ArticleCardProps = {
  id: string;
  imageUrl: string;
  title: string;
  date: string;
  categories: string[];
  slug: string;
};

const ArticleCard = (props: ArticleCardProps) => {
  const categories = props.categories.filter((_category, index) => {
    return index < 2;
  });

  const categorySpans = categories.map((category, index) => {
    return (
      <span
        key={index}
        tw="-ml-3 text-[14px] mr-2"
      >
        {category}
      </span>
    );
  });

  const handleClick = () => {
    navigate('/article/' + props.slug);
  };

  return (
    <ArticleCardWrapper onClick={handleClick}>
      <CardImageWrapper>
        <img
          src={props.imageUrl}
          alt="card-image"
          width="340px"
          height="170px"
          tw="w-full h-full object-cover"
        />
      </CardImageWrapper>

      <CardContent>
        <CardTitleBar>
          {categorySpans}
          <time tw="text-[14px]">{props.date}</time>
        </CardTitleBar>
        <div>
          <p css={cardTitle}>{props.title}</p>
        </div>
      </CardContent>
    </ArticleCardWrapper>
  );
};

const ArticleCardWrapper = tw.div`
  w-[340px] bg-accent cursor-pointer
`;

const CardImageWrapper = tw.div`
  w-full h-[170px] overflow-hidden
`;

const CardContent = tw.div`
  w-full px-3 h-28
`;

const CardTitleBar = tw.div`
  flex justify-between py-2
`;

const cardTitle = css`
  ${tw`text-xl`}
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  word-break: break-word;
`;

export default ArticleCard;
