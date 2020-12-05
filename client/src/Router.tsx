import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Loader from './components/Loader';
import NavigationMenu from './components/NavigationMenu';
import { PrivateRoute } from './helpers/PrivateRoute';
import { PublicRoute } from './helpers/PublicRoute';
import { selectMovieList, selectTvShowList } from './store/selctors';
import { AppWrapper, AppWrapperOuter } from './styles/GlobalStyle';

const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const GridPage = React.lazy(() => import('./pages/GridPage'));
const MovieDetails = React.lazy(() => import('./pages/MovieDetails'));
const TvShowDetails = React.lazy(() => import('./pages/TvShowDetails'));

const AppRouter: React.FC = () => (
    <Router>
        <AppWrapperOuter>
            <NavigationMenu />
            <AppWrapper>
                <Switch>
                    <PublicRoute
                        path='/login'
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <Login {...props} />
                            </Suspense>
                        )}
                    />
                    <PublicRoute
                        path='/register'
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <Register {...props} />
                            </Suspense>
                        )}
                    />
                    <PrivateRoute
                        path='/movies'
                        exact
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <GridPage selector={selectMovieList} {...props} />
                            </Suspense>
                        )}
                    />
                    <PrivateRoute
                        path='/tv-shows'
                        exact
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <GridPage selector={selectTvShowList} {...props} />
                            </Suspense>
                        )}
                    />
                    <PrivateRoute
                        path='/movies/:id'
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <MovieDetails {...props} />
                            </Suspense>
                        )}
                    />
                    <PrivateRoute
                        path='/tv-shows/:id'
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <TvShowDetails {...props} />
                            </Suspense>
                        )}
                    />
                    <Route
                        path='/'
                        render={(props) => (
                            <Suspense fallback={<Loader />}>
                                <Home {...props} />
                            </Suspense>
                        )}
                    />
                </Switch>
            </AppWrapper>
        </AppWrapperOuter>
    </Router>
);

export default AppRouter;
