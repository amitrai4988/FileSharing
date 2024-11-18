import File from "../models/file.js";
export const uploadImage = async (req, res) => {
    // console.log(req);//data jo frontened se a rha
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    };

    try {
        const file = await File.create(fileObj);
        console.log(file);

        res.status(200).json({ path: `http://localhost:8000/file/${file._id}` });
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: e.message });
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
    } catch (e) {
        console.error(e.message);
        res.status(500).json({ error: e.message });
    }
};
