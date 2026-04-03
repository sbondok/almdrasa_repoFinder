import { fetchRepositories } from './api.js';
import { renderRepositories, toggleLoading, showError, clearRepositories } from './ui.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const radioOptions = document.getElementsByName('search-type');

// Arrow function for submitting
const handleSearch = async (event) => {
    event.preventDefault();
    
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) return;

    // Get selected radio value using array methods and arrow function
    const selectedType = Array.from(radioOptions).find(radio => radio.checked)?.value;
    
    try {
        toggleLoading(true);
        const repositories = await fetchRepositories(searchTerm, selectedType);
        renderRepositories(repositories);
    } catch (error) {
        showError(error.message || 'Error occurred while fetching data.');
        clearRepositories();
    } finally {
        toggleLoading(false);
    }
};

searchForm.addEventListener('submit', handleSearch);
