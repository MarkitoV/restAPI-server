import { Request, Response } from 'express';

import Guide, { IGuide } from '../models/Guide';

export const getGuides = async (req: Request, res: Response) => {
  const guide = await Guide.findOne({  });
};

export const listGuide = () => {

};

export const createGuide = async (req: Request, res: Response) => {
  const guide: IGuide = new Guide({
    subject: req.body.subject,
    number: req.body.number,
    semester: req.body.semester,
    docent: req.body.docent
  }); 
  
  const savedGuide = await guide.save();
  res.json({
    message: 'Guide successfully saved',
    savedGuide
  });
};

export const modifyGuide = () => {

};

export const deleteGuide = () => {

};