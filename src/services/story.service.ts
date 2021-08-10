/* Story service - contains methods for searching for and fetching stories */

import axios from "axios";
import { Articles, Sources } from "./story.service.types";

const apiKey = "d807b73681964d5b9a50d16d95140418";

const toDate = new Date();
const fromDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);

/* @ToDo: This is temp code to simply verify that the service calls work and that the interfaces are valid
 * Remaining: Returning the data to the consumer
 * Uses headers for the API token for greater security
 * Handle incoming date ranges
 * Maybe clean up URL construction a bit
 */

export class StoryService {
  /**
   * executes a query with a given term, fromDate, and toDate
   * @param {String} term - the search term
   * @param {Date} fromDate - (optional) the starting day of the search range
   * @param {Date} toDate - (optional) the ending day of the search range
   * @param {Number} pageSize (optional) max number of items per page
   */
  getEverything = (term: String, fromDate?: Date, toDate?: Date): any => {
    let results: Articles;
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${term}&from=2021-07-15&pageSize=100&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((res) => {
        results = res.data;
        console.log(results);
      });
  };

  /**
   * executes a query to get the top headlines
   * @param {String} term - the search term
   */
  getHeadlines = (term: String): any => {
    let results: Articles;
    axios
      .get(`https://newsapi.org/v2/top-headlines?q=${term}&apiKey=${apiKey}`)
      .then((res) => {
        results = res.data;
        console.log(results);
      });
  };

  /**
   * executes a query to get the list of allowable sources
   * @param {String} term - the search term
   */
  getSources = (): any => {
    let results: Sources;
    axios.get(`https://newsapi.org/v2/sources?apiKey=${apiKey}`).then((res) => {
      results = res.data;
      console.log(results);
    });
  };
}
