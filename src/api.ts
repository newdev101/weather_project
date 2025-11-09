const API_KEY = import.meta.env.VITE_API_KEY;
export async function getWeather({lat, lon}:{lat:number, lon:number}) {
  console.log('API_KEY:', API_KEY);
  const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely,alerts&appid=${API_KEY}`;
  console.log('Request URL:', url);
  const res = await fetch(url)
  const data = await res.json();
  console.log('Response:', data);
  return data;
}