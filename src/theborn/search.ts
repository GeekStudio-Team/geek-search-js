export async function setRankingKeyword(appToken: string, keyword: string) {
	try {
		var url = `http://alpha.thebornmall.com/app/search-ranking?keyword=${keyword}`;
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Autorization: `Bearer ${appToken}`,
			},
		};

		const response = await fetch(url, options);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
	} catch (error) {
		console.error("API request failed:", error);
		throw error;
	}
}
