let md5 = require("nodejs-md5");

const marvel_api_private_key = process.env.MARVEL_API_PRIVATE_KEY
const marvel_api_public_key = process.env.MARVEL_API_PUBLIC_KEY

exports.getMd5Hash = function(ts) {
    const toHash = `${ts.toString()}${marvel_api_private_key}${marvel_api_public_key}`
    let hashed = ""
    md5.string.quiet(toHash, function (err, md5) {
        if (err) {
            return new Error(`Hash has failed -- ${err}`)
        }
        hashed = md5
    });

    return hashed
}
