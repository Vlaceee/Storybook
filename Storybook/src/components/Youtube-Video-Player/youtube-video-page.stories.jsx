/* eslint-disable no-unused-vars */
import VideoPlayer from "./video_player";
import { Header } from "../Youtube-Header/youtube.stories";

import "./video_page.css";


export default {
  title: "Youtube-Video-Page",
  tags: ["autodocs"],

};

export const Video_Page = () => {
  return (
   <>
    <div className="whole-page">
        <div className="side-space"></div>
        <Header></Header>
        <div className="main-page"> </div>
    </div>
    </>
  );
};