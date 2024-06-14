import { Avatar, CardContent, Container, Typography } from "@mui/material";
function LayoutComment({ comment }: { comment: any }) {

    return (
        <Container sx={{ mt: 1 }}>
            <Container sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
                <Avatar sx={{ mt: 1 }} ></Avatar>
                <Typography sx={{ mt: 2 }}>{comment.author}</Typography>
                <CardContent sx={{ flexGrow: 5 }} >
                    <Typography variant="body1" noWrap>
                        {comment.comment}
                    </Typography>
                </CardContent>
            </Container>
        </Container>
    );

}

export default LayoutComment;