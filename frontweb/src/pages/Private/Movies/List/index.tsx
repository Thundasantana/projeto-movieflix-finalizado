import { AxiosRequestConfig } from 'axios';
import Pagination from 'components/Pagination';
import MovieCrudCard from 'pages/Private/Movies/MovieCrudCard';
import { useEffect, useState } from 'react';
import { Movie } from 'type/movie';
import { SpringPage } from 'type/vendor/spring';
import { requestBackend } from 'util/requests';

type ControlComponentsData = {
  activePage: number;
};

const List = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({ activePage: pageNumber });
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: controlComponentsData.activePage,
        size: 3,
      },
    };
    requestBackend(config).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);

  return (
    <div className="row">
      {page?.content.map((movie) => (
        <div key={movie.id} className="col-sm-4">
          <MovieCrudCard movie={movie} />
        </div>
      ))}
      <Pagination
        pageCount={page ? page.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default List;
