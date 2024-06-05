export interface RedditResponse {
  kind: string;
  data: {
    children: RedditPost[];
  };
}

export interface RedditPost {
  kind: string;
  data: Post
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
    selftext_html :string
}

export interface CardPropsTypes {
    loading: boolean;
    posts: any;
}

export interface MyHeaderProps {
    handleHamburgerMenu: () => void;
    handleDarkMode: () => void;
    darkMode: boolean;
  }

export interface SelfPropsType {
    post: Post;
  }


export interface AsidePropsTypes {
  hamburgerMenu: boolean;
}