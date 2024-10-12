import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localfilePath) => {
    try {
        if (!localfilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localfilePath, {
            resourse_type: "auto"
        })
        //file has been uploaded successfully
        console.log("file is uploaded on cloudinary");
        return response;
    } catch (error) {
        fs.unlinkSync(localfilePath) //remove the locally saved temporary file as the upload opration got failed
        return null;
    }
}

cloudinary.v2.uploader.upload("https://upload.wikimedia.org/wikimedia/commons/Olympic_flag"), { public_id: "olympic_flag" },
    function (error, result) {
        console.log(result);
    }