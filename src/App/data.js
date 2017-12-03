export const fetchAdsFromApi = async () => {
  return await fetch(
    'https://cors-anywhere.herokuapp.com/https://api.mcmakler.de/v1/advertisements'
  ).then(response => response.json())
}

export const adsDataMapper = (entry, index) => ({
  type: entry.purpose === 0 ? 'Mieten' : 'Kaufen',
  image: entry.advertisementAssets[0]
    ? entry.advertisementAssets[0].advertisementThumbnails.inventory_m.url
    : entry.advertisementAssets.advertisementThumbnails.inventory_m.url,
  description: entry.title,
  location: entry.realestateSummary.address.fullAddress
    ? entry.realestateSummary.address.fullAddress
    : `${entry.realestateSummary.address.street}  ${
        entry.realestateSummary.address.number
      }, ${entry.realestateSummary.address.postalCode} ${
        entry.realestateSummary.address.city
      }`,
  price: entry.advertisementPrice.sellPrice.toFixed(2) + ' €',
  rooms: entry.realestateSummary.numberOfRooms + ' Zimmer',
  measure: `ab ${entry.realestateSummary.space.toFixed(2)}m2`
})

export const adsDataParser = json => json.data.slice(0, 10).map(adsDataMapper)
