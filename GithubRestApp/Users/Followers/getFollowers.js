/**
 * Retrieves a list of the authenticated user's followers.
 *
 * @returns {Promise<Array|null>} - A promise that resolves to a list of usernames of the followers, or null if an error occurs.
 */
async function getFollowers(GH_TOKEN) {
  
  try {
    
    const endpoint = GH_API + "/user/followers";
    
    const followersData = await GithubHttpApp.fetcher(GH_TOKEN, endpoint);

    if (!followersData) {
      Logger.log('Error retrieving followers.');
      return null;
    }
    
    return followersData;
    
  } catch (error) {
    Logger.log('getFollowers error: ' + error);
  }
  
}
