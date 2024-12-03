import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "./src/theborn/search.ts", // 번들링할 진입 파일
			name: "GeekSearch", // UMD로 노출할 전역 변수명
			fileName: (format) => `GeekSearch-theborn.${format}.js`,
		},
		rollupOptions: {
			external: [], // 외부 의존성을 지정 (필요 시)
			output: {
				globals: {}, // 외부 의존성의 글로벌 변수 맵핑
			},
		},
	},
});
