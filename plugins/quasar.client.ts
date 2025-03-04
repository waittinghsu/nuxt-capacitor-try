import { Notify, QAvatar, QBtn, QCard, QCardActions, QCardSection, QChip, QDrawer, QFooter, QHeader, QImg, QInput, QItem, QItemSection, QLayout, QList, QPageContainer, QScrollArea, QSeparator, QTab, QTabs, QToolbar, QToolbarTitle, Quasar, Ripple } from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Quasar, {
        directives: {
            Ripple, // 显式注册 Ripple 指令
        },
        plugins: {
            Notify,
        },
        config: {
            dark: true, // 全局默认暗黑模式
        },
        components: {
            QAvatar,
            QBtn,
            QCard,
            QChip,
            QCardSection,
            QCardActions,
            QDrawer,
            QFooter,
            QHeader,
            QImg,
            QItem,
            QItemSection,
            QInput,
            QLayout,
            QList,
            QPageContainer,
            QScrollArea,
            QSeparator,
            QTabs,
            QTab,
            QToolbar,
            QToolbarTitle,
        },
    });
});
