declare global {
	interface Window {
		GeekSearch: {
			setRankingKeyword: (appToken: string, keyword: string) => Promise<void>;
		};
	}
}
