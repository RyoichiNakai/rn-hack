import React from 'react';
import '../styles/global.scss';

type ArticleLinkProps = {
  title:    string;
  date:     string;
  imageUrl: string;
  category: string[];
};

const ArticleLink = (props: ArticleLinkProps) => {
  console.log(props.imageUrl);
  return (
    <div className="">
      <div>
          <img src={props.imageUrl} className="" alt="post-cover"></img>
      </div>
      <div className="">
          <h2>{props.title}</h2>
          <p className="">{props.category}</p>
          <p className="">{props.date}</p>
      </div>
    </div>
  )
};

export default ArticleLink;
