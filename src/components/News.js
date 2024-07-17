import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `${process.env.REACT_APP_API_URL}/latest-news?category=${props.category}&language=en&page=${page}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${props.pageSize}`;
    setLoading(true);
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Network response was not ok: ${data.status} ${data.statusText}`);
      }
      let parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.news);
      setTotalResults(parsedData.news.length); // Update this if total results are available differently
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      props.setProgress(100);
    }
  };

  useEffect(() => {
    document.title = `${capitalize(props.category)} - NewsMonkey`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchMoreData = async () => {
    const url = `${process.env.REACT_APP_API_URL}/latest-news?category=${props.category}&language=en&page=${page + 1}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${props.pageSize}`;
    const newPage = page + 1;
    try {
      let data = await fetch(url);
      if (!data.ok) {
        throw new Error(`Network response was not ok: ${data.status} ${data.statusText}`);
      }
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData.news));
      setPage(newPage);
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  return (
    <>
      <h2 className="text-center" style={{ margin: '30px 0px', marginTop: '90px' }}>
        NewsMonkey - Top {capitalize(props.category)} Headlines
      </h2>
      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row d-flex justify-content-center">
            {articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6 mb-2" key={element.id}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 60) : ''}
                    author={element.author}
                    date={element.published ? element.published : ''}
                    description={element.description ? element.description.slice(0, 105) : ''}
                    image={element.image}
                    url={element.url}
                    //source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
