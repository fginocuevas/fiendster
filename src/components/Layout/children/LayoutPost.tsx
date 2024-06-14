import { Avatar, Button, Card, CardContent, Container, Divider, FormControl, IconButton, TextField, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { useReducer, useRef, useState } from "react";
import LayoutComment from "./LayoutComment";

function LayoutPost({ post }: { post: any }) {

    const [liked, setLiked] = useState<boolean>(false);
    const [disliked, setDisliked] = useState<boolean>(false);
    const comment = useRef<HTMLInputElement>();

    const postActionReducer = (state: any, action: any) => {
        switch (action.type) {
            case 'LIKE':
                return { ...state, likes: state.likes + 1 };
            case 'UNLIKE':
                return { ...state, likes: state.likes - 1 };
            case 'DISLIKE':
                return { ...state, dislikes: state.dislikes + 1 };
            case 'UNDISLIKE':
                return { ...state, dislikes: state.dislikes - 1 };
            case 'COMMENT':
                return { ...state, comments: [...state.comments, action.input] };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(postActionReducer, post);

    const submitComment = () => {
        if(comment?.current?.value && comment?.current?.value !== "") {
            dispatch({ type: 'COMMENT', input: { comment: comment?.current?.value , author: "Heidi" } });
            comment.current.value = "";
        };
    }

    const toggleLiked = () => {
        dispatch(!liked ? { type: 'LIKE'} : { type: 'UNLIKE' });
        setLiked(!liked);
    }

    const toggleDisliked = () => {
        dispatch(!disliked ? { type: 'DISLIKE' } : { type: 'UNDISLIKE' });
        setDisliked(!disliked);
    }

    return (
        <Card sx={{ p: 2, mt: 1 }}>
            <Container sx={{ display: 'flex' }}>
                <Avatar sx={{ mr: 1, ml: 1 }}></Avatar>
                <Typography sx={{ mt: 1, mb: 1 }}>James</Typography>
            </Container>
            <Container sx={{ mt: 1 }}>
                <CardContent>
                    <Typography key={post.id} variant="h6" noWrap>
                        {post.content}
                    </Typography>
                </CardContent>
            </Container>
            <Container sx={{ mt: 1 }}>
                <IconButton aria-label="like" onClick={toggleLiked}>
                    <Typography sx={{ mr: 1, ml: 1 }}> {state.likes ? state.likes : 0} </Typography>
                    {!liked ? (<ThumbUpOffAltIcon color="disabled" />) : <ThumbUpIcon color="success" />}
                </IconButton>
                <IconButton aria-label="dislike" onClick={toggleDisliked}>
                    <Typography sx={{ mr: 1, ml: 1 }}> {state.dislikes ? state.dislikes : 0} </Typography>
                    {!disliked ? (<ThumbDownOffAltIcon color="disabled" />) : <ThumbDownIcon color="error" />}
                </IconButton>
                {state?.comments?.length > 0 && <Divider sx={{ mt: 1, mb: 1 }} />}
                {state?.comments?.map((comment: any, index: number) => {
                    return <LayoutComment key={index} comment={comment} />
                })}
            </Container>
            <Container sx={{ mt: 1, flexGrow: 1 }}>
                <Divider sx={{ mt: 1, mb: 1 }} />
                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
                    <TextField 
                        multiline sx={{ flexGrow: 3 }}
                        inputRef={comment}
                    ></TextField>
                    <Button variant="contained" color="primary" onClick={submitComment} sx={{ flexGrow: 1 }}>
                        Comment
                    </Button>
                </FormControl>
            </Container>
        </Card>
    );

}

export default LayoutPost;