import { createComment } from "@/server/actions/comment";
import { type Comment } from "@/db/Models/Comment";
import {
  Button,
  Spinner,
  TextInput,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

import UserTitle from "./UserTitle";
interface CommentsProps {
  achievementId: string;
  comments: Comment[];
}
export default function Comments(props: CommentsProps) {
  // NOTE: comment.{name,author,img} are only available due to population in original query
  if (!props) return <Spinner />;
  return (
    <span>
      <Timeline>
        {props.comments?.map((comment) => (
          // @ts-expect-error we know there will be an _id provided (from population)
          <TimelineItem key={comment._id.toString()}>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>
                {new Date(comment.createdAt).toLocaleString()}
              </TimelineTime>
              <TimelineTitle>
                <UserTitle user={comment.author} />
              </TimelineTitle>
              <TimelineBody>{comment.content}</TimelineBody>
              {/* TODO: edit and remove user's comments */}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      <form action={createComment}>
        <TextInput
          name="content"
          required
          placeholder="Reply to the conversation"
        />
        <input type="hidden" name="id" value={props.achievementId.toString()} />
        <Button type="submit" className="w-full">
          Comment
        </Button>
      </form>
    </span>
  );
}
