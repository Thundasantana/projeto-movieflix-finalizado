import ContentLoader from 'react-content-loader';

const MovieDetailsLoader = () => (
  <ContentLoader viewBox="0 0 320 280" height={280} width={320}>
    <rect x="" y="" rx="10" ry="10" width="280" height="180" />
  </ContentLoader>
);

MovieDetailsLoader.metadata = {
  name: 'RJavlonbek',
  github: 'RJavlonbek',
  description: 'Blog item',
  filename: 'BlogItem',
};

export default MovieDetailsLoader;
