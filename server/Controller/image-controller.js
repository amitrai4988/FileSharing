import dotenv from "dotenv";
import File from "../models/file.js";

dotenv.config();

export const uploadImage = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    };

    try {
        const file = await File.create(fileObj);
        console.log("File uploaded:", file);

        res.status(200).json({
            path: `${process.env.BASE_URL}/file/${file._id}`,
        });
    } catch (error) {
        console.error("Error uploading file:", error.message);
        res.status(500).json({ error: error.message });
    }
};

export const downloadImage = async (req, res) => {
    try {
        const file = await File.findById(req.params.fileId);
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        if (file.downloadContent !== undefined) {
            file.downloadContent++;
            await file.save();
        }

        res.download(file.path, file.name); 
    } catch (error) {
        console.error("Error downloading file:", error.message);
        res.status(500).json({ error: error.message });
    }
};
