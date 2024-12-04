/**
 * Checks if the authenticated user is following a specified GitHub user.
 *
 * @async
 * @param {string} GH_TOKEN - The GitHub personal access token for authentication.
 * @param {string} username - The GitHub username to check.
 * @returns {Promise<any>} A Promise that resolves with the GitHub API response or rejects with an error.
 */
async function isFollowedUser(username, GH_TOKEN) {
  
  try {

    const endpoint = GH_API + `/user/following/${username}`;
    
    const response = UrlFetchApp.fetch(endpoint, {
      headers: {
        "Authorization": "Bearer " + GH_TOKEN
      },
      muteHttpExceptions: true 
    });
    
    return GithubHttpApp.handleHttpStatus(response.getResponseCode());
    
  } catch (error) {
    Logger.log('isFollowedUser error: ' + error);
  }
  
}
