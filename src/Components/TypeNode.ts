export interface RedditPost {
  kind: string;
  data: Post
}

export interface RedditResponse {
  kind: string;
  data: {
    children: RedditPost[];
  };
}

export interface Post {
    title: string;
    author: string;
    num_comments: number;
    url: string;
    score: number;
    ups: number;
    thumbnail: string;
    created_utc: number;
}

export interface CardPropsTypes {
    loading: boolean;
    posts: object;
}

export interface MyHeaderProps {
    handleHamburgerMenu: () => void;
    handleDarkMode: () => void;
    darkMode: boolean;
  }

export interface SelfPropsType {
    post: object;
  }


export interface AsidePropsTypes {
  hamburgerMenu: boolean;
}