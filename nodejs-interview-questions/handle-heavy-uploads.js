const express = require("express");
const cors = require("cors");


const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");



const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 5000 }));




const client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: "AKIAXRERTNTKAGUDGFLG",
        secretAccessKey: "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"
    }
});



async function getSignedUrlFromS3(fileName, contentType) {
    const putObjectParams = {
        Bucket: "chetan-storage",
        Key: `videos/${fileName}`,
        ContentType: contentType,
    }

    try {
        const command = new PutObjectCommand(putObjectParams);
        const url = await getSignedUrl(client, command, { expiresIn: 3600 });
        return url;
    } catch (error) {
        console.error(err);
        return null;
    }
}

const init = async () => {
    console.log("here is the url", await getSignedUrlFromS3(`video-${Date.now()}.mp4`, "video/mp4"));
};

init();

async function getSignedURI(req, res) {
    const { fileName } = req.body;
    const url = await getSignedUrlFromS3(fileName, "video/mp4");
    res.send({
        url
    })

}
app.post("/getSignedUrl", getSignedURI)





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running`);
})

