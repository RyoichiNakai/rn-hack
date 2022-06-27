export const AboutConfig = {
  profile: {
    title: 'Profile',
    markdown: `
新卒1年目のバックエンド兼インフラエンジニア。  
絶賛お勉強中。  
AWS等のクラウドやコンテナ技術が得意。  
このブログでは、日々の開発でのアウトプットや  
疑問に思ったことを共有します。
    `,
  },
  list: {
    skills: {
      title: 'Skills',
      image: '/about/skills.png',
      markdown: `
#### Backend
- Go / Python
#### Frontend
- React / Vue / TypeScript
#### infrastructure
- AWS / Firebase / Terraform / Dokcer
#### CI/CD
- Github Actions / Circle CI`,
    },
    architecture: {
      title: 'ARCHITECTURE',
      image: '/about/architecture.png',
      markdown: `
このブログは左図のようなアーキテクチャで構成されています。  

- CMS: Contentful
- Hosting: Amplify
- Frontend: Gatsby

Githubにプッシュしたり、Contentfulにて記事を投稿すると、CodeBuildにてビルドされ、アーティファクトがS3に格納されます。
また、CloudFrontにてS3のコンテンツを配信しています。
      `,
    },
  },
};
