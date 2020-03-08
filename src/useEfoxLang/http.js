import http from 'axios'


function getQueryVariable(variable)
{
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i=0;i<vars.length;i++) {
    let pair = vars[i].split("=");
    if(pair[0] === variable){return pair[1];}
  }
  return false;
}
let l = getQueryVariable('l')
l = l ? l : 'zh'

export async function getMessages(pathName) {
  pathName = pathName || 'm_girgir/voice_friend_gir'
  console.log(
    'url',
    `https://m.girgirapp.com/langpackage/multiLangBig/${pathName}/${l}.json`
  )
  const url = `https://m.girgirapp.com/langpackage/multiLangBig/${pathName}/${l}.json`
  console.log('url', url)
  const res = await http.get(url)
  return res.data.data
};
