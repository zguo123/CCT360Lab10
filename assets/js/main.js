/**
 * CCT360 Project 2
 *
 * This file contains all the functions necessary for the
 * necessary function of the site.
 *
 * NOTE: This is addition to the bootstrap JS.
 *
 * @author Zhaoyu Guo
 */

import { projects, getElement } from "./helpers.js";

/**
 * Searches the projects using the `projects` constant imported
 * from the `./helpers.js` file.
 *
 * NOTE:
 * Since we are using <script type='module' ...><script>, we must
 * use the window.<function_name> = function(...params) {...body} syntax
 * to make it accessible globally.
 *
 * See here:
 * https://stackoverflow.com/questions/53268248/js-modules-referenceerror-function-is-not-defined
 *
 * @param {any} event This represents an input change
 */
window.search = function (event) {
  const projectElement = getElement("projects", "id");

  projectElement.innerHTML = "hello";
  console.log(event.target.value);
  console.log(projects);
};
