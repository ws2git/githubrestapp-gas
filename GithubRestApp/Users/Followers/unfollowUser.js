/**
 * Attempts to unfollow a specified user on GitHub.
 *
 * @param {string} GH_TOKEN - Your GitHub personal access token.
 * @param {string} username - The username of the user to unfollow.
 * @returns {Promise<object>} A promise that resolves to an object with the following properties:
 *   - `success` (boolean): Indicates whether the operation was successful.
 *   - `message` (string): A message describing the result of the operation.
 */
async function unfollowUser(GH_TOKEN, username) {
  
  try {
    
    const endpoint = GH_API + `/user/following/${username}`;
    
    const response = await GithubHttpApp.deleter(GH_TOKEN, endpoint);

    return GithubHttpApp.handleHttpStatus(response.getResponseCode());
  
  } catch (error) {
    Logger.log('unfollowUser error: ' + username + ' ' + error);
  }
  
}
