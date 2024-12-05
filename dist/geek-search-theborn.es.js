async function n(t, e) {
  try {
    var a = `http://alpha.thebornmall.com/app/search-ranking?keyword=${e}`;
    const r = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`
      }
    }, o = await fetch(a, r);
    if (!o.ok)
      throw new Error(`HTTP error! status: ${o.status}`);
  } catch (r) {
    throw console.error("API request failed:", r), r;
  }
}
export {
  n as setRankingKeyword
};
