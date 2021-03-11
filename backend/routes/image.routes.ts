import { Router, Request, Response } from 'express';
const router = Router();
import cloudinary from 'cloudinary'

router.post('/', async (req: Request, res: Response) => {
  try {
    cloudinary.v2.config({ 
        cloud_name: 'dvkursvph', 
        api_key: '781446592633512', 
        api_secret: 'awtZhfR_Kr287fBR_9d-y3Cg2ug'
      })
      //@ts-ignore
      const path = Object.values(req.files)[0].path
      //@ts-ignore
      cloudinary.v2.uploader.upload(path)
        .then(image => res.json(image))
    //return res.json('oook')
  
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;