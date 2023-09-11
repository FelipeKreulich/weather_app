const KEY = '511a1ec3af6048ccafe191325231109';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);

  const data = await fetchResponse.json();

  return data;
};

export default fetchData;
