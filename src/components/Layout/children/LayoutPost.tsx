import { Avatar, Card, CardContent, Container, IconButton, Typography } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import React from "react";

function LayoutPost({ post, index }: { post: any, index: number }) {

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
            default:
                return state;
        }
    }

    const [liked, setLiked] = React.useState<boolean>(false);
    const [disliked, setDisliked] = React.useState<boolean>(false);
    const [state, dispatch] = React.useReducer(postActionReducer, post);


    const toggleLiked = () => {
        if (!liked) {
            dispatch({ type: 'LIKE' });
        } else {
            dispatch({ type: 'UNLIKE' });
        }
        setLiked(!liked);
    }

    const toggleDisliked = () => {
        if (!disliked) {
            dispatch({ type: 'DISLIKE' });
        } else {
            dispatch({ type: 'UNDISLIKE' });
        }
        setDisliked(!disliked);
    }

    return (
        <Card key={index} sx={{ p: 2, mt: 1 }}>
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
                    {!liked ? (<ThumbUpOffAltIcon color="disabled"/>) : <ThumbUpIcon color="success"/>}
                </IconButton>
                <IconButton aria-label="dislike" onClick={toggleDisliked}>
                    <Typography sx={{ mr: 1, ml: 1 }}> {state.dislikes ? state.dislikes : 0} </Typography>
                    {!disliked ? (<ThumbDownOffAltIcon color="disabled"/>) : <ThumbDownIcon color="error"/>}
                </IconButton>
            </Container>
        </Card>
    );

}

export default LayoutPost;