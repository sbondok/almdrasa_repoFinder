/**
 * Fetches repositories from Github API
 * @param {string} searchTerm - Username or organization name
 * @param {string} type - 'user' or 'org'
 * @returns {Promise<Array>} List of repositories
 */
export const fetchRepositories = async (searchTerm, type) => {
    // Using template literal
    const url = type === 'user' 
        ? `https://api.github.com/users/${searchTerm}/repos` 
        : `https://api.github.com/orgs/${searchTerm}/repos`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch repositories. Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
};
