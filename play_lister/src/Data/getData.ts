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
