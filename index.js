import _ from 'lodash';

export default function solution(content) {
  // BEGIN
  const data = content.split('\n').map((val) => val.slice(0, -1).split(',')).slice(1, -1);
  console.log(`Count: ${data.length}`);

  const cities = data.map((val) => val[7]);
  const sort = _.uniq(cities).sort();
  console.log(`Cities:${sort.map((val) => ` ${val}`)}`);

  const sortByHum = data.sort((a, b) => a[3] - b[3]);
  console.log(`Humidity: Min: ${sortByHum[0][3]}, Max: ${sortByHum[sortByHum.length - 1][3]}`);

  const sortByTemp = data.sort((a, b) => b[1] - a[1]);
  console.log(`HottestDay: ${sortByTemp[0][0]} ${sortByTemp[0][7]}`);

  const filt = data.filter((val) => val[0] === '2023-04-15');
  const allValues = filt.map((val) => (`${Number(val[1]) / 20}, ${val[7]}`));
  console.log(`HottestCity:${allValues.map((val) => val.split(','))[0][1]}`);

  // END
}