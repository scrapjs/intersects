var type = require('mutypes');
var mumath = require('mumath');

/** @module  intersects */
module.exports = intersect;


/** Default settings */
var defaults = {
	/** Target container to observe within */
	within: undefined,

	/** Offsets from container to provide gaps */
	offsets: 0,

	/** The amount of square to detect intersection.
	 * 0 - touches
	 * 1 - fits
	 * .5 - 50% square intersection
	 * @type {(Function|value)}
	 */
	tolerance: .5
};


/**
 * Main intersection detector.
 *
 * @param {Rectangle} a Target
 * @param {Rectangle} b Container
 *
 * @return {bool} Whether target is within the container
 */
function intersects (a, b, opts){
	//ignore definite disintersection
	if (a.right < b.left || a.left > b.right) return false;
	if (a.bottom < b.top || a.top > b.bottom) return false;

	//intersection values
	var iX = Math.min(a.right - b.left, b.right - a.left);
	var iY = Math.min(a.bottom - b.top, b.bottom - a.top);
	var iSquare = iX * iY;

	var bSquare = (b.bottom - b.top) * (b.right - b.left);
	var aSquare = (a.bottom - a.top) * (a.right - a.left);

	//measure square overlap relative to the min square
	var targetSquare = Math.min(aSquare, bSquare);

	//minimal overlap ratio
	var minRatio = opts && opts.tolerance || defaults.tolerance;

	if (iSquare / targetSquare > minRatio) {
		return true;
	}

	return false;
}