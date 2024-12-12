async function s(e, o) {
  try {
    var n = `https://live.tbgeekstudio.co.kr/app/search-ranking?keyword=${o}`;
    const r = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${e}`
      }
    }, t = await fetch(n, r);
    if (!t.ok)
      throw new Error(`HTTP error! status: ${t.status}`);
  } catch (r) {
    throw console.error("API request failed:", r), r;
  }
}
export {
  s as setRankingKeyword
};
