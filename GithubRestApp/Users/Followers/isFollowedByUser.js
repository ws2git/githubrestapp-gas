/**
 * Checks if a specified GitHub user is following another GitHub user.
 * 
 * This function makes a request to the GitHub API to verify if the user specified by the `username` parameter is following the user specified by the `target_user` parameter.
 * 
 * @async
 * @param {string} GH_TOKEN - The GitHub personal access token for authentication.
 * @param {string} username - The GitHub username of the user to check if they are being followed.
 * @param {string} target_user - The GitHub username of the user to check if they are following.
 * @returns {Promise<any>} A Promise that resolves with the GitHub API response or rejects with an error.
 */
async function isFollowedByUser(GH_TOKEN, username, target_user) {
  
  try {

    const endpoint = GH_API + `/users/${username}/following/${target_user}`;
    
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
