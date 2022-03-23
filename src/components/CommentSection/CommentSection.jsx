import Comment from "../Comment/Comment";

function CommentSection() {
  return (
    <div
      className="bg-primary-gray w-full h-screen overflow-y-scroll"
      id="comment-section"
    >
      {/* The above styling is what enalbes the center page to be scrollable. The scroll bar
      is invisible thanks to the styling in index.css #comment-section */}
      <div>
        <br />
        <Comment
          title="lorem ispium"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
        "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
      "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
      "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
      "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
      "
          author="andrew neil"
        />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default CommentSection;
