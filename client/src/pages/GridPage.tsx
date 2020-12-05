import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router-dom";

import { selectSearchTerm } from "../store/selctors";

import Grid from "../components/Grid";
import Search from "../components/Search";
import Loader from "../components/Loader";
import { GridPageWrapper } from "../styles/Details.styles";

interface Props extends RouteComponentProps {
  selector: any;
}

const GridPage = ({
  selector,
  history,
  match: { path }
}: Props): ReactElement => {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  const [searchLength, setSearchLength] = useState(
    searchTerm.length > 2 ? searchTerm.length : 0
  );

  const { page, results, total_pages, isLoading, getListAction }: any = useSelector(
    selector
  );

  useEffect(() => {
    setSearchLength(searchTerm.length > 2 ? searchTerm.length : 0);
  }, [searchTerm]);

  useEffect(() => {
    dispatch(getListAction(page));
  }, [searchLength, page, path, dispatch, getListAction]);

  const showPreviuos = useCallback(
    () => {
      if (page-1 >= 1) {
        dispatch(getListAction(page-1));
      }
    },
    [dispatch, page, getListAction],
  )

  const showNext = useCallback(
    () => {
      console.log('page+1', page+1);
      console.log('total_pages', total_pages)
      if (page+1 <= total_pages) {
        dispatch(getListAction(page+1));
      }
    },
    [dispatch, page, total_pages, getListAction],
  )

  return (
    <>
      <Search />
      {isLoading && <Loader />}
      <GridPageWrapper isLoading={isLoading}>
        <Grid
          history={history}
          path={path}
          items={results}
          page={page}
          totalPages={total_pages}
          showPreviuos={showPreviuos}
          showNext={showNext}
        />
      </GridPageWrapper>
    </>
  );
};

export default GridPage;
