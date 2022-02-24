import axios from 'axios'
import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/list';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  // //using fetch()
  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = `https://api.github.com/users/keoroAnthony/repos`;
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((repos) => {
  //       setAppState({ loading: false, repos: repos });
  //     });
  // }, [setAppState]);


//Using axios
  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = 'https://api.github.com/users/nzovia/repos';
    axios.get(apiUrl).then((repos) => {
      const allRepos = repos.data;
      setAppState({ loading: false, repos: allRepos });
    });
  }, [setAppState]);

  return (
    <div className='App'>
      <div className='container'>
        <h1>My Repositories</h1>
      </div>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} repos={appState.repos} />
      </div>
      <footer>
        <div className='footer'>
          Built with{' '}
          <span role='img' aria-label='love'>
            💚
          </span>{' '}
          by keoroAnthony
        </div>
      </footer>
    </div>
  );
}
export default App;
