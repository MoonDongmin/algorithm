function exchange(n, s) {
  for (let i = 1; i <= n - 1; i++) {
    for (let j = i + 1; j <= n; j++) {
      if (s[j] < s[i]) {
        [s[i], s[j]] = [s[j], s[i]];
      }
    }
  }
}
