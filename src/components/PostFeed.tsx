import { ExtendedPost } from "@/types/db";
import { FC } from "react";

interface PostFeedProps {
  initialPosts: ExtendedPost[];
  categoryName?: string;
}

const PostFeed: FC<PostFeedProps> = ({ initialPosts, categoryName }) => {
  return <div>PostFeed</div>;
};

export default PostFeed;
