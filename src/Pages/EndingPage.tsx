import {IconButton, ImageList, ImageListItem, LinearProgress, TextField} from "@mui/material";
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from "@mui/material/Container";
import GetAppIcon from '@mui/icons-material/GetApp';
import ShareIcon from '@mui/icons-material/Share';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// @ts-ignore
function EndingPage({jump}) {

    function next() {
        jump(2);
    }


    const itemData = [
        { img: 'image-1.jpg', title: 'Image 1' },
        { img: 'image-2.jpg', title: 'Image 2' },
        { img: 'image-3.jpg', title: 'Image 3' },
        { img: 'image-4.jpg', title: 'Image 4' },
        { img: 'image-5.jpg', title: 'Image 5' },
        { img: 'image-6.jpg', title: 'Image 6' },
        // Add more items here...
    ];
    return (
        <div>
            <h1>
                The touching Ending

            </h1>

            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Card sx={{ width: 300, height: 300 }   }>
                    <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
                            כאן נשים את רשימת המנצחים/מדרגות יפות של ניצחון
                        </Typography>
                    </CardContent>
                </Card>
            </Container>

            <h2 className="secnd_head" >
                Souvenirs
            </h2>

            <ImageList variant="masonry" cols={2} gap={8} >
                {itemData.map((item) => (
                    <ImageListItem key={item.img} >
                        <img
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{ backgroundColor: 'gray' }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

            <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                <Button variant="contained" startIcon={<GetAppIcon />}>Download</Button>
                <Button variant="contained" startIcon={<ShareIcon/>}>Share</Button>
            </Container>

            <div>
                <h2 >
                    So What now?
                </h2>
                <Container sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '15px'}}>
                    <Button onClick={next} variant="contained">New adventure</Button>
                    <Button variant="contained">Bonus mission</Button>
                    <Button variant="contained">get da fuck outta heee</Button>
                </Container>
            </div>



        </div>
        )
}

export default EndingPage;