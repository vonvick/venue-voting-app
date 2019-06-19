import settings from '../settings';

const fetchRecommendedPlaces = async (place) => {
  const response = await fetch(`${settings.apiUrl}?client_id=${
    settings.clientId
  }&client_secret=${
    settings.secretKey
  }&query=lunch&near=${
    place
  }&v=20180801&limit=3`);

  const results = await response.json();

  if (results.meta.code >= 400) {
    throw new Error('Error fetching results');
  } else {
    return formatResponse(results);
  }
};

const getVenueRatingsAndUrl = async (id) => {
  const response =  await fetch(`${settings.venueDetailsUrl}/${id}?client_id=${
    settings.clientId
  }&client_secret=${
    settings.secretKey
  }&v=20180801`);

  const results = await response.json();

  if (results.meta.code >= 400) {
    throw new Error('Error fetching results');
  } else {
    return results.response;
  }
};

const formatResponse = async (response) => {
  if (Object.keys(response.response).length < 1) {
    return [];
  }

  let results = response.response;

  const result = results.group.results.map(async (item) => {
    const itemDetailResponse =  await getVenueRatingsAndUrl(item.venue.id);
    
    const itemDetail = {
      id: itemDetailResponse.venue.id,
      canonicalUrl: itemDetailResponse.venue.canonicalUrl,
      rating: itemDetailResponse.venue.rating,
    };

    return {
      name: item.venue.name,
      description: getItemDescription(item.venue.categories),
      ...itemDetail
    };
  });

  return await Promise.all(result);
};

const getItemDescription = (categories) => {
  if (categories.length < 1) {
    return '';
  }

  const primaryCategory = categories.find(category => !!category.primary);

  return primaryCategory.name;
}

export default fetchRecommendedPlaces;
