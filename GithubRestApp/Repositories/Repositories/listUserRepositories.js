/**
 * Retrieves the repositories of a specific user on GitHub.
 *
 * This function makes a request to the GitHub API to retrieve the repository data of a specific user, using the personal access token provided.
 *
 * **Important:** This function is specific to Google Apps Script and uses the `Lab_GithubHttpApp.fetcher` library to make the HTTP requests.
 *
 * @async
 * @param {string} username - The GitHub username for which the repositories will be retrieved.
 * @param {string} GH_TOKEN - GitHub's personal access token for authentication.
 * @returns {Promise<any>} A Promise that resolves with an array of objects representing the user's repositories, or null in the event of an error.
 */
async function listUserRepositories(username, GH_TOKEN) {

  try {
    
    const endpoint = GH_API + `/users/${username}/repos`
    const repoData = await Lab_GithubHttpApp.fetcher(GH_TOKEN, endpoint);

    if (!repoData) {
      Logger.log('Error retrieving repositories.');
      return null;
    }
    
    return repoData;
    
  } catch (error) {
    Logger.log('listUserRepositories error: ' + error.message);
    return null;
  }
  
}
