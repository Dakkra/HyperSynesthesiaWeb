import {Card, Divider, Typography} from "@mui/material";

export default function LegalPage() {
    return (
        <>
            <Card>
                <Typography variant={"h4"}>Legal</Typography>
                <Divider></Divider>
                <Typography variant={"h6"}>Website Copyright &copy; Christopher Soderquist</Typography>
                <Typography variant={"h6"}>HyperSynesthesia Application is under GPLv3 License</Typography>
                <Typography variant={"h6"}>HyperSynesthesia Plugin is under GPLv3 License</Typography>
                <Typography variant={"h6"}>Logo design by ZephyrasLied</Typography>
            </Card>
        </>
    )
}