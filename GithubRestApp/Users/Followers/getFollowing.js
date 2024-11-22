/**
 * Retrieves a list of all users that the authenticated user is following.
 *
 * @returns {Promise<Array|null>} - A promise that resolves to a list of usernames
 *                                 of the users being followed, or null if an error occurs.
 */
async function getFollowing(GH_TOKEN) {
  
  try {

    const endpoint = GH_API + "/user/following";
    
    const followingData = await GithubHttpApp.fetcher(GH_TOKEN, endpoint);

    if (!followingData) {
      Logger.log('Error retrieving following.');
      return null;
    }

    return followingData;
    
  } catch (error) {
    Logger.log('getFollowing error: ' + error);
  }
  
}
