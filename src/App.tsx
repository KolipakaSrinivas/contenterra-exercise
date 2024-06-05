import  { useState, useEffect } from "react";
import CardSection from "./Components/CardSection";
import Header from "./Components/Header";
import Aside from "./Components/Aside";
import { RedditPost, RedditResponse } from "./Components/TypeNode";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  const [posts, setPosts] = useState<RedditPost[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const initialTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setIsDarkMode(initialTheme === "dark");

    const themeChangeListener = (e: MediaQueryListEvent) =>
      setIsDarkMode(e.matches);
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    darkModeMediaQuery.addEventListener("change", themeChangeListener);

    return () => {
      darkModeMediaQuery.removeEventListener("change", themeChangeListener);
    };
  }, []);

  const handleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const handleHamburgerMenu = (): void => {
    setHamburgerMenu(prevState => !prevState);
  };

  const connectToDb = async (): Promise<RedditPost[]> => {
    try {
      const res = await fetch("https://www.reddit.com/r/reactjs.json");
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      const result: RedditResponse = await res.json();
      return result.data.children;
    } catch (error) {
      setError((error as Error).message);
      throw new Error((error as Error).message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await connectToDb();
        setPosts(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return (
      <div>
        Rendering error: {error}
      </div>
    );
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.style.backgroundColor = "#0e1113";
    } else {
      document.body.style.backgroundColor = "#f1f5f9";
    }
  }, [isDarkMode]);

  return (
    <div className={`${isDarkMode && "dark"} `}>
      <Header
        handleHamburgerMenu={handleHamburgerMenu}
        handleDarkMode={handleDarkMode}
        darkMode={isDarkMode}
      />
      <div className="flex pt-[5rem] mr-5 flex-row relative bg-[#f1f5f9] w-full  dark:bg-black">
        <Aside hamburgerMenu={hamburgerMenu} />
        <CardSection loading={loading} posts={posts} />
      </div>
    </div>
  );
};

export default App;
