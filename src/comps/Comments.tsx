"use client";
import { createComment, editComment } from "@/server/actions/comment";
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
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import React from "react";
import { ToastContext } from "./ToastProvider";
interface CommentsProps {
  achievementId: string;
  comments: Array<Comment & { isAuthor: boolean }>;
}

/**
 * interface to keep track of the state of a given comment
 */
type CommentState = Record<
  string,
  {
    /**
     * whether the comment is being edited
     */
    isEdit: boolean;
    /**
     * whether the comment has been saved
     */
    isSaved?: boolean;
    /**
     * the content of the comment
     */
    content: string;
  }
>;
export default function Comments(props: CommentsProps) {
  const [commentState, setCommentState] = React.useState<CommentState>({});
  const { addToast } = React.useContext(ToastContext);
  const [pending, startTransition] = React.useTransition();
  // NOTE: comment.{name,author,img} are only available due to population in original query
  if (!props) return <Spinner />;
  return (
    <span>
      <Timeline>
        {props?.comments?.map((comment) => {
          // @ts-expect-error we know there will be an _id provided (from population)
          const id = comment._id.toString();
          return (
            <TimelineItem className="mb--4" key={id}>
              <TimelinePoint />
              <TimelineContent>
                <TimelineTime>
                  {new Date(comment.createdAt).toLocaleString()}
                </TimelineTime>
                <TimelineTitle>
                  <UserTitle user={comment.author} />
                </TimelineTitle>
                <TimelineBody className="text-black">
                  {commentState[id]?.isEdit ? (
                    !pending ? (
                      <>
                        <TextInput
                          defaultValue={
                            commentState[id]?.content ?? comment.content
                          }
                          onChange={(e) =>
                            setCommentState((_) => ({
                              ..._,
                              [id]: {
                                isEdit: true,
                                content: e.target.value,
                              },
                            }))
                          }
                        />
                        <Button
                          onClick={() => {
                            startTransition(async () => {
                              try {
                                if (!commentState[id]?.content) {
                                  throw new Error("No content provided");
                                }
                                if (
                                  commentState[id]?.content == comment.content
                                ) {
                                  throw new Error("No changes made");
                                }
                                const data = await editComment(
                                  id,
                                  commentState[id]!.content,
                                );
                                if (data.error) {
                                  throw new Error(data.error);
                                }
                                addToast({
                                  // @ts-expect-error we know this msg exists if no errs
                                  message: data.message,
                                  type: "success",
                                });
                                setCommentState((_) => ({
                                  ..._,
                                  [id]: {
                                    isEdit: false,
                                    isSaved: true,
                                    content: commentState[id]?.content ?? "",
                                  },
                                }));
                              } catch (e: unknown) {
                                const error = e as Error;
                                addToast({
                                  message: error.message,
                                  type: "error",
                                  timeout: 8000,
                                });
                              }
                            });
                          }}
                          className="mb-2 w-full bg-slate-500"
                        >
                          Save
                        </Button>
                      </>
                    ) : (
                      <Spinner className="my-2" />
                    )
                  ) : (
                    <p>
                      {commentState[id]?.content ?? comment.content}{" "}
                      <i className="text-sm text-gray-600">
                        {/* show unsaved changes when content is different and not saved */}
                        {(commentState[id]?.content ?? comment.content) !=
                          comment.content && !commentState[id]?.isSaved
                          ? "(unsaved changes)"
                          : ""}
                      </i>
                    </p>
                  )}
                  {comment.isAuthor && (
                    <div className="flex gap-2 text-gray-500">
                      <button
                        onClick={() => {
                          setCommentState((_) => ({
                            ..._,
                            [id]: {
                              isEdit: !commentState[id]?.isEdit,
                              content:
                                commentState[id]?.content ?? comment.content,
                            },
                          }));
                        }}
                      >
                        <BsFillPencilFill />
                      </button>
                      <button>
                        <BsFillTrashFill />
                      </button>
                    </div>
                  )}
                </TimelineBody>
                {/* TODO: edit and remove user's comments */}
              </TimelineContent>
            </TimelineItem>
          );
        })}
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
