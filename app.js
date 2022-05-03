// ==UserScript==
// @name         Orange data transfert show
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Affiche les données transférées des livebox, dans un format compréhensible pour les humains
// @author       Romain NEIL
// @match        http://*livebox/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

const dataElementsNames = []; //TODO: add elements here (planned)

(function() {
	'use strict';

	setInterval(() => {
		dataElementsNames.forEach((e) => {
			const el = document.getElementById(e);

			if(el !== null) {
				el.innerText = format(parseFloat(el.innerText))
			}
		})
	}, 5000)
})();

/**
 * Retourne le nombre de données transférées dans un format 'human readable"
 * @param {number} octets
 */
function format(octets) {
	let c = 0;

	if(octets >= 1024) {
		//Ko
		c = octets / 1024;

		if(c >= 1024) {
			//Mo
			c /= 1024;

			if(c >= 1024) {
				c /= 1024;

				if(c >= 1024) {
					//Go
					c /= 1024;

					if(c >= 1024) {
						//To
						return (c / 1024) + " To"
					}

					return c + " Go"
				}

				return c + " Go"
			}

			return c + " Mo"
		}

		return c + " Ko"
	} else {
		return octets + " o";
	}
}

module.exports = format;
