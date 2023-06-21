import './Stories.css'
import { useState } from "react";
import Story from "../Story";

const Stories = ({ user, storiesMock }) => {
    return (
        <div className="Stories">
          <ul className="Stories__List">
                {storiesMock &&
                    storiesMock.map((story) => (
                        <li className="Stories__Item" key={story.id}>
                            <Story story={story} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}

export default Stories;