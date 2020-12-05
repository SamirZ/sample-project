import React, { ReactElement, memo } from "react";
import styled from "styled-components";
import { DateTime } from "luxon";
import ListResult from '../../../models/moviedb/list-result.model';
import useProgressiveImage from '../../../hooks/useProgressiveImage';

const Item = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  max-width: 100%;
`;

const ItemBox = styled.div`
  box-shadow: 0px 0px 8px 0px black;
  border: 1px solid #333;
  border-radius: 5px;
  background-color: #333;
  color: lightgray;
  overflow: hidden;
  padding-bottom: 1rem;
  max-width: 500px;
  margin: auto;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

const ItemTitle = styled.p`
  padding: 1rem;
  font-size: 4rem;
  line-height: 4rem;
`;

const Image = styled.img`
  width: 500px;
  max-width: 100%;
  height: 250px;
  border-bottom: 0.2rem solid orange;
`;

interface Props extends ListResult {
  history: any;
  path: string;
}

const GridItem = memo(
  ({
    history,
    path,
    id,
    backdrop_path,
    title,
    name,
    first_air_date,
    last_air_date,
    release_date
  }: Props): ReactElement => {
    const text = title ? title : name;
    const date = release_date ? release_date : first_air_date;
    const src = useProgressiveImage({
      src: `https://image.tmdb.org/t/p/w500/${backdrop_path}`,
      fallbackSrc: "./no-image.png"
    });
    return (
      <Item key={id}>
        <ItemBox onClick={() => history.push(`${path}/${id}`)}>
          <Image src={src} />
          <ItemTitle>{text}</ItemTitle>
          {date && (
            <span>
              {date && DateTime.fromISO(date).toFormat("yyyy")}
              {last_air_date && `- ${DateTime.fromISO(last_air_date).toFormat("yyyy")}`}
            </span>
          )}
        </ItemBox>
      </Item>
    );
  }
);

export default GridItem;
