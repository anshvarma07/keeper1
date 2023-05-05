import React from "react";

export default function Note() {
  return (
    // <div>
    //   <h1>This is title of Box</h1>
    //   <p>
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa velit,
    //     exercitationem eos a praesentium minima eaque fugit, illum similique
    //     tempore perspiciatis atque itaque! Eaque deleniti, placeat repudiandae
    //     maiores iusto fugiat! Consequatur voluptatem cum sapiente sed soluta
    //     dolore eaque, quisquam nostrum, asperiores ab, molestias sit. Minima!
    //   </p>
    // </div>
    <div class="card width18rem">
        <div class="card-body">
        <div className="titlearea">
        <h3 class="card-title">Card title</h3>
        </div>
        <hr />
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
  );
}
