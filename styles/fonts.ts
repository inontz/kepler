import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const inter = Inter({ subsets: ['latin'] })

const lineSeedRg = localFont({ src: './LINESeedSansTH_W_Rg.woff2' })
const lineSeedBd = localFont({ src: './LINESeedSansTH_W_Bd.woff2' })
const lineSeedTh = localFont({ src: './LINESeedSansTH_W_Th.woff2' })
const lineSeedHe = localFont({ src: './LINESeedSansTH_W_He.woff2' })
const lineSeedXBd = localFont({ src: './LINESeedSansTH_W_XBd.woff2' })
const keplerBd = localFont({ src: './kepler-goldman-bold.ttf' })

export { inter, lineSeedRg, lineSeedBd, lineSeedXBd, lineSeedTh, lineSeedHe, keplerBd}