import { Request, Response } from 'express';
import Guide, { IGuide } from '../models/Guide';

export const addGuide = async (req: Request, res: Response) => {
  const guide: IGuide = new Guide({
    subject: req.body.subject,
    number: req.body.number,
    semester: req.body.semester,
    docent: req.body.docent
  }); 

  const savedGuide = await guide.save();
  res.json({
    message: 'Guide Saved'
  });
};

export const findGuide = async (req: Request, res: Response) => {
  const guide = await Guide.findOne({  });
};

export const listGuide = () => {

};

export const modifyGuide = () => {

};

export const deleteGuide = () => {

};