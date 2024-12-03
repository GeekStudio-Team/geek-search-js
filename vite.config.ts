import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "src/theborn/search.ts", // 진입점 파일
			name: "GeekSearch", // 전역에서 접근할 수 있는 이름
			fileName: (format) => `geek-search-theborn.${format}.js`, // 빌드된 파일 이름
			formats: ["umd", "es"], // UMD와 ESM 형식으로 빌드
		},
		rollupOptions: {
			external: [], // 외부 라이브러리 처리 (필요한 경우)
			output: {
				globals: {
					// 외부 라이브러리를 글로벌 변수로 설정 (필요한 경우)
				},
			},
		},
	},
});
