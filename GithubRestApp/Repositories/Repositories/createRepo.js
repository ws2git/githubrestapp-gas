/**
 * Creates a new private repository for the authenticated user.
 * 
 * This function makes a POST request to the GitHub API to create a new private repository with the specified name.
 * 
 * **Important:** This function is specific to Google Apps Script and uses the `GithubHttpApp.fetcher` library to make the HTTP requests.
 *  
 * @async
 * @param {Object} options - The options to create a repository.
 * @param {string} GH_TOKEN - The GitHub personal access token for authentication.
 * @returns {Promise<any>} A Promise that resolves with the GitHub API response or rejects with an error.
 */
async function createRepository(options, GH_TOKEN) {

  try {
    
    const endpoint = GH_API + `/user/repos`;
    
    const defaultOptions = {
      private: true, // Default value 'private'
    };
    
    // Create the payload correctly as an object
    const payload = Object.assign({}, defaultOptions, options);

    const response = await GithubHttpApp.poster(GH_TOKEN, endpoint, payload);

    if (response.getResponseCode() !== 201) {
      return GithubHttpApp.handleHttpStatus(response.getResponseCode());
    }
    
    return response;
    
  } catch (error) {
    Logger.log('createRepository error: ' + error.message);
    return null;
  }
  
}
