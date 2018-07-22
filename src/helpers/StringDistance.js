export default function(s = "", t = "", transposition = true) {
  // Implementation of code found on:
  // https://en.wikipedia.org/wiki/Levenshtein_distance
  // and
  // https://en.wikipedia.org/wiki/Damerau%E2%80%93Levenshtein_distance
  // for all i and j, d[i,j] will hold the Levenshtein distance between
  // the first i characters of s and the first j characters of t
  // note that d has (m+1)*(n+1) values
  const m = s.length,
    n = t.length,
    d = [[]];

  let substitutionCost;

  // source prefixes can be transformed into empty string by
  // dropping all characters
  for (let i = 0; i <= m; i++) {
    if (!d[i]) d[i] = []; //Lazy initialize matrix
    d[i][0] = i;
  }

  // target prefixes can be reached from empty source prefix
  // by inserting every character
  for (let j = 0; j <= n; j++) {
    d[0][j] = j;
  }

  for (let j = 1; j <= n; j++) {
    for (let i = 1; i <= m; i++) {
      substitutionCost = s[i - 1] === t[j - 1] ? 0 : 1;
      d[i][j] = Math.min(
        d[i - 1][j] + 1, //deletion
        d[i][j - 1] + 1, //insertion
        d[i - 1][j - 1] + substitutionCost //substitution
      );
      if (transposition) {
        if (i > 1 && j > 1 && s[i - 1] === t[j - 2] && s[i - 2] === t[j - 1]) {
          d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + substitutionCost);
        } //transposition
      }
    }
  }

  return {
    result: d[m][n],
    matrix: d
  };
}
