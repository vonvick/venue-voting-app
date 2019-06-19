import settings from '../settings';

const fetchRecommendedPlaces = async (place) => {
  const response = await fetch(`${settings.apiUrl}/?client_id=${
    settings.clientId
  }&client_secret=${
    settings.secretKey
  }&query=lunch&near=${
    place
  }&v=20170801&limit=3`);

  const results = await response.json();

  if (results.meta.code >= 400) {
    throw new Error('Error fetching results');
  } else {
    return formatResponse(results);
  }
};

const formatResponse = (response) => {
  if (Object.keys(response.response).length < 1) {
    return [];
  }

  let results = response.response;

  return results.group.results.map((item) => {
    return {
      name: item.venue.name,
      description: getItemDescription(item.venue.categories),
    }
  });
};

const getItemDescription = (categories) => {
  if (categories.length < 1) {
    return '';
  }

  const primaryCategory = categories.find(category => !!category.primary);

  return primaryCategory.name;
}

export default fetchRecommendedPlaces;
