function distance(s = "", t = "") {
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
    if (!d[i]) d[i] = [];
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
    }
  }

  return d;
}

const res = distance(process.argv[2], process.argv[3]);
console.log(res);
