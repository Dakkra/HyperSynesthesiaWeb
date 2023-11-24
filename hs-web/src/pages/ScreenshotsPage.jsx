import {Card, ImageList, ImageListItem, Typography} from "@mui/material";
import * as React from "react";
import ModalImage from "react-modal-image";

export default function ScreenshotsPage() {
    return (
        <Card>
            <Typography variant={"h4"}>Screenshots</Typography>

            <ImageList sx={{width: "100%"}} cols={2} rowHeight={200}>
                <ImageListItem>
                    <ModalImage small={"about_screen.png"} large={"about_screen.png"}></ModalImage>
                </ImageListItem>
                <ImageListItem>
                    <ModalImage small={"editor_screen.png"} large={"editor_screen.png"}></ModalImage>
                </ImageListItem>
            </ImageList>
        </Card>
    )
}