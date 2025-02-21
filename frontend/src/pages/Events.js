import React, { useState, useEffect } from "react";
import EventComponent from "../components/EventComponent";
import EventUploadComponent from "../components/EventUploadComponent";
import HeaderComponent from "../components/HeaderComponent";

import { useTranslation } from "react-i18next";

export default function Events() {
  const { t } = useTranslation();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch("/api/event-posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <HeaderComponent HeaderName={"events"} />

      <div id="event-component-container">
        {/*EventUploadComponent should only be visible to admin users*/}
        <EventUploadComponent UploadDescription={t("events-upload")} />

        <EventComponent
          EventImagePath={
            process.env.PUBLIC_URL + "/assets/images/EventTemp.png"
          }
          eventHeadline={"Event example #1"}
          eventText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus accumsan imperdiet vestibulum. Vivamus varius eros quis arcu fringilla dapibus. Fusce ut mollis arcu, a dapibus metus. Pellentesque accumsan rhoncus gravida. In sollicitudin quam eu cursus fermentum. "
          }
        />
        <EventComponent
          EventImagePath={
            process.env.PUBLIC_URL + "/assets/images/EventTemp1.png"
          }
          eventHeadline={"Event example #2"}
          eventText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a justo vitae leo tincidunt suscipit id vitae tortor. Fusce aliquet, eros in dictum accumsan, nunc tellus gravida dolor, quis vulputate augue sapien ac nunc."
          }
        />
        <EventComponent
          EventImagePath={
            process.env.PUBLIC_URL + "/assets/images/EventTemp2.png"
          }
          eventHeadline={"Event example #3"}
          eventText={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt leo vel vehicula accumsan. Phasellus sapien ex, auctor ut consectetur a, dapibus et nisi. Etiam tincidunt tortor non ligula bibendum pretium. Quisque vitae eros et lacus eleifend mollis eget sed nibh. Cras ultricies tincidunt ligula, et sagittis neque scelerisque at."
          }
        />
        {/*Create a new EventComponent for every post*/}
        {posts.map((post) => (
          <EventComponent
            key={post._id}
            EventImagePath={post.eventImage}
            eventHeadline={post.eventHeadline}
            eventText={post.eventText}
          />
        ))}
      </div>
    </>
  );
}

// {/* Success Popup */}
// {isSuccessPopupOpen && (
// 	<div className="success-failure-popup-overlay">
// 		<div className="success-failure-container">
// 			<div
// 				className="close-success-failure-popup-btn-container"
// 				style={{ background: "#D3F2EA" }}>
// 				<button
// 					className="close-success-failure-popup-btn"
// 					onClick={handlePopupClose}>
// 					<img
// 						className="edit-img"
// 						src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"}
// 						alt="Exit-Icon"
// 					/>
// 				</button>
// 			</div>
// 			<p>{t("event-success")}</p>
// 		</div>
// 	</div>
// )}

// {/* Failure Popup */}
// {isFailurePopupOpen && (
// 	<div className="success-failure-popup-overlay">
// 		<div className="success-failure-container">
// 			<div
// 				className="close-success-failure-popup-btn-container"
// 				style={{ background: "#FFCFC2" }}>
// 				<button
// 					className="close-success-failure-popup-btn"
// 					onClick={handlePopupClose}>
// 					<img
// 						className="edit-img"
// 						src={process.env.PUBLIC_URL + "/assets/icons/ExitIcon.svg"}
// 						alt="Exit-Icon"
// 					/>
// 				</button>
// 			</div>
// 			<p>{t("event-failure")}</p>
// 		</div>
// 	</div>
// )}
