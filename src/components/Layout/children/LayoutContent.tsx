import { Avatar, Button, Card, CardContent, Container, Divider, FormControl, TextField, Toolbar, Typography } from "@mui/material";
import React from "react";
import { MouseEvent } from "react";

function LayoutContent() {

    const [posts, setPosts] = React.useState<{ id: number; content: string; }[]>([{ id: 1, content: "Test Content" }]);
    const [content, setContent] = React.useState<string>("");

    function submitPost(event: MouseEvent<HTMLButtonElement>): void {
        setPosts([...posts, { id: posts.length, content: content }]);
        setContent("");
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
                <TextField multiline sx={{ pt: 1, pb: 1 }} onChange={handleTextChange} value={content}>

                </TextField>
                <Button variant="contained" color="primary" onClick={submitPost}>
                    Post
                </Button>
            </FormControl>
            </Container>

            <Divider sx={{ pt: 1, pb: 1 }} />
            
            <Container sx={{ pt: 1, pb: 1 }}>
                {posts.map((post: any, index: number) => (
                    <Card key={index} sx={{ height: 140, p: 2, mt: 1 }}>
                        <Container sx={{ display: 'flex' }}>
                            <Avatar sx={{ mr: 1, ml: 1}}></Avatar>
                            <Typography sx={{ mt: 1, mb: 1}}>James</Typography>
                        </Container>
                        <Container>
                            <CardContent>
                                <Typography key={post.id} variant="h6" noWrap>
                                    {post.content}
                                </Typography>
                            </CardContent>
                        </Container>
                    </Card>
                ))}
            </Container>
        </Container>
    );
}

export default LayoutContent;