import { adsDataMapper, adsDataParser } from '../data'

import { json } from '../__mocks__/apiResponse'

const expected = {
  type: 'Mieten',
  image:
    'https://d3e02gns9oqhhr.cloudfront.net/assets/expose_v2/573379e18ffd7c64368b4568_variant_asset5829e70a6bc59_inventoryM.jpg',
  description: 'Gemütliche 1-Zi Wohnung in ruhiger Lage auf dem Sonnenberg',
  location: 'Philippstraße 16, 09130 Chemnitz',
  price: '166.00 €',
  rooms: '1 Zimmer',
  measure: 'ab 37.00m2'
}

it('It maps the results correctly', () => {
  expect(adsDataMapper(json.data[0], 0)).toEqual(expected)
})

it('It parses the results correctly', () => {
  const parsedJson = adsDataParser(json)
  expect(parsedJson).toHaveLength(10)
  expect(parsedJson[0]).toEqual(expected)
})
