import { React } from "react";
import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";


const ProjectCard = (props) => {
    return (
        <Card sx={{ maxWidth: 245 }} className="project-card" >
            <CardMedia
                className="project-card__media"
                sx={{ height: 140 }}
                image = "/hero.jfif"
                title={ props.title }
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    { props.title }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { props.description }
                </Typography>
            </CardContent>
            <Box className="project-card__buttons">
                <Button style={{ display: "flex", float: "right" }} size="small" color="primary" href={ props.learn }>
                    Learn More
                </Button>

            </Box>
        </Card>
    );
};

export default ProjectCard;