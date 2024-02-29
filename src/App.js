import logo from './assests/exploreRepo.svg'
import './App.css';
import Cards from './components/Cards';
import { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import SortDropdown from './components/SortDropdown';

function App() {
  const [availableRepos, setAvailableRepos] = useState([]);
  const [sortOption, setSortOption] = useState('sort');


  // handle changes in the selected sort option
  const handleSortChange = (option) => {
    setSortOption(option);
  };

  // sort repositories based on the selected sort option
  const sortRepositories = (repos) => {
    return repos.sort((a, b) => {

      switch (sortOption) {
        case 'stars':
          return b.stargazers_count - a.stargazers_count;
        case 'watchers':
          return b.watchers_count - a.watchers_count;
        case 'score':
          return b.score - a.score;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'created_at':
          return new Date(b.created_at) - new Date(a.created_at);
        case 'updated_at':
          return new Date(b.updated_at) - new Date(a.updated_at);
        default:
          return 0;
      }
    });
  };

  // Sort the repositories based on the selected sort option
  const sortedRepositories = sortRepositories(availableRepos);

  const searchRepo = async (query) => {
    try {
      const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
      // console.log(response, 'response');
      setAvailableRepos(response.data.items);
    } catch (error) {
      console.log('Error fetching repositories:', error);
    }
  }

  const handleSelectRepo = () => { };
  return (
    <>
      <header>
        <img src={logo} alt="cat" />
        <h1>Repo Explorer</h1>
        <p>
          Discover, explore, and organize your favorite GitHub repositories with ease.
        </p>
      </header>
      <main>
        <SearchBar onSearch={searchRepo} />
        <SortDropdown sortOption={sortOption} onSortChange={handleSortChange} />
        {sortedRepositories.length > 0 ? (
          <Cards
            title="Available Repos"
            repos={sortedRepositories}
            fallbackText="Loading Repos..."
            onSelectRepo={handleSelectRepo} />
        ) : (
          <Cards
            title="Available Repos"
            repos={availableRepos}
            fallbackText="No repos found "
            onSelectRepo={handleSelectRepo}
          />
        )}

      </main>

    </>

  );
}

export default App;
