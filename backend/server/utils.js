// Extra libraries
const md5 = require('nodejs-md5')

// Custom parameters and functions
const marvelApiPrivateKey = process.env.MARVEL_API_PRIVATE_KEY
const marvelApiPublicKey = process.env.MARVEL_API_PUBLIC_KEY

/**
 * Function to make the md5 parameter needed to do requests to MARVEL DEVELOPER API
 *
 * @function getMd5Hash
 * @param {timestamp} ts
 * @return {string}
 */
exports.getMd5Hash = function (ts) {
  const toHash = `${ts.toString()}${marvelApiPrivateKey}${marvelApiPublicKey}`
  let hashed = ''
  md5.string.quiet(toHash, function (err, md5) {
    if (err) {
      return new Error(`Hash has failed -- ${err}`)
    }
    hashed = md5
  })
  return hashed
}
