/**
 * CCT360 Project 2
 *
 * This file contains all the helper functions necessary for the
 * necessary function of the site.
 *
 * NOTE: This is addition to the bootstrap JS.
 *
 * @author Zhaoyu Guo
 */

/**
 * We are exporting all the project details so we can display it
 * dynamically in the `projects.html`.
 *
 * This is a constant because we should *NOT* change this variable
 */
export const projects = [
  {
    title: "utmcfsa.org",
  },
  {
    title: "UTM Coder",
  },
];

/**
 * A generic function that acts like a wrapper for
 * `document.getElementsByClassName(...params)`
 * and `document.getElementById(...params)`
 *
 * @param {string} elementName The name of the element we want to look for.
 * @param {string} type Whether we are looking at the `className` and `Id`.
 * @returns all the elements with `type` that contains `elementName`
 */
export function getElement(elementName, type) {
  switch (type.toLowerCase()) {
    case "class":
      return document.getElementsByClassName(elementName);
    case "id":
      return document.getElementById(elementName);
    default:
      break;
  }
}
