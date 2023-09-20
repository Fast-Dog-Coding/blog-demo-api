const { CATEGORIES, POSTS } = require('../data');

/**
 * Builds a filter function from a query object.
 *
 * @param {Object} query - The query object.
 * @return {function(*): boolean} - The filter function.
 * @private
 */
function _buildFilterFromQuery(query = {}) {
  const keys = Object.keys(query);
  // default filter: Match all
  let filter = (_) => true;

  // Create a filter from key passed in
  //  (currently handles a single query key/value)
  if (keys.length === 1) {
    const key = keys[0];
    const value = query[key];

    switch (key) {
      case 'category' :
        filter = item => item.categories.includes(value);
        break;

      case 'promotion' :
        filter = item => item.promotion === value;
        break;

      case 'date' :
        filter = item => {
          const [ year, month ] = value.split('-');
          const publishedDate = new Date(item.publishedDate);
          const rightYear = publishedDate.getFullYear() === parseInt(year, 10);
          const rightMonth = publishedDate.getMonth() === parseInt(month, 10) - 1;

          return rightYear && rightMonth;
        };
        break;

      default :
        break;
    }
  }

  return filter;
}

/**
 * Retrieves all posts based on the provided query.
 *
 * @param {string} [query] - The query string used to search for specific posts. Optional.
 * @return {Promise<Object[]>} Promise that resolves to an array of post objects.
 */
async function getAllPosts(query) {
  return Object.values(POSTS).filter(_buildFilterFromQuery(query));
}

/**
 * Retrieves the archive links for the published posts.
 *
 * @return {Promise<{label:string,url:string}[]>} A promise that resolves to an array of archive link objects.
 */
async function getArchiveLinks() {
  const postsWithDates = Object.values(POSTS).filter(post => !!post.publishedDate);
  const archiveLinks = postsWithDates
    // Sort the posts, most recent on top
    .sort((a, b) => a.publishedDate.localeCompare(b.publishedDate))

    // Transform into the object shape to be returned
    .map(post => {
      const date = new Date(post.publishedDate);

      return {
        url: `/posts/filtered/?date=${date.getFullYear()}-${date.getMonth() + 1}`,
        label: date.toLocaleDateString('UTC', { month: 'long', year: 'numeric' })
      };
    });

  // Return the de-duplicated array.
  return Object.values(
    archiveLinks.reduce((acc, cur) => {
      acc[cur.url] = cur;
      return acc;
    }, {})
  );
}

/**
 * Retrieves the categories of a post.
 * @returns {Promise<(string)[]>} A promise that resolves with an array of category names.
 */
async function getPostCategories() {
  return Object.values(CATEGORIES);
}

/**
 * Retrieves a post by its ID from the POSTS array.
 *
 * @param {number} postId - The ID of the post to retrieve.
 * @return {Promise<*>} - A promise that resolves with the post object corresponding to the given ID.
 */
async function getPostById(postId) {
  return POSTS[postId];
}

module.exports = {
  getAllPosts,
  getArchiveLinks,
  getPostById,
  getPostCategories
};
