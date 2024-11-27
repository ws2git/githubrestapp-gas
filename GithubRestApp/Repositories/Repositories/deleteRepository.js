/**
 * Deletes a repository.
 *
 * This function makes a DELETE request to the GitHub API to delete the specified repository.
 *
 * **Important:** This function is specific to Google Apps Script and uses the `Lab_GithubHttpApp.fetcher` library to make the HTTP requests.
 *
 * @async
 * @param {string} owner - The owner of the repository.
 * @param {string} repo - The name of the repository.
 * @param {string} GH_TOKEN - The GitHub personal access token for authentication.
 * @returns {Promise<any>} A Promise that resolves with the GitHub API response or rejects with an error.
 */
 async function deleteRepository(owner, repo, GH_TOKEN) {

  try {
    
    const endpoint = GH_API + `/repos/${owner}/${repo}`;
    
    const response = await Lab_GithubHttpApp.deleter(GH_TOKEN, endpoint);
       
    return Lab_GithubHttpApp.handleHttpStatus(response.getResponseCode());
    
  } catch (error) {
    Logger.log('deleteRepository error: ' + error.message);
    return null;
  }
  
}
