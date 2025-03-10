import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'io.admin101.client',
    appName: 'admin101-app',
    webDir: '.output/public', // 修改為正確的輸出目錄
    // webDir: 'dist', // Nuxt 構建生成目錄
    server: {
        // 修改這裡
        // androidScheme: 'file',
        // 如果你想要使用 HTTP 服務器，可以改用：
        url: 'http://192.168.31.169:6969', // 您的測試伺服器位址
        cleartext: true, // 允許 HTTP 流量（非 HTTPS

    },
    android: {
        // Android 特定配置
        webContentsDebuggingEnabled: true, // 開發時啟用，生產環境應關閉
    },

};

export default config;
