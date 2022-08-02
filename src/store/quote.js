import { defineStore } from 'pinia'
import api from '@/api/quote'

export const useQuoteStore = defineStore({
  id: 'quote',
  state: () => ({
    quote: null,
    quoteId: null
  }),

  getters: {
    usedQuote: (state) => state.quote,
    usedQuoteId: (state) => state.quoteId,
  },

  actions: {
    async getQuote() {
      if (this.quoteId && !this.quote) {
        console.log('no')
        return
      } 
      try {
        this.quote = null
        const quote = await api.getQuote()
        this.quote = quote.data.slip.advice
        this.quoteId = quote.data.slip.id
      } catch (e) {
        this.quote = 'There was an error trying to fetch the advice'
        this.quoteId = 0
      }
    },
  },
})



// 'quote', {
//   state: () => ({ 
//     quote: 'It is easy to sit up and take notice, what\'s dificult is getting u and taking action.' 
//   }),

//   getters: {
//     quote: (state) => state.quote,
//   },

//   mutation: 

//   actions: {
//     getQuote() {
//       this.count++
//     },
//   },
// })