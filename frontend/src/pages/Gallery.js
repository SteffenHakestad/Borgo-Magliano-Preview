import React, { useState, useEffect } from "react";
import GalleryComponent from "../components/GalleryComponent";
import GalleryUploadComponent from "../components/GalleryUploadComponent";
import { useTranslation } from "react-i18next";
import HeaderComponent from "../components/HeaderComponent";

export default function Gallery() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/gallery-posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <HeaderComponent HeaderName={"gallery"} />

      <GalleryUploadComponent UploadDescription={t("gallery-upload")} />
      <div className="gallery-container">
        <GalleryComponent
          ProfileName={"Ola Normann"}
          ProfilePicture={"/assets/images/TempProfilePic.png"}
          GalleryImagePath={
            process.env.PUBLIC_URL + "/assets/images/Slide1.jpg"
          }
          createdAt={"01.01.2020"}
        />
        <GalleryComponent
          ProfileName={"Ola Normann"}
          ProfilePicture={"/assets/images/TempProfilePic.png"}
          GalleryImagePath={
            process.env.PUBLIC_URL + "/assets/images/Slide2.jpg"
          }
          createdAt={"01.01.2020"}
        />
        <GalleryComponent
          ProfileName={"Ola Normann"}
          ProfilePicture={"/assets/images/TempProfilePic.png"}
          GalleryImagePath={
            process.env.PUBLIC_URL + "/assets/images/Slide3.jpg"
          }
          createdAt={"01.01.2020"}
        />
        <GalleryComponent
          ProfileName={"Ola Normann"}
          ProfilePicture={"/assets/images/TempProfilePic.png"}
          GalleryImagePath={
            process.env.PUBLIC_URL + "/assets/images/Slide1.jpg"
          }
          createdAt={"01.01.2020"}
        />
        {/*Create a new GalleryComponent for every post*/}
        {posts.map((post) => (
          <GalleryComponent
            key={post._id}
            ProfileName={"Ola Normann"}
            ProfilePicture={"/assets/images/TempProfilePic.png"}
            GalleryImagePath={post.galleryImage}
            createdAt={post.createdAt}
          />
        ))}
      </div>
    </>
  );
}
