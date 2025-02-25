import { Quasar, Notify, QBtn, QCard, QChip, QCardSection, QCardActions, QImg, QInput } from 'quasar'
import 'quasar/dist/quasar.css'
import '@quasar/extras/material-icons/material-icons.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Quasar, {
        plugins: {
            Notify,
        },
        components: {
            QBtn,
            QCard,
            QChip,
            QCardSection,
            QCardActions,
            QImg,
            QInput,
        },
    })
})
