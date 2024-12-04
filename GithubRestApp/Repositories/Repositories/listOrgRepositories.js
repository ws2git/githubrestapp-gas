/**
 * Retrieves the repositories of a specific Organization on GitHub.
 *
 * This function makes a request to the GitHub API to retrieve the repository data of a specific organization, using the personal access token provided.
 *
 * **Important:** This function is specific to Google Apps Script and uses the `GithubHttpApp.fetcher` library to make the HTTP requests.
 *
 * @async
 * @param {string} org - The GitHub Organization name for which the repositories will be retrieved.
 * @param {string} GH_TOKEN - GitHub's personal access token for authentication.
 * @returns {Promise<any>} A Promise that resolves with an array of objects representing the organization's repositories, or null in the event of an error.
 */
async function listOrganizationRepositories(org, GH_TOKEN) {

  try {
    
    const endpoint = GH_API + `/orgs/${org}/repos`
    const repoData = await GithubHttpApp.fetcher(GH_TOKEN, endpoint);

    if (!repoData) {
      Logger.log('Error retrieving repositories.');
      return null;
    }
    
    return repoData;
    
  } catch (error) {
    Logger.log('listOrganizationRepositories error: ' + error.message);
    return null;
  }
  
}
