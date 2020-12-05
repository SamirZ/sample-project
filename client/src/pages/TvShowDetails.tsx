import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { getTvShowDetailsAction } from "../store/actions";
import { selectTvShow } from "../store/selctors";
import { Video } from "../components/Video";
import { DateTime } from "luxon";
import Loader from "../components/Loader";
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
  BackButton
} from "../styles/Details.styles";

interface TParams {
  id: string;
}

const TvShowDetails: React.FC<RouteComponentProps<TParams>> = ({
  match: {
    params: { id }
  },
  history
}) => {
  const dispatch = useDispatch();
  const { tvShowDetails, video, isLoading } = useSelector(selectTvShow);

  useEffect(() => {
    dispatch(getTvShowDetailsAction(id));
  }, [dispatch, id]);

  return isLoading ? (
    <LoaderContainer>
      <Loader light />
    </LoaderContainer>
  ) : (
    <DetailsContainer>
      <Heading>
        {tvShowDetails?.name}{" "}
        <span>
          {tvShowDetails?.first_air_date &&
            "(" +
              DateTime.fromISO(tvShowDetails?.first_air_date).toFormat("yyyy") +
              (tvShowDetails?.last_air_date
                ? `-${DateTime.fromISO(tvShowDetails?.last_air_date).toFormat("yyyy")}`
                : "") +
              ")"}
        </span>
      </Heading>
      <Genre>
        {tvShowDetails?.genres.map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
      </Genre>
      <Tagline>{tvShowDetails?.seasons.length} Seasons</Tagline>
      <VideoWrapper>
        <div />
        <VideoBox>
          {video ? (
            <Video id={video.key} />
          ) : (
            tvShowDetails?.backdrop_path && (
              <Image
                src={`https://image.tmdb.org/t/p/original${tvShowDetails?.backdrop_path}`}
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
                <i className="material-icons">insert_chart_outlined</i>
                {tvShowDetails?.popularity.toFixed(0)}
              </span>
            </Stat>
            <Stat>
              <strong>Status: </strong>
              <span>
                <i className="material-icons">info</i>
                {tvShowDetails?.status}
              </span>
            </Stat>
            <Stat>
              <strong>Rating: </strong>
              <span>
                <i className="material-icons">start</i>
                {tvShowDetails?.vote_average} / 10
              </span>
            </Stat>
          </div>
        </div>
        <OverView>
          <p>{tvShowDetails?.overview}</p>
          <BackButton onClick={() => history.goBack()}>
            <i className="material-icons">keyboard_backspace</i>
            <span>Back</span>
          </BackButton>
        </OverView>
      </ContentBox>
    </DetailsContainer>
  );
};

export default TvShowDetails;
