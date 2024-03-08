# Koilang
A NPM package for translating koilang (tsevhu)

## Installation

```
npm i koilang
```

## Usage

At the moment, it supports translating from the Tsevhu roman alphabet to the phonetic alphabet and vice versa.

```typescript
import { translate } from 'koilang'

console.log(translate.romanToPhonetic("Nsitusera hmo, wbev obe ha kiseana khemb'en shoku kes'en aev moni"))
// Prints: nsitusɛɾɑ hmo, ʍbɛv obɛ hɑ kisɛɑnɑ kʰɛmbʔɛn ʃoku kɛsʔɛn ev moni

console.log(translate.phoneticToRoman('nsitusɛɾɑ hmo, ʍbɛv obɛ hɑ kisɛɑnɑ kʰɛmbʔɛn ʃoku kɛsʔɛn ev moni'))
// Prints: nsitusera hmo, wbev obe ha kiseana khemb'en shoku kes'en aev moni
```

