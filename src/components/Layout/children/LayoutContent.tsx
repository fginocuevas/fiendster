import { Button, Container, Divider, FormControl, TextField, Toolbar } from "@mui/material";
import React, { MouseEvent } from "react";
import { Post } from "../../../dto/post.dto";
import LayoutPost from "./LayoutPost";

function LayoutContent() {

    const [posts, setPosts] = React.useState<Post[]>([new Post(1, "Hello World", "James")]);
    const [content, setContent] = React.useState<string>("");

    function submitPost(event: MouseEvent<HTMLButtonElement>): void {
        if(content && content !== "") {
            setPosts([...posts, new Post(posts.length + 1, content, "James")]);
            setContent("");
        };  
    }

    function handleTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setContent(event.target.value);
    }

    return (
        <Container
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default', p: 1 }}
        >
            <Toolbar />
            <Container>
            <FormControl fullWidth >
                <TextField multiline sx={{ pt: 1, pb: 1 }} onChange={handleTextChange} value={content}></TextField>
                <Button variant="contained" color="primary" onClick={submitPost}>
                    Post
                </Button>
            </FormControl>
            </Container>

            <Divider sx={{ pt: 1, pb: 1 }} />
            
            <Container sx={{ pt: 1, pb: 1 }}>
                {posts.map((post: any, index: number) => (
                    <LayoutPost key={index} post={post} />
                ))}
            </Container>
        </Container>
    );
}

export default LayoutContent;