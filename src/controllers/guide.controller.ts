import { Request, Response } from 'express';

import Guide, { IGuide } from '../models/Guide';

export async function getGuides(req: Request, res: Response): Promise<Response> {
  // retrieving records
  const guides = await Guide.find();
  // response from the server
  return res.json(guides);
}

export async function getGuide(req: Request, res: Response): Promise<Response> {
  // receiving the searched ID
  const { id } = req.params;
  const guide = await Guide.findById(id, (err, doc) => {
    if (err) {
      return res.status(500).json({
        message: 'Error making request',
        err
      });
    }
    if (!doc) {
      return res.status(404).json({
        message: "The guide doesn't exist"
      });
    }
  });
  // response from the server
  return res.status(200).json(guide);
}

export async function createGuide(req: Request, res: Response): Promise<Response> {
  // recovering data
  const guide: IGuide = new Guide({
    subject: req.body.subject,
    numberLab: req.body.numberLab,
    semester: req.body.semester,
    docent: req.body.docent
  });
  // saving data
  const savedGuide = await guide.save();
  // response from the server
  return res.status(200).json({
    message: 'Guide successfully saved',
    savedGuide
  });
}

export async function deleteGuide(req: Request, res: Response): Promise<Response> {
  // receiving the ID to delete
  const { id } = req.params;
  const guide = await Guide.findByIdAndRemove(id);
  // response from the server
  return res.status(200).json({
    message: 'Guide successfully deleted',
    guide
  });
}

export async function updateGuide(req: Request, res: Response): Promise<Response> {
  // receiving the ID to update
  const { id } = req.params;
  // receiving the data to update
  const { subject, numberLab, semester, docent } = req.body;
  const updateGuide = await Guide.findByIdAndUpdate(id, {
    subject,
    numberLab,
    semester,
    docent
  }, { new: true });
  // response from the server
  return res.status(200).json({
    message: 'Guide successfully updated',
    updateGuide
  });
}