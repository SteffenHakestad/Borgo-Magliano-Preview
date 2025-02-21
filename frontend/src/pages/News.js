import React, { useState, useEffect } from "react";
import NewsUploadComponent from "../components/NewsUploadComponent";
import NewsComponent from "../components/NewsComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../components/HeaderComponent";

export default function News() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/news-posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <HeaderComponent HeaderName={"news"} />
      {/* Component below should only be visible if you have an admin account. Normal account and not logged in users should not be able to see it */}
      <NewsUploadComponent UploadDescription={t("news-upload")} />
      <NewsComponent
        newsHeadline={"News Headline Example #1"}
        newsText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt leo vel vehicula accumsan. Phasellus sapien ex, auctor ut consectetur a, dapibus et nisi. Etiam tincidunt tortor non ligula bibendum pretium. Quisque vitae eros et lacus eleifend mollis eget sed nibh. Cras ultricies tincidunt ligula, et sagittis neque scelerisque at. Etiam accumsan quam eget massa dictum, non pharetra neque varius. Sed dui velit, fringilla non dignissim eget, consequat ac lectus. Ut fermentum sagittis lectus, ac varius dui congue vel. Quisque iaculis, sapien eget volutpat semper, ipsum nunc vulputate lectus, at tincidunt velit nibh id tellus. Aliquam commodo efficitur quam vel condimentum. Aliquam pharetra pharetra justo at dictum. Ut sed rhoncus sapien. Ut eleifend gravida dui. "
        }
        newsImagePath={process.env.PUBLIC_URL + "/assets/images/Slide3.jpg"}
        createdAt={"01.01.2020"}
      />
      <NewsComponent
        newsHeadline={"News Headline Example #2"}
        newsText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec nulla metus. Etiam mauris turpis, facilisis eu consequat a, tempus id dolor. Donec sagittis finibus nulla. Mauris consectetur nisl purus, non vulputate ante ullamcorper at. Nunc condimentum, mauris a placerat accumsan, risus leo malesuada libero, vel maximus nibh quam ut neque. Duis eget bibendum purus. Mauris eros diam, maximus nec condimentum nec, scelerisque vitae neque. Donec sagittis, ligula ut vulputate tempor, elit dolor tempus nisi, id luctus nisi justo vel mauris. Fusce iaculis nisi ac tincidunt dictum. Vestibulum interdum odio enim, eget euismod lectus feugiat sed. "
        }
        newsImagePath={process.env.PUBLIC_URL + "/assets/images/Slide2.jpg"}
        createdAt={"01.01.2020"}
      />
      <NewsComponent
        newsHeadline={"News Headline Example #3"}
        newsText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie, lectus posuere pulvinar fringilla, lectus ex interdum ex, sit amet consectetur orci nibh sit amet magna. Donec et lacus condimentum, dignissim risus vitae, varius arcu. Etiam tellus magna, congue et eros et, aliquam tincidunt mi. Donec at nulla at quam lacinia condimentum sit amet in nibh. Cras ut eros vel lorem sagittis aliquam. Nam scelerisque ante sit amet volutpat auctor. In non tellus vel sapien tempor rhoncus. Proin et nisl sed eros accumsan aliquam eu sed lorem. Praesent mauris dolor, blandit ut nisi eu, blandit malesuada mi. Curabitur imperdiet mattis libero vestibulum congue. Donec hendrerit, quam id commodo molestie, metus ligula rhoncus dui, vitae interdum risus mauris vel eros. "
        }
        newsImagePath={process.env.PUBLIC_URL + "/assets/images/Slide1.jpg"}
        createdAt={"01.01.2020"}
      />
      {/* src={process.env.PUBLIC_URL + `/assets/images/Slide${index}.jpg`} */}
      {/*Create a new NewsComponent for every post*/}
      {posts.map((post) => (
        <NewsComponent
          key={post._id}
          newsHeadline={post.newsHeadline}
          newsText={post.newsText}
          newsImagePath={post.newsImage}
          createdAt={post.createdAt}
        />
      ))}
    </>
  );
}
