/** @format */

class YoutubeNetwork {
  constructor(key) {
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  mostPopular() {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=KR&maxResults=25&key=AIzaSyDi50DRnmdHRQU_vfaocaFxkJgMk8J_Avs`,
      this.getRequestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items);
  }

  searchByInputValue(inputSearchValue) {
    return fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${inputSearchValue}&key=AIzaSyDi50DRnmdHRQU_vfaocaFxkJgMk8J_Avs`,
      this.requestOptions
    )
      .then((response) => response.json())
      .then((result) => result.items.map((item) => ({ ...item, id: item.id.videoId })));
  }
}

export default YoutubeNetwork;