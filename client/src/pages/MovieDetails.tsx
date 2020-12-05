import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';

import { getMovieDetailsAction } from '../store/actions';
import { selectMovie } from '../store/selctors';
import { Video } from '../components/Video';
import { Duration, DateTime } from 'luxon';
import Loader from '../components/Loader';
import {
  LoaderContainer,
  DetailsContainer,
  Heading,
  Genre,
  Tagline,
  VideoWrapper,
  VideoBox,
  Image,
  ContentBox,
  Stat,
  OverView,
  BackButton,
} from '../styles/Details.styles';

interface TParams {
  id: string;
}

const MovieDetails: React.FC<RouteComponentProps<TParams>> = ({
  match: {
    params: { id },
  },
  history,
}) => {
  const dispatch = useDispatch();
  const { movieDetails, video, isLoading } = useSelector(selectMovie);

  useEffect(() => {
    dispatch(getMovieDetailsAction(id));
  }, [dispatch, id]);

  const playTime = movieDetails?.runtime
    ? Duration.fromObject({ minutes: movieDetails?.runtime }).toFormat(
      'hh:mm'
    )
    : null;

  return isLoading ? (
    <LoaderContainer>
      <Loader light />
    </LoaderContainer>
  ) : (
      <DetailsContainer>
        <Heading>
          {movieDetails?.title}{' '}
          <span>
            {movieDetails?.release_date &&
              '(' +
              DateTime.fromISO(
                movieDetails.release_date
              ).toFormat('yyyy') +
              ')'}
          </span>
        </Heading>
        <Genre>
          {movieDetails?.genres.map((genre) => (
            <span key={genre.id}>{genre.name}</span>
          ))}
          <span>{playTime}</span>
        </Genre>
        <Tagline>{movieDetails?.tagline}</Tagline>
        <VideoWrapper>
          <div />
          <VideoBox>
            {video ? (
              <Video id={video.key} />
            ) : (
                movieDetails?.backdrop_path && (
                  <Image
                    src={`https://image.tmdb.org/t/p/original${movieDetails?.backdrop_path}`}
                  />
                )
              )}
          </VideoBox>
          <div />
        </VideoWrapper>
        <ContentBox>
          <div>
            <div>
              <Stat>
                <strong>Popularity: </strong>
                <span>
                  <i className='material-icons'>
                    insert_chart_outlined
                                </i>
                  {movieDetails?.popularity.toFixed(0)}
                </span>
              </Stat>
              <Stat>
                <strong>Status: </strong>
                <span>
                  <i className='material-icons'>info</i>
                  {movieDetails?.status}
                </span>
              </Stat>
              <Stat>
                <strong>Rating: </strong>
                <span>
                  <i className='material-icons'>start</i>
                  {movieDetails?.vote_average} / 10
                            </span>
              </Stat>
            </div>
          </div>
          <OverView>
            <p>{movieDetails?.overview}</p>
            <BackButton onClick={() => history.goBack()}>
              <i className='material-icons'>keyboard_backspace</i>
              <span>Back</span>
            </BackButton>
          </OverView>
        </ContentBox>
      </DetailsContainer>
    );
};

export default MovieDetails;
