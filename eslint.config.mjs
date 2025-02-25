import antfu from '@antfu/eslint-config';

export default antfu({
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    stylistic: {
        indent: 4, // 使用 2 或 4 或 'tab' 視你的需求而定
        quotes: 'single', // 'single' 或 'double', 依據團隊風格要求
    },
    ignores: [
        '**/node_modules',
        '**/dist',
        '**/.output',
    ],
    yaml: false,
    jsonc: false,
    vue: true,
    typescript: {
        tsconfigPath: './tsconfig.json',
    },
    rules: {
        'style/semi': ['error', 'always'], // 強制每行結尾使用分號
        'style/console': ['warn', 'always'], // 強制每行結尾使用分號
    },
});
