import {
    ClosePopup,
    Notify,
    QAvatar,
    QBar,
    QBtn,
    QCard,
    QCardActions,
    QCardSection,
    QCarousel,
    QCarouselSlide,
    QChip,
    QDialog,
    QDrawer,
    QExpansionItem,
    QFooter,
    QForm,
    QHeader,
    QIcon,
    QImg,
    QInput,
    QIntersection,
    QItem,
    QItemSection,
    QLayout,
    QLinearProgress,
    QList,
    QPage,
    QPageContainer, QRouteTab,
    QScrollArea,
    QSeparator,
    QSlideItem,
    QSpace,
    QTab,
    QTable,
    QTabs,
    QTd,
    QTh,
    QToolbar,
    QToolbarTitle,
    QTooltip,
    QTr,
    Quasar,
    Ripple,
} from 'quasar';
import 'quasar/dist/quasar.css';
import '@quasar/extras/material-icons/material-icons.css';
import { baseColors } from '@/design-token/colors'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Quasar, {
        directives: {
            Ripple, // 显式注册 Ripple 指令
            ClosePopup, // 添加 ClosePopup 指令
        },
        plugins: {
            Notify,
        },
        config: {
            dark: true, // 全局默认暗黑模式
            brand: {
                // primary: baseColors.primary[500],
                // 'primary-light': baseColors.primary[300],
                // 'primary-dark': baseColors.primary[700],
                // secondary: baseColors.secondary[500],
                // 'secondary-light': baseColors.secondary[300],
                // 'secondary-dark': baseColors.secondary[700],
            }
        },
        components: {
            QAvatar,
            QBtn,
            QBar,
            QCard,
            QChip,
            QCardSection,
            QCardActions,
            QCarousel,
            QCarouselSlide,
            QExpansionItem,
            QDialog,
            QDrawer,
            QFooter,
            QForm,
            QHeader,
            QImg,
            QItem,
            QItemSection,
            QIntersection,
            QInput,
            QIcon,
            QLayout,
            QList,
            QLinearProgress,
            QPageContainer,
            QPage,
            QScrollArea,
            QSeparator,
            QSpace,
            QSlideItem,
            QTable,
            QTr,
            QTd,
            QTh,
            QTabs,
            QTab,
            QRouteTab,
            QToolbar,
            QTooltip,
            QToolbarTitle,
        },
    });
});
