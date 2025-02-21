import React, { useState, useEffect } from "react";

import BlogComponent from "../components/BlogComponent";
import BlogUploadComponent from "../components/BlogUploadComponent";
import HeaderComponent from "../components/HeaderComponent";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/blog-posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <HeaderComponent HeaderName={"blog"} />

      <BlogUploadComponent UploadDescription={t("blog-upload")} />
      <BlogComponent
        ProfileName={"Ola Normann"}
        ProfilePicture={"/assets/images/TempProfilePic.png"}
        BlogHeadline={"Blog Headline Example"}
        BlogText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar mi id ante rutrum convallis. Maecenas eget dui id leo bibendum tristique sed vel justo. Nunc justo mi, tristique eu laoreet nec, egestas ut urna. Fusce a mauris non magna porta faucibus ut a tellus. Nulla hendrerit iaculis odio. Donec nec arcu ut mauris posuere posuere. Nunc fermentum sollicitudin mauris quis pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet posuere diam, sed laoreet metus. Nullam elementum risus semper nibh egestas, sit amet interdum metus cursus. "
        }
        BlogImagePath={process.env.PUBLIC_URL + "/assets/images/EventTemp.png"}
        BlogImagePath2={
          process.env.PUBLIC_URL + "/assets/images/EventTemp1.png"
        }
        createdAt={"01.01.2020"}
      />
      {/*Create a new BlogComponent for every post*/}
      {posts.map((post) => (
        <BlogComponent
          key={post._id}
          //replace name and profile pic from DB somehow
          ProfileName={"Ola Normann"}
          ProfilePicture={"/assets/images/TempProfilePic.png"}
          BlogHeadline={post.blogHeadline}
          BlogText={post.blogText}
          BlogImagePath={post.blogImage}
          createdAt={post.createdAt}
        />
      ))}
    </>
  );
}
