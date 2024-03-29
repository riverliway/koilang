
export enum KoiPhoneme {
  m = 'm',
  n = 'n',
  p = 'p',
  b = 'b',
  t = 't',
  d = 'd',
  θ = 'θ',
  ts = 'ts',
  k = 'k',
  kh = 'kʰ',
  g = 'g',
  q = 'q',
  ɸ = 'ɸ',
  β = 'β',
  f = 'f',
  v = 'v',
  s = 's',
  ʃ = 'ʃ',
  tʃ = 'tʃ',
  z = 'z',
  ʒ = 'ʒ',
  ç = 'ç',
  x = 'x',
  h = 'h',
  ʔ = 'ʔ',
  ʍ = 'ʍ',
  l = 'l',
  ɾ = 'ɾ',
  i = 'i',
  u = 'u',
  o = 'o',
  ɔi = 'ɔi',
  ɪ = 'ɪ',
  ə = 'ə',
  ɛ = 'ɛ',
  œ = 'œ',
  e = 'e',
  aɪ = 'aɪ',
  aʊ = 'aʊ',
  ɑ = 'ɑ',
}

export type PrimaryWrittenGroup = KoiPhoneme.m | KoiPhoneme.t | KoiPhoneme.k | KoiPhoneme.ɸ | KoiPhoneme.s | KoiPhoneme.ʒ | KoiPhoneme.ʔ | KoiPhoneme.u | KoiPhoneme.ɪ | KoiPhoneme.e
export const writtenGrouping: [PrimaryWrittenGroup, KoiPhoneme, KoiPhoneme, KoiPhoneme][] = [
  [KoiPhoneme.m, KoiPhoneme.n, KoiPhoneme.p, KoiPhoneme.b],
  [KoiPhoneme.t, KoiPhoneme.d, KoiPhoneme.θ, KoiPhoneme.ts],
  [KoiPhoneme.k, KoiPhoneme.kh, KoiPhoneme.g, KoiPhoneme.q],
  [KoiPhoneme.ɸ, KoiPhoneme.β, KoiPhoneme.f, KoiPhoneme.v],
  [KoiPhoneme.s, KoiPhoneme.ʃ, KoiPhoneme.tʃ, KoiPhoneme.z],
  [KoiPhoneme.ʒ, KoiPhoneme.ç, KoiPhoneme.x, KoiPhoneme.h],
  [KoiPhoneme.ʔ, KoiPhoneme.ʍ, KoiPhoneme.l, KoiPhoneme.ɾ],
  [KoiPhoneme.u, KoiPhoneme.i, KoiPhoneme.o, KoiPhoneme.ɔi],
  [KoiPhoneme.ɪ, KoiPhoneme.ə, KoiPhoneme.ɛ, KoiPhoneme.œ],
  [KoiPhoneme.e, KoiPhoneme.aɪ, KoiPhoneme.aʊ, KoiPhoneme.ɑ]
]
