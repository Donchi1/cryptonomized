const FORMTER = new Intl.NumberFormat(undefined, {
  currency: 'GBP',
  style: 'currency',
})

export default function formatCurrency(currency:number) {
  return FORMTER.format(currency)
}


