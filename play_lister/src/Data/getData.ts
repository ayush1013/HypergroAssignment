import axios,{AxiosResponse} from "axios";

export const getData = (page:number) => {
  let res:Promise<AxiosResponse> = axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
  return res;
};

export type productType = {
    comment: { count: number; commentingAllowed: boolean };
    creator: { handle: string; name: string; id: number; pic: string };
    postId: string;
    reaction: { count: number; voted: boolean };
    submission: {
      description: string;
      hyperlink: string;
      mediaUrl: string;
      placeholderUrl: string;
      thumbnail: string;
      title: string;
    };
  };


  export const fetchALlData = async ():Promise<productType[]> => {
    let page = 0;
    let allVideos: productType[] = [];

    while (true) {
      const response = await fetch(
        `https://internship-service.onrender.com/videos?page=${page}`
      );
      const data = await response.json();
      // console.log(data.data);
      let posts = data.data.posts;

      if (posts.length === 0) {
        break; // No more data, exit loop
      }

      allVideos = [...allVideos, ...posts];
      page++;
    }
    
    localStorage.setItem("allData", JSON.stringify(allVideos));

    return allVideos
  };