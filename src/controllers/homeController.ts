import { Request, Response } from 'express';
import { sequelize } from '../instances/mysql';

import { Filme } from '../models/Filme';

export const home = async (req: Request, res: Response)=>{
    
    let filmes = await Filme.findAll()

    res.render('pages/home', {
        filmes
    })
};