import React, { ReactElement } from "react";
import styled from "styled-components";

import NoResults from "./components/NoResults";
import GridItem from "./components/GridItem";
import ListResult from '../../models/moviedb/list-result.model';
import { PageNavigation } from './components/PageNavigation';

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 1rem;
  overflow-x: auto;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

interface Props {
  page: number;
  totalPages: number;
  items: ListResult[];
  history: any;
  path: string;
  showPreviuos: () => void;
  showNext: () => void;
}

const Grid = ({
  page,
  totalPages,
  items,
  history,
  path,
  showPreviuos,
  showNext
}: Props): ReactElement => (
  <>
    {items.length > 0 ? (
      <>
        <ItemsWrapper>
          {items.map(item => (
            <GridItem key={item.id} {...item} history={history} path={path} />
          ))}
        </ItemsWrapper>
        <PageNavigation page={page} totalPages={totalPages} showPreviuos={showPreviuos} showNext={showNext}/>
      </>
    ) : (
        <NoResults />
      )}
  </>
);

export default Grid;
