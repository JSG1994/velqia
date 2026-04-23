import type { Escape } from '@/types'
import { toledoEscape } from './escapes/toledo'
import { aranjuezEscape } from './escapes/aranjuez'
import { salamancaEscape } from './escapes/salamanca'

export const escapes: Escape[] = [toledoEscape, aranjuezEscape, salamancaEscape]

export const departureCities = Array.from(new Set(escapes.map(e => e.departureCity))).sort()
