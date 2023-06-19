import { useState } from "react";

const Stories = (user, storiesMock) => {
    return (
        <div>
            {storiesMock.map((story) => {
                console.log(story);
            })}
            stories
        </div>
    )
}

export default Stories;