module.exports = function SQL(strings) {
  return {
    sql: strings.join('?'), // for mysql / mysql2
    text: strings.reduce((previous, current, i) => previous + '$' + i + current), // for postgres
    values: Array.prototype.slice.call(arguments, 1) // since node doesnt support argument unpacking yet
  }
}