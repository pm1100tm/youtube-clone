/** @format */

class YoutubeAxios {
  constructor(httpClient) {
    this.youtube = httpClient;
  }

  async mostPopular() {
    const response = await this.youtube.get('videos', {
      params: {
        part: 'snippet',
        chart: 'mostPopular',
        regionCode: 'KR',
        maxResults: 25
      }
    });
    console.log(response);
    return response.data.items;
  }

  async searchByInputValue(inputSearchValue) {
    const response = await this.youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: inputSearchValue
      }
    });

    return response.data.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default YoutubeAxios;
